const fs = require('fs')

const {GraphQLClient} = require('graphql-request')

function sortReposByReleaseDate(a, b) {
  if (a.releases.nodes[0].publishedAt > b.releases.nodes[0].publishedAt) {
    return -1
  } else if (
    a.releases.nodes[0].publishedAt < b.releases.nodes[0].publishedAt
  ) {
    return 1
  }
  return 0
}

function createReleaseHTML(repo) {
  const release = repo.releases.nodes[0]
  const date = release.publishedAt.substring(0, 10)
  const description = repo.descriptionHTML
    .replace(/^<div>/, '<div><em>')
    .replace(/<\/div>$/, '</em></div>')
  return `<li>
  <strong>${date}</strong> – <a href="${repo.url}">${repo.name}</a> <a href="${release.url}">${release.tagName}</a>
  ${description}
  <details><summary>${release.tagName} release notes</summary>${release.descriptionHTML}</details>
</li>`
}

function replaceSectionContent(readme, sectionCode, content) {
  const sectionRegExp = new RegExp(
    `(<!-- ${sectionCode} -->)\\r?\\n.*\\r?\\n(<!-- /${sectionCode} -->)`,
    's'
  )
  const match = sectionRegExp.exec(readme)
  if (!match) {
    return readme
  }
  const before = readme.slice(0, match.index)
  const after = readme.slice(match.index + match[0].length)
  return `${before}${match[1]}\n${content}\n${match[2]}${after}`
}

async function main() {
  const graphQLClient = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
      authorization: `Bearer ${process.env.INSIN_TOKEN}`,
    },
  })

  const response = await graphQLClient.request(`{
    viewer {
      repositories(ownerAffiliations:[OWNER], isFork: false, isLocked:false, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}, first: 100) {
        nodes {
          descriptionHTML
          name
          releases(last: 1) {
            nodes {
              descriptionHTML
              publishedAt
              tagName
              url
            }
          }
          url
        }
      }
    }
  }`)

  const releases = response.viewer.repositories.nodes
    .filter((repo) => repo.releases.nodes.length > 0)
    .sort(sortReposByReleaseDate)
    .slice(0, 5)
    .map(createReleaseHTML)

  const readme = fs.readFileSync('README.md', 'utf-8')

  fs.writeFileSync(
    'README.md',
    replaceSectionContent(
      readme,
      'RECENT_RELEASES',
      `<ul>\n${releases.join('\n')}\n</ul>`
    ),
    'utf-8'
  )
}

main().catch((error) => console.error(error))
