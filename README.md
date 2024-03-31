### Recent Releases

<!-- RECENT_RELEASES -->
<ul>
<li>
  <strong>2024-03-18</strong> – <a href="https://github.com/insin/astro-lazy-youtube-embed">astro-lazy-youtube-embed</a> <a href="https://github.com/insin/astro-lazy-youtube-embed/releases/tag/v0.4.0">v0.4.0</a>
  <div><em>Embed YouTube videos with a static placeholder which only embeds when you click</em></div>
  <details><summary>v0.4.0 release notes</summary><h3>Added</h3>
<ul>
<li>Added a <code>thumbnail</code> prop, enabling use of the alternate screenshot thumbnails YouTube provides</li>
<li>Added a <code>cookie</code> flag prop to opt-in to using <code>www.youtube.com/embed</code> instead of <code>www.youtube-nocookie.com/embed</code></li>
<li>Added JSDoc to props to improve editor DX</li>
</ul>
<h3>Changed</h3>
<ul>
<li>The embed now uses <code>www.youtube-nocookie.com/embed</code> by default</li>
<li>The static embed thumbnail <code>&lt;img&gt;</code> now uses <code>loading="lazy"</code> by default</li>
<li>The static embed now uses a black background, so there isn't a flash of gradient when the thumbnail <code>&lt;img&gt;</code> lazy-loads</li>
<li>The static embed now uses <code>i.ytimg.com</code> instead of <code>img.youtube.com</code> for the thumbnail <code>&lt;img&gt;</code>, as per the YouTube site and its API</li>
<li>The <code>modestbranding</code> embed parameter was deprecated by YouTube on August 15, 2023 and now has no effect - removed it from the <code>embedParams</code> defaults and marked it as deprecated</li>
<li>The <code>thumbnailRes</code> prop now also supports passing the <code>mq</code>/<code>hq</code>/<code>sd</code> abbreviations YouTube uses</li>
</ul>
<h3>Fixed</h3>
<ul>
<li>Fixed overriding defaulted <code>&lt;iframe&gt;</code> attributes - Astro doesn't merge attributes on HTML elements, so user-supplied attributes need to come first</li>
</ul></details>
</li>
<li>
  <strong>2024-03-07</strong> – <a href="https://github.com/insin/control-panel-for-youtube">control-panel-for-youtube</a> <a href="https://github.com/insin/control-panel-for-youtube/releases/tag/v1.1.0">v1.1.0</a>
  <div><em>Browser extension which gives you more control over YouTube by adding missing options and UI improvements - for desktop &amp; mobile browsers</em></div>
  <details><summary>v1.1.0 release notes</summary><ul>
<li>Fixed Firefox permission issues (the extension was disabled by default after install on all platforms, it had to be manually enabled every time in Firefox for Android, and the Permissions page was completely blank in Firefox for Android so permissions couldn't be granted) by using Manifest Version 2 instead for the Firefox version</li>
<li>Improved the Japanese translation (thanks <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/Catastravia/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Catastravia">@Catastravia</a>)</li>
<li>Fixed disconnectObservers() only disconnecting page observers</li>
</ul>
<p>hideShareThanksClip:</p>
<ul>
<li>Added a new option to hide the Share/Thanks/Clip buttons under a video (not enabled by default)</li>
</ul>
<p>hideChannels:</p>
<ul>
<li>You can now hide a channel while watching one of its videos - a "Hide channel" item is added to the video's ⋯ menu</li>
<li>This becomes an "Unhide channel" menu item if the channel is already hidden</li>
</ul>
<p>hideOpenApp:</p>
<ul>
<li>Fixed hiding "Open App" links when using YouTube in Japanese</li>
</ul>
<p>hideSponsored:</p>
<ul>
<li>Fixed related videos being hidden in the mobile version at tablet sizes when they contained an ad</li>
</ul>
<hr>
<p>Available in the following extension stores:</p>
<p><a href="https://chromewebstore.google.com/detail/control-panel-for-youtube/lodcanccmfbpjjpnngindkkmiehimile" rel="nofollow"><img src="https://private-user-images.githubusercontent.com/226692/307584913-08b44d7b-61d5-49f2-9a76-607eb36fe407.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE5MDUwMzEsIm5iZiI6MTcxMTkwNDczMSwicGF0aCI6Ii8yMjY2OTIvMzA3NTg0OTEzLTA4YjQ0ZDdiLTYxZDUtNDlmMi05YTc2LTYwN2ViMzZmZTQwNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMzMVQxNzA1MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MWVlNDMwZTViZjcwMDllNGZkNTUxYWEzODBkMDU4ZTUyNGQzY2I0ZTc1ZTFhOTE3Njk3MTE4MWQwZDI3OTdkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.dsUWFKBIH-nQVwiBpoqtioIVFEzB2ZJbAe5kBT_6Lpo" alt="Chrome Web Store" content-type-secured-asset="image/png" secured-asset-link="" style="max-width: 100%;"></a> <a href="https://addons.mozilla.org/firefox/addon/control-panel-for-youtube/" rel="nofollow"><img src="https://private-user-images.githubusercontent.com/226692/307636781-566d72e8-bd40-43a4-9118-1768946f5b20.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE5MDUwMzEsIm5iZiI6MTcxMTkwNDczMSwicGF0aCI6Ii8yMjY2OTIvMzA3NjM2NzgxLTU2NmQ3MmU4LWJkNDAtNDNhNC05MTE4LTE3Njg5NDZmNWIyMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMzMVQxNzA1MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMjcxYjY1NDllOGNjYzlkNWRhM2MxZDlhMmE0OTUzNjQxZGQ0MTg1YTdjNDVmYzAxZjY2ZGZiZjZlYjhiNDk1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.0DFmU56sUp-Ecj8FnZaFEq_gQr0WiZyakzg0mSTtlFY" alt="Mozilla Add-ons" content-type-secured-asset="image/png" secured-asset-link="" style="max-width: 100%;"></a></p></details>
</li>
<li>
  <strong>2024-01-26</strong> – <a href="https://github.com/insin/control-panel-for-twitter">control-panel-for-twitter</a> <a href="https://github.com/insin/control-panel-for-twitter/releases/tag/v3.23.1">v3.23.1</a>
  <div><em>Browser extension which gives you more control over your Twitter timeline and adds missing features and UI improvements - available for desktop and mobile browsers</em></div>
  <details><summary>v3.23.1 release notes</summary><ul>
<li>Hide the Ads nav item</li>
</ul>
<hr>
<p>Available in the following extension stores:</p>
<p><a href="https://apps.apple.com/app/id1668516167?platform=iphone" rel="nofollow"><img src="https://user-images.githubusercontent.com/226692/216768643-4756e33c-1e61-41a7-9c56-9bd80f10bcc9.png" alt="Apple App Store" style="max-width: 100%;"></a> <a href="https://chrome.google.com/webstore/detail/control-panel-for-twitter" rel="nofollow"><img src="https://user-images.githubusercontent.com/226692/212897023-9e66b1b0-e1cd-44df-a4f2-3d5bda80c5f8.png" alt="Chrome Web Store" style="max-width: 100%;"></a> <a href="https://addons.mozilla.org/firefox/addon/control-panel-for-twitter/" rel="nofollow"><img src="https://user-images.githubusercontent.com/226692/212897487-f3993495-2032-44a4-b0c6-1bd1d9cc56dd.png" alt="Firefox" style="max-width: 100%;"></a> <a href="https://microsoftedge.microsoft.com/addons/detail/control-panel-for-twitter/foccddlibbeccjiobcnakipdpkjiijjp" rel="nofollow"><img src="https://user-images.githubusercontent.com/226692/212897573-34b1af0a-dc5a-4aa2-a1e7-ca85d3823f9f.png" alt="Edge" style="max-width: 100%;"></a></p>
<h2>Screenshots</h2>
<h3>Nav Bar</h3>
<table>
<thead>
<tr>
<th>Before</th>
<th>After</th>
</tr>
</thead>
<tbody>
<tr>
<td><a target="_blank" rel="noopener noreferrer" href="https://private-user-images.githubusercontent.com/226692/301036711-9ae81d72-af05-4fad-ab65-53cf7e28e542.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE5MDUwMzEsIm5iZiI6MTcxMTkwNDczMSwicGF0aCI6Ii8yMjY2OTIvMzAxMDM2NzExLTlhZTgxZDcyLWFmMDUtNGZhZC1hYjY1LTUzY2Y3ZTI4ZTU0Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMzMVQxNzA1MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMmMxNzc1NmM3NTkzYzY2OTVmNjg1NWJhYTU0ZTQzNzNkMWU2MmM2MTI2YmU4YWM3MjAxYzA0OWZmMmY2ODE5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.yNP0MiJjh9opKZrF0XrMPCoyqjUP-qGDiduw8uR4VHU"><img src="https://private-user-images.githubusercontent.com/226692/301036711-9ae81d72-af05-4fad-ab65-53cf7e28e542.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE5MDUwMzEsIm5iZiI6MTcxMTkwNDczMSwicGF0aCI6Ii8yMjY2OTIvMzAxMDM2NzExLTlhZTgxZDcyLWFmMDUtNGZhZC1hYjY1LTUzY2Y3ZTI4ZTU0Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMzMVQxNzA1MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMmMxNzc1NmM3NTkzYzY2OTVmNjg1NWJhYTU0ZTQzNzNkMWU2MmM2MTI2YmU4YWM3MjAxYzA0OWZmMmY2ODE5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.yNP0MiJjh9opKZrF0XrMPCoyqjUP-qGDiduw8uR4VHU" content-type-secured-asset="image/png" style="max-width: 100%;"></a></td>
<td><a target="_blank" rel="noopener noreferrer" href="https://private-user-images.githubusercontent.com/226692/301036938-4e6a6858-8468-462d-93e3-04b3fe3f2285.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE5MDUwMzEsIm5iZiI6MTcxMTkwNDczMSwicGF0aCI6Ii8yMjY2OTIvMzAxMDM2OTM4LTRlNmE2ODU4LTg0NjgtNDYyZC05M2UzLTA0YjNmZTNmMjI4NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMzMVQxNzA1MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03OTZlYzMxMzhjNGE3ZWM0NzgzZDA2ODRhYTNiODRiYWEzMWJmOTM3OGRkM2M3MTcyNTk5ZWQ0NGQ3YzkwOTlmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.uWzIEKXclQiOGVv4CE1V9ISp0OIrrx2t41L9VKtajPo"><img src="https://private-user-images.githubusercontent.com/226692/301036938-4e6a6858-8468-462d-93e3-04b3fe3f2285.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE5MDUwMzEsIm5iZiI6MTcxMTkwNDczMSwicGF0aCI6Ii8yMjY2OTIvMzAxMDM2OTM4LTRlNmE2ODU4LTg0NjgtNDYyZC05M2UzLTA0YjNmZTNmMjI4NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMzMVQxNzA1MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03OTZlYzMxMzhjNGE3ZWM0NzgzZDA2ODRhYTNiODRiYWEzMWJmOTM3OGRkM2M3MTcyNTk5ZWQ0NGQ3YzkwOTlmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.uWzIEKXclQiOGVv4CE1V9ISp0OIrrx2t41L9VKtajPo" content-type-secured-asset="image/png" style="max-width: 100%;"></a></td>
</tr>
</tbody>
</table>
<h3>More Menu</h3>
<table>
<thead>
<tr>
<th>Before</th>
<th>After</th>
</tr>
</thead>
<tbody>
<tr>
<td><a target="_blank" rel="noopener noreferrer" href="https://private-user-images.githubusercontent.com/226692/301036904-3dbc13d6-caee-41eb-a2fa-8951246a0cab.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE5MDUwMzEsIm5iZiI6MTcxMTkwNDczMSwicGF0aCI6Ii8yMjY2OTIvMzAxMDM2OTA0LTNkYmMxM2Q2LWNhZWUtNDFlYi1hMmZhLTg5NTEyNDZhMGNhYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMzMVQxNzA1MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kNGE3ZmUwOTE1NTU3MzRiYjQ3ZTMyZDk0ZDU5NWJkNWJiNWJhYzdlZjAxNzkwZTAyZDM1OWM5ZDg2MmM1ZTY1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.PrwQdyV6rigIwmIOZYG2w7Fn50tEmLKl7RthFp0AW1Q"><img src="https://private-user-images.githubusercontent.com/226692/301036904-3dbc13d6-caee-41eb-a2fa-8951246a0cab.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE5MDUwMzEsIm5iZiI6MTcxMTkwNDczMSwicGF0aCI6Ii8yMjY2OTIvMzAxMDM2OTA0LTNkYmMxM2Q2LWNhZWUtNDFlYi1hMmZhLTg5NTEyNDZhMGNhYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMzMVQxNzA1MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kNGE3ZmUwOTE1NTU3MzRiYjQ3ZTMyZDk0ZDU5NWJkNWJiNWJhYzdlZjAxNzkwZTAyZDM1OWM5ZDg2MmM1ZTY1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.PrwQdyV6rigIwmIOZYG2w7Fn50tEmLKl7RthFp0AW1Q" content-type-secured-asset="image/png" style="max-width: 100%;"></a></td>
<td><a target="_blank" rel="noopener noreferrer" href="https://private-user-images.githubusercontent.com/226692/301036963-217104ee-63d9-4db9-8b26-4d7e7cd27873.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE5MDUwMzEsIm5iZiI6MTcxMTkwNDczMSwicGF0aCI6Ii8yMjY2OTIvMzAxMDM2OTYzLTIxNzEwNGVlLTYzZDktNGRiOS04YjI2LTRkN2U3Y2QyNzg3My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMzMVQxNzA1MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NWRhMzQzMTllYmMzNGMyODAyMTljYTkzMTAzNzBkMzMwMmYyZmY3NmYxYjE4NjdlNmZiNDQ3ZGVmMTIxNzkxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.HB8MVHTNux5ZrIz51b-yv6hZ35XQtAAeO8Mx73Ncw8Y"><img src="https://private-user-images.githubusercontent.com/226692/301036963-217104ee-63d9-4db9-8b26-4d7e7cd27873.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTE5MDUwMzEsIm5iZiI6MTcxMTkwNDczMSwicGF0aCI6Ii8yMjY2OTIvMzAxMDM2OTYzLTIxNzEwNGVlLTYzZDktNGRiOS04YjI2LTRkN2U3Y2QyNzg3My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMzMVQxNzA1MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NWRhMzQzMTllYmMzNGMyODAyMTljYTkzMTAzNzBkMzMwMmYyZmY3NmYxYjE4NjdlNmZiNDQ3ZGVmMTIxNzkxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.HB8MVHTNux5ZrIz51b-yv6hZ35XQtAAeO8Mx73Ncw8Y" content-type-secured-asset="image/png" style="max-width: 100%;"></a></td>
</tr>
</tbody>
</table></details>
</li>
<li>
  <strong>2023-10-19</strong> – <a href="https://github.com/insin/comments-owl-for-hacker-news">comments-owl-for-hacker-news</a> <a href="https://github.com/insin/comments-owl-for-hacker-news/releases/tag/v2.2.0">v2.2.0</a>
  <div><em>Browser extension which makes it easer to follow comment threads on Hacker News across multiple visits, allows you to annotate and mute users, and other UI tweaks and mobile UX improvements</em></div>
  <details><summary>v2.2.0 release notes</summary><ul>
<li>Added an option to disable or require confirmation for hiding on list pages</li>
<li>Added an option to increase the contrast of submission text (enabled by default)</li>
</ul>
<hr>
<p>Available in the following extension stores:</p>
<p><a href="https://apps.apple.com/us/app/comments-owl-for-hacker-news/id6451333500" rel="nofollow"><img src="https://user-images.githubusercontent.com/226692/216768643-4756e33c-1e61-41a7-9c56-9bd80f10bcc9.png" alt="Apple App Store" style="max-width: 100%;"></a> <a href="https://addons.mozilla.org/en-US/firefox/addon/hn-comments-owl/" rel="nofollow"><img src="https://user-images.githubusercontent.com/226692/212897487-f3993495-2032-44a4-b0c6-1bd1d9cc56dd.png" alt="Firefox" style="max-width: 100%;"></a> <a href="https://chrome.google.com/webstore/detail/kpoggabejgbenjahggloahnnaolmfock?authuser=0&amp;hl=en" rel="nofollow"><img src="https://user-images.githubusercontent.com/226692/212897023-9e66b1b0-e1cd-44df-a4f2-3d5bda80c5f8.png" alt="Chrome" style="max-width: 100%;"></a></p></details>
</li>
<li>
  <strong>2021-11-24</strong> – <a href="https://github.com/insin/rllmuk-ignore-topics">rllmuk-ignore-topics</a> <a href="https://github.com/insin/rllmuk-ignore-topics/releases/tag/v1.2">v1.2</a>
  <div><em>Hide topics and forums you're not interested in on the Rllmuk forum</em></div>
  <details><summary>v1.2 release notes</summary><ul>
<li>Added support for the Fluid view</li>
<li>Added a collapse control for the Fluid sidebar</li>
</ul></details>
</li>
</ul>
<!-- /RECENT_RELEASES -->
