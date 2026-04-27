### Recent Releases

<!-- RECENT_RELEASES -->
<ul>
<li>
  <strong>2026-04-26</strong> – <a href="https://github.com/insin/control-panel-for-youtube">control-panel-for-youtube</a> <a href="https://github.com/insin/control-panel-for-youtube/releases/tag/v1.33.2">v1.33.2</a>
  <div><em>Browser extension which gives you more control over YouTube by adding missing options and UI improvements - for desktop &amp; mobile browsers</em></div>
  <details><summary>v1.33.2 release notes</summary><p>Visit the <a href="https://soitis.dev/control-panel-for-youtube" rel="nofollow">Control Panel for YouTube website</a> for installation links, more information about the extension, and FAQs (mostly about Safari).</p>
<p>Follow <a href="https://bsky.app/profile/soitis.dev" rel="nofollow">@soitis.dev</a> on Bluesky or <a href="https://twitter.com/ControlPanelFT" rel="nofollow">@ControlPanelFT</a> on Twitter for updates.</p>
<h2>Changes</h2>
<ul>
<li>Fixed hiding watched videos in Home and Subscriptions on desktop</li>
<li>Fixed text being themed on hover in video description snippets on desktop</li>
<li>Fixed making topic page headers square</li>
<li>German translation updated by <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/uDEV2019/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/uDEV2019">@uDEV2019</a></li>
<li>Removed CSS for reverting themed links in video description snippets on desktop, as YouTube no longer seems to theme these</li>
</ul>
<h2>Availability (1/5)</h2>
<p>New versions have to be reviewed and approved for each browser before they're available to install or upgrade to.</p>
<p>This version is available for the following browsers:</p>
<p><a href="https://chromewebstore.google.com/detail/control-panel-for-youtube/lodcanccmfbpjjpnngindkkmiehimile" title="Chrome and Chromium-based browsers" rel="nofollow"><img src="https://private-user-images.githubusercontent.com/226692/307584913-08b44d7b-61d5-49f2-9a76-607eb36fe407.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvMzA3NTg0OTEzLTA4YjQ0ZDdiLTYxZDUtNDlmMi05YTc2LTYwN2ViMzZmZTQwNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMjI3ZjczNzFhYzc0YjQyYTExMTlmNDg0MGM5Y2U4MWNkMjY2ZDA0MTgxMzMyMjA5NDNhOWY1MGYwMmQyNTU3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.VHuZbLMzQhER7smsTEn2bRejRr1RGeSTjpBs4gqjW90" alt="Chrome and Chromium-based browsers" content-type-secured-asset="image/png" secured-asset-link="" style="max-width: 100%;"></a></p>
</details>
</li>
<li>
  <strong>2026-04-26</strong> – <a href="https://github.com/insin/comments-owl-for-hacker-news">comments-owl-for-hacker-news</a> <a href="https://github.com/insin/comments-owl-for-hacker-news/releases/tag/v3.8.0">v3.8.0</a>
  <div><em>Browser extension which makes it easer to follow comment threads on Hacker News across multiple visits, allows you to annotate and mute users, and other UI tweaks and mobile UX improvements</em></div>
  <details><summary>v3.8.0 release notes</summary><p>Visit the <a href="https://soitis.dev/comments-owl-for-hacker-news" rel="nofollow">Comments Owl for Hacker News website</a> for installation links, more information about the extension, and FAQs (mostly about Safari).</p>
<p>Follow <a href="https://bsky.app/profile/soitis.dev" rel="nofollow">@soitis.dev</a> on Bluesky or <a href="https://twitter.com/ControlPanelFT" rel="nofollow">@ControlPanelFT</a> on Twitter for updates.</p>
<h2>Changes</h2>
<h3>List page changes</h3>
<ul>
<li>Items with new comments are now marked as read if the user visits them in another tab</li>
<li>List page functionality now works for new items added the end when you hide an item</li>
<li>Item hiding features now apply to all list pages, except those showing things a user did (e.g. their hidden items)</li>
</ul>
<h3>Item page changes</h3>
<ul>
<li>Added options to individually hide the root/parent/prev/next nav links on comments</li>
<li>Added an option to hide all nav links on collapsed comments</li>
<li>Made the child count on collapsed threads clickable to expand them</li>
<li>Comment threads now support unmuting</li>
<li>Item pages now react to mute and note changes in other tabs</li>
<li>Reduced flashing by processing more page elements as soon as they appear</li>
<li>Removed extra space above and below the comment tree</li>
<li>Fixed toggle control changing width when toggled</li>
<li>Fixed storage listeners being accumulated when opening user hovercard, these will now only use initial mute and note state</li>
</ul>
<h3>Theming</h3>
<ul>
<li>Added page attributes to html for the top level pages we support, e.g. <code>[item]</code>, <code>[item-list]</code>, <code>[user]</code></li>
<li>Added an <code>--item-spacing</code> variable to control space between list page items</li>
<li>Added missing <code>--hovercard-text</code> variable derived from --text-secondary, and a rule to apply it</li>
<li>Derive default <code>--link value</code> from <code>--text-primary</code></li>
<li>Derive default <code>--hovercard-bg</code> from <code>--bg-content</code></li>
</ul>
<h3>Other</h3>
<ul>
<li>Rearranged option groups and split some options out into new General and Comments groups</li>
<li>Don't hide the Custom CSS "open in tab" link on iOS, as it lets the textarea grow</li>
<li>Fixed a navigation stylesheet being created when no related features are active</li>
<li>Fixed performance highlighting new comments in very large threads</li>
</ul>
<h2>Availability (2/5)</h2>
<p>New versions have to be reviewed and published by each browser extension store before they're available for use.</p>
<p>This version is available for the following browsers:</p>
<p><a href="https://addons.mozilla.org/firefox/addon/hn-comments-owl/" title="Firefox and Firefox for Android" rel="nofollow"><img src="https://private-user-images.githubusercontent.com/226692/307636781-566d72e8-bd40-43a4-9118-1768946f5b20.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvMzA3NjM2NzgxLTU2NmQ3MmU4LWJkNDAtNDNhNC05MTE4LTE3Njg5NDZmNWIyMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02MDQ0YzU4ODk1YWVlNzVlZDBhNjZiMDYxODAxMzYwZWJmYmJjZjZkZWVkMTQ5OGQzZTlmOGFlOWZiZTE5YmE2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ._-uA03CgqKVVgJdJNf6NRaH3TCnfvWKjHoW3FXbVw70" alt="Firefox and Firefox for Android" content-type-secured-asset="image/png" secured-asset-link="" style="max-width: 100%;"></a> <a href="https://chromewebstore.google.com/detail/comments-owl-for-hacker-n/kpoggabejgbenjahggloahnnaolmfock" title="Chrome and Chromium-based browsers" rel="nofollow"><img src="https://private-user-images.githubusercontent.com/226692/307584913-08b44d7b-61d5-49f2-9a76-607eb36fe407.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvMzA3NTg0OTEzLTA4YjQ0ZDdiLTYxZDUtNDlmMi05YTc2LTYwN2ViMzZmZTQwNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMjI3ZjczNzFhYzc0YjQyYTExMTlmNDg0MGM5Y2U4MWNkMjY2ZDA0MTgxMzMyMjA5NDNhOWY1MGYwMmQyNTU3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.VHuZbLMzQhER7smsTEn2bRejRr1RGeSTjpBs4gqjW90" alt="Chrome and Chromium-based browsers" content-type-secured-asset="image/png" secured-asset-link="" style="max-width: 100%;"></a></p>

<h2>Screenshots</h2>
<h3>Hide navigation links on collapsed comments</h3>
<table>
<thead>
<tr>
<th align="center">Before</th>
<th align="center">After</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center"><a target="_blank" rel="noopener noreferrer" href="https://private-user-images.githubusercontent.com/226692/583874280-9151a92b-ab16-4c41-b822-9237b80177ce.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvNTgzODc0MjgwLTkxNTFhOTJiLWFiMTYtNGM0MS1iODIyLTkyMzdiODAxNzdjZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZGZlYzA0MzdmMzhiOTVkYTc2YjMwYTI1MWVlMGFjNmRmY2NhZTBjZGQ2ZDgzYThiMDdhN2FmMzVmMGRjYjZmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.QUQPZzrIfxk-AxLW1u4QZyQ8ykWScHSJfoO9V55M1k8"><img width="2000" height="1594" src="https://private-user-images.githubusercontent.com/226692/583874280-9151a92b-ab16-4c41-b822-9237b80177ce.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvNTgzODc0MjgwLTkxNTFhOTJiLWFiMTYtNGM0MS1iODIyLTkyMzdiODAxNzdjZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZGZlYzA0MzdmMzhiOTVkYTc2YjMwYTI1MWVlMGFjNmRmY2NhZTBjZGQ2ZDgzYThiMDdhN2FmMzVmMGRjYjZmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.QUQPZzrIfxk-AxLW1u4QZyQ8ykWScHSJfoO9V55M1k8" content-type-secured-asset="image/png" style="max-width: 100%; height: auto; max-height: 1594px;"></a></td>
<td align="center"><a target="_blank" rel="noopener noreferrer" href="https://private-user-images.githubusercontent.com/226692/583874348-c30e7ff6-7380-43bf-80ff-b30b03fa1cff.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvNTgzODc0MzQ4LWMzMGU3ZmY2LTczODAtNDNiZi04MGZmLWIzMGIwM2ZhMWNmZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lZTUyZGRiNTMwZjY4NzYxYWMwOTU4MTlhMDQ3N2EwMTQwNzA3MzlmZTNiM2JkOGE0YTA2NGE4YTA1YjBiOTM5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.W-xyjrWdh5yhYX2mKhj6lHDWCFTL5ht013h6L_MPo2Q"><img width="2000" height="1594" src="https://private-user-images.githubusercontent.com/226692/583874348-c30e7ff6-7380-43bf-80ff-b30b03fa1cff.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvNTgzODc0MzQ4LWMzMGU3ZmY2LTczODAtNDNiZi04MGZmLWIzMGIwM2ZhMWNmZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lZTUyZGRiNTMwZjY4NzYxYWMwOTU4MTlhMDQ3N2EwMTQwNzA3MzlmZTNiM2JkOGE0YTA2NGE4YTA1YjBiOTM5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.W-xyjrWdh5yhYX2mKhj6lHDWCFTL5ht013h6L_MPo2Q" content-type-secured-asset="image/png" style="max-width: 100%; height: auto; max-height: 1594px;"></a></td>
</tr>
</tbody>
</table>
<details><summary><strong>Theme:</strong>Twitter Dim for HN dark mode</summary>
<div class="highlight highlight-source-css notranslate position-relative overflow-auto" data-snippet-clipboard-copy-content="/* #region General */
/* Narrow main column */
#hnmain { max-width: 72ch; }

/* More space betwen votelinks and the border/side */
html[item-list] #bigbox table {
  width: 97%;
  margin: 0 auto;
}

/* Improve readability of comments */
html[item] {
  .comment{ line-height: 1.5rem; font-size: .875rem; padding-right: 1rem; }
  .default p { margin-top: 1rem; }
}
/* #endregion */

/* #region Twitter Dim theme for dark mode */
html[dark]:not([pure-black]) {
  --bg-content: rgb(21, 32, 43);
  --bg-header: transparent;
  --bg-highlight: rgb(31, 45, 58);
  --bg-input: rgb(27, 36, 47);
  --bg-page: rgb(21, 32, 43);
  --comment-dead: rgb(16, 27, 38);
  --item-spacing: 10px;
  --link-header: var(--text-secondary);
  --logo-mark: rgb(29, 155, 240);
  --text-header: var(--text-secondary);
  --text-primary: rgb(247, 249, 249);
  --text-secondary: rgb(139, 152, 165);
  --text-topsel: var(--text-primary);
  /* More space between header contents and the border */
  #header &gt; table { padding: 8px !important; }
  &amp;[mobile] #header &gt; table { padding-bottom: 4px !important; }
  .desktopnav { margin-left: 4px; }
  .mobilenav .pagetop { margin-left: 0; }
  /* Title */
  .hnname a, .pagetop &gt; b { color: var(--logo-mark) !important; }
  /* Current page highlight */
  .topsel, .pagetop font[color=&quot;#FFFFFF&quot;] { font-weight: 600; }
  /* Borders */
  body { margin-top: 0; margin-bottom: 0; }
  --border: rgb(56, 68, 77);
  #header, #footer { border-bottom: 1px solid var(--border); }
  &amp;[desktop] #hnmain {
    border: 1px solid var(--border);
    border-top: none;
  }
  /* Twitter-style buttons */
  input[type=&quot;submit&quot;] {
    appearance: none;
    background-color: rgb(29, 155, 240);
    border-radius: 9999px;
    border: none;
    color: var(--text-primary);
    cursor: pointer;
    font-weight: bold;
    min-height: 36px;
    padding: 0 16px;
    text-transform: capitalize;
    transition: background-color .2s;
    &amp;:hover {
      background-color: rgba(29, 155, 240, .8);
    }
  }
}
/* #endregion */"><pre><span class="pl-c">/* #region General */</span>
<span class="pl-c">/* Narrow main column */</span>
<span class="pl-kos">#</span><span class="pl-c1">hnmain</span> { <span class="pl-c1">max-width</span><span class="pl-kos">:</span> <span class="pl-c1">72<span class="pl-smi">ch</span></span>; }

<span class="pl-c">/* More space betwen votelinks and the border/side */</span>
<span class="pl-ent">html</span>[<span class="pl-c1">item-list</span>] <span class="pl-kos">#</span><span class="pl-c1">bigbox</span> <span class="pl-ent">table</span> {
  <span class="pl-c1">width</span><span class="pl-kos">:</span> <span class="pl-c1">97<span class="pl-smi">%</span></span>;
  <span class="pl-c1">margin</span><span class="pl-kos">:</span> <span class="pl-c1">0</span> auto;
}

<span class="pl-c">/* Improve readability of comments */</span>
<span class="pl-ent">html</span>[<span class="pl-c1">item</span>] {
  .<span class="pl-c1">comment</span>{ <span class="pl-c1">line-height</span><span class="pl-kos">:</span> <span class="pl-c1">1.5<span class="pl-smi">rem</span></span>; <span class="pl-c1">font-size</span><span class="pl-kos">:</span> <span class="pl-c1">.875<span class="pl-smi">rem</span></span>; <span class="pl-c1">padding-right</span><span class="pl-kos">:</span> <span class="pl-c1">1<span class="pl-smi">rem</span></span>; }
  .<span class="pl-c1">default</span> <span class="pl-ent">p</span> { <span class="pl-c1">margin-top</span><span class="pl-kos">:</span> <span class="pl-c1">1<span class="pl-smi">rem</span></span>; }
}
<span class="pl-c">/* #endregion */</span>

<span class="pl-c">/* #region Twitter Dim theme for dark mode */</span>
<span class="pl-ent">html</span>[<span class="pl-c1">dark</span>]<span class="pl-kos">:</span><span class="pl-c1">not</span>([<span class="pl-c1">pure-black</span>]) {
  <span class="pl-s1">--bg-content</span><span class="pl-kos">:</span> <span class="pl-en">rgb</span>(<span class="pl-c1">21</span><span class="pl-kos">,</span> <span class="pl-c1">32</span><span class="pl-kos">,</span> <span class="pl-c1">43</span>);
  <span class="pl-s1">--bg-header</span><span class="pl-kos">:</span> transparent;
  <span class="pl-s1">--bg-highlight</span><span class="pl-kos">:</span> <span class="pl-en">rgb</span>(<span class="pl-c1">31</span><span class="pl-kos">,</span> <span class="pl-c1">45</span><span class="pl-kos">,</span> <span class="pl-c1">58</span>);
  <span class="pl-s1">--bg-input</span><span class="pl-kos">:</span> <span class="pl-en">rgb</span>(<span class="pl-c1">27</span><span class="pl-kos">,</span> <span class="pl-c1">36</span><span class="pl-kos">,</span> <span class="pl-c1">47</span>);
  <span class="pl-s1">--bg-page</span><span class="pl-kos">:</span> <span class="pl-en">rgb</span>(<span class="pl-c1">21</span><span class="pl-kos">,</span> <span class="pl-c1">32</span><span class="pl-kos">,</span> <span class="pl-c1">43</span>);
  <span class="pl-s1">--comment-dead</span><span class="pl-kos">:</span> <span class="pl-en">rgb</span>(<span class="pl-c1">16</span><span class="pl-kos">,</span> <span class="pl-c1">27</span><span class="pl-kos">,</span> <span class="pl-c1">38</span>);
  <span class="pl-s1">--item-spacing</span><span class="pl-kos">:</span> <span class="pl-c1">10<span class="pl-smi">px</span></span>;
  <span class="pl-s1">--link-header</span><span class="pl-kos">:</span> <span class="pl-en">var</span>(<span class="pl-s1">--text-secondary</span>);
  <span class="pl-s1">--logo-mark</span><span class="pl-kos">:</span> <span class="pl-en">rgb</span>(<span class="pl-c1">29</span><span class="pl-kos">,</span> <span class="pl-c1">155</span><span class="pl-kos">,</span> <span class="pl-c1">240</span>);
  <span class="pl-s1">--text-header</span><span class="pl-kos">:</span> <span class="pl-en">var</span>(<span class="pl-s1">--text-secondary</span>);
  <span class="pl-s1">--text-primary</span><span class="pl-kos">:</span> <span class="pl-en">rgb</span>(<span class="pl-c1">247</span><span class="pl-kos">,</span> <span class="pl-c1">249</span><span class="pl-kos">,</span> <span class="pl-c1">249</span>);
  <span class="pl-s1">--text-secondary</span><span class="pl-kos">:</span> <span class="pl-en">rgb</span>(<span class="pl-c1">139</span><span class="pl-kos">,</span> <span class="pl-c1">152</span><span class="pl-kos">,</span> <span class="pl-c1">165</span>);
  <span class="pl-s1">--text-topsel</span><span class="pl-kos">:</span> <span class="pl-en">var</span>(<span class="pl-s1">--text-primary</span>);
  <span class="pl-c">/* More space between header contents and the border */</span>
  <span class="pl-kos">#</span><span class="pl-c1">header</span> <span class="pl-c1">&gt;</span> <span class="pl-ent">table</span> { <span class="pl-c1">padding</span><span class="pl-kos">:</span> <span class="pl-c1">8<span class="pl-smi">px</span></span> <span class="pl-k">!important</span>; }
  <span class="pl-ent">&amp;</span>[<span class="pl-c1">mobile</span>] <span class="pl-kos">#</span><span class="pl-c1">header</span> <span class="pl-c1">&gt;</span> <span class="pl-ent">table</span> { <span class="pl-c1">padding-bottom</span><span class="pl-kos">:</span> <span class="pl-c1">4<span class="pl-smi">px</span></span> <span class="pl-k">!important</span>; }
  .<span class="pl-c1">desktopnav</span> { <span class="pl-c1">margin-left</span><span class="pl-kos">:</span> <span class="pl-c1">4<span class="pl-smi">px</span></span>; }
  .<span class="pl-c1">mobilenav</span> .<span class="pl-c1">pagetop</span> { <span class="pl-c1">margin-left</span><span class="pl-kos">:</span> <span class="pl-c1">0</span>; }
  <span class="pl-c">/* Title */</span>
  .<span class="pl-c1">hnname</span> <span class="pl-ent">a</span><span class="pl-kos">,</span> .<span class="pl-c1">pagetop</span> <span class="pl-c1">&gt;</span> <span class="pl-ent">b</span> { <span class="pl-c1">color</span><span class="pl-kos">:</span> <span class="pl-en">var</span>(<span class="pl-s1">--logo-mark</span>) <span class="pl-k">!important</span>; }
  <span class="pl-c">/* Current page highlight */</span>
  .<span class="pl-c1">topsel</span><span class="pl-kos">,</span> .<span class="pl-c1">pagetop</span> <span class="pl-ent">font</span>[<span class="pl-c1">color</span><span class="pl-c1">=</span><span class="pl-s">"#FFFFFF"</span>] { <span class="pl-c1">font-weight</span><span class="pl-kos">:</span> <span class="pl-c1">600</span>; }
  <span class="pl-c">/* Borders */</span>
  <span class="pl-ent">body</span> { <span class="pl-c1">margin-top</span><span class="pl-kos">:</span> <span class="pl-c1">0</span>; <span class="pl-c1">margin-bottom</span><span class="pl-kos">:</span> <span class="pl-c1">0</span>; }
  <span class="pl-s1">--border</span><span class="pl-kos">:</span> <span class="pl-en">rgb</span>(<span class="pl-c1">56</span><span class="pl-kos">,</span> <span class="pl-c1">68</span><span class="pl-kos">,</span> <span class="pl-c1">77</span>);
  <span class="pl-kos">#</span><span class="pl-c1">header</span><span class="pl-kos">,</span> <span class="pl-kos">#</span><span class="pl-c1">footer</span> { <span class="pl-c1">border-bottom</span><span class="pl-kos">:</span> <span class="pl-c1">1<span class="pl-smi">px</span></span> solid <span class="pl-en">var</span>(<span class="pl-s1">--border</span>); }
  <span class="pl-ent">&amp;</span>[<span class="pl-c1">desktop</span>] <span class="pl-kos">#</span><span class="pl-c1">hnmain</span> {
    <span class="pl-c1">border</span><span class="pl-kos">:</span> <span class="pl-c1">1<span class="pl-smi">px</span></span> solid <span class="pl-en">var</span>(<span class="pl-s1">--border</span>);
    <span class="pl-c1">border-top</span><span class="pl-kos">:</span> none;
  }
  <span class="pl-c">/* Twitter-style buttons */</span>
  <span class="pl-ent">input</span>[<span class="pl-c1">type</span><span class="pl-c1">=</span><span class="pl-s">"submit"</span>] {
    <span class="pl-c1">appearance</span><span class="pl-kos">:</span> none;
    <span class="pl-c1">background-color</span><span class="pl-kos">:</span> <span class="pl-en">rgb</span>(<span class="pl-c1">29</span><span class="pl-kos">,</span> <span class="pl-c1">155</span><span class="pl-kos">,</span> <span class="pl-c1">240</span>);
    <span class="pl-c1">border-radius</span><span class="pl-kos">:</span> <span class="pl-c1">9999<span class="pl-smi">px</span></span>;
    <span class="pl-c1">border</span><span class="pl-kos">:</span> none;
    <span class="pl-c1">color</span><span class="pl-kos">:</span> <span class="pl-en">var</span>(<span class="pl-s1">--text-primary</span>);
    <span class="pl-c1">cursor</span><span class="pl-kos">:</span> pointer;
    <span class="pl-c1">font-weight</span><span class="pl-kos">:</span> bold;
    <span class="pl-c1">min-height</span><span class="pl-kos">:</span> <span class="pl-c1">36<span class="pl-smi">px</span></span>;
    <span class="pl-c1">padding</span><span class="pl-kos">:</span> <span class="pl-c1">0</span> <span class="pl-c1">16<span class="pl-smi">px</span></span>;
    <span class="pl-c1">text-transform</span><span class="pl-kos">:</span> capitalize;
    <span class="pl-c1">transition</span><span class="pl-kos">:</span> background-color <span class="pl-c1">.2<span class="pl-smi">s</span></span>;
    <span class="pl-ent">&amp;</span><span class="pl-kos">:</span><span class="pl-c1">hover</span> {
      <span class="pl-c1">background-color</span><span class="pl-kos">:</span> <span class="pl-en">rgba</span>(<span class="pl-c1">29</span><span class="pl-kos">,</span> <span class="pl-c1">155</span><span class="pl-kos">,</span> <span class="pl-c1">240</span><span class="pl-kos">,</span> <span class="pl-c1">.8</span>);
    }
  }
}
<span class="pl-c">/* #endregion */</span></pre></div>
</details>
<h2>Donate</h2>
<p>Support Comments Owl for Hacker News development with a tip:</p>
<p><a href="https://ko-fi.com/jbscript" rel="nofollow"><img src="https://private-user-images.githubusercontent.com/226692/330361609-c318a7d3-695e-448d-af15-ef0b934ae168.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvMzMwMzYxNjA5LWMzMThhN2QzLTY5NWUtNDQ4ZC1hZjE1LWVmMGI5MzRhZTE2OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01ODRhODA0ZTE3YTc1ODUwYWY3MDdiMWY1MzAwYzlkMDAzOTU0OWFjZjExYTAyODc2ZmQ1MjYwMjIyNzEyZjEzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.DNvfGPpIf4X66xpUP8hBTZ5kQ80PRNBcGAZ8HUAIo_k" alt="Support us on Ko-fi" content-type-secured-asset="image/png" secured-asset-link="" style="max-width: 100%;"></a></p></details>
</li>
<li>
  <strong>2026-04-06</strong> – <a href="https://github.com/insin/ai-overview-hider-for-google">ai-overview-hider-for-google</a> <a href="https://github.com/insin/ai-overview-hider-for-google/releases/tag/v1.0.11">v1.0.11</a>
  <div><em>Browser extension which hides the AI Overview section in Google search results on desktop and mobile browsers</em></div>
  <details><summary>v1.0.11 release notes</summary><p>Visit the <a href="https://soitis.dev/ai-overview-hider-for-google" rel="nofollow">AI Overview Hider for Google website</a> for installation links, more information about the extension, and FAQs.</p>
<p>Follow <a href="https://bsky.app/profile/soitis.dev" rel="nofollow">@soitis.dev</a> on Bluesky for updates.</p>
<h2>Changes</h2>
<ul>
<li>Fixed hiding "People also ask" items containing AI Overviews on desktop</li>
<li>Fixed fallbacks for hiding AI Overviews on desktop after Google removed the "Learn more" link</li>
</ul>
<h2>Availability (3/5)</h2>
<p>New versions have to be reviewed and approved by each browser before they're available to install or upgrade to.</p>
<p>This version is available for the following browsers:</p>
<p><a href="https://addons.mozilla.org/en-GB/firefox/addon/ai-overview-hider-for-google/" title="Firefox and Firefox for Android" rel="nofollow"><img src="https://private-user-images.githubusercontent.com/226692/399291296-c994c949-1101-4fcc-a8c3-a8d644ffc883.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvMzk5MjkxMjk2LWM5OTRjOTQ5LTExMDEtNGZjYy1hOGMzLWE4ZDY0NGZmYzg4My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NGIyZWFmZGRjNGNkZGU5ZjUxNTczNTUzNTgzYmM1YzhjMGQyZGQ1MTM1NDAyM2M2MGQxZTZjNDkwODMyOGY2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.hQxYov2r6EVXmP8LGXFd0tEo3_wGm9DutTRKj7cbgwE" alt="Firefox and Firefox for Android" content-type-secured-asset="image/png" secured-asset-link="" style="max-width: 100%;"></a> <a href="https://chromewebstore.google.com/detail/ai-overview-hider-for-goo/foobohnghnhkmgpglaefdnbcjkenjpgi" title="Chrome and Chromium-based browsers" rel="nofollow"><img src="https://private-user-images.githubusercontent.com/226692/399071033-5e1c67cd-086c-415b-b055-267df80d6c13.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvMzk5MDcxMDMzLTVlMWM2N2NkLTA4NmMtNDE1Yi1iMDU1LTI2N2RmODBkNmMxMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NTJlNDM5ODAwMTgzOWVjMjJlOWFhNjZjMzg5OWE4YmEzMDc4NzI5NTM4Y2Q3ZTU4ZDhiYjI0NTA1MWVjYWNjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.chLs_2wLxbMMfZB5MDRxuydzAkHcnfrPF3riciXZQ90" alt="Chrome and Chromium-based browsers" content-type-secured-asset="image/png" secured-asset-link="" style="max-width: 100%;"></a> <a href="https://microsoftedge.microsoft.com/addons/detail/ai-overview-hider-for-goo/kgnepepbdpcpjkkhomocmpohgocijgkf" title="Edge and Edge Canary on Android" rel="nofollow"><img src="https://private-user-images.githubusercontent.com/226692/399472874-649d0e77-de48-47ce-a856-db02703929cb.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvMzk5NDcyODc0LTY0OWQwZTc3LWRlNDgtNDdjZS1hODU2LWRiMDI3MDM5MjljYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00YzAxODRjNDIzNzYyZDQ0OTU2ZGExNWE2NjYyOTJiM2JmZWRkMmFlZmUyYzZkOTk4MDliMDdjYzIwNDNiYTQyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.vYHFxpZOp7GmXyiXoGfp3OMg5OZaua0gneV-XZphDso" alt="Edge and Edge Canary on Android" content-type-secured-asset="image/png" secured-asset-link="" style="max-width: 100%;"></a></p>
</details>
</li>
<li>
  <strong>2026-02-20</strong> – <a href="https://github.com/insin/control-panel-for-twitter">control-panel-for-twitter</a> <a href="https://github.com/insin/control-panel-for-twitter/releases/tag/v4.22.2">v4.22.2</a>
  <div><em>Browser extension which gives you more control over your Twitter timeline and adds missing features and UI improvements - for desktop and mobile</em></div>
  <details><summary>v4.22.2 release notes</summary><p>Visit the <a href="https://soitis.dev/control-panel-for-twitter" rel="nofollow">Control Panel for Twitter website</a> for installation links, more information about the extension, and FAQs (mostly about why Safari is so weird about extensions).</p>
<p>Follow <a href="https://twitter.com/ControlPanelFT" rel="nofollow">@ControlPanelFT</a> on Twitter or <a href="https://bsky.app/profile/soitis.dev" rel="nofollow">@soitis.dev</a> on Bluesky for updates.</p>
<h2>Changes</h2>
<ul>
<li>Added an option to hide suggested content (People, News, Communities etc.) in Search, enabled by default</li>
<li>Fixed Notifications being switched to the Priority tab on repeat visits when you have "Use the Following timeline by default" enabled on mobile</li>
<li>Fixed Dim theme Progressive Web App (PWA) theme</li>
<li>Fixed Dim theme hovers in the Chat info dialog</li>
<li>Fixed Dim theme scrollbars</li>
</ul>
<h2>Availability (5/5)</h2>

<p>This version is available for the following browsers:</p>
<p><a href="https://apps.apple.com/app/id1668516167?platform=iphone" title="Safari on iOS" rel="nofollow"><img src="https://private-user-images.githubusercontent.com/226692/407979936-2370f4ea-3362-4b75-b52d-0e99dcae13f6.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvNDA3OTc5OTM2LTIzNzBmNGVhLTMzNjItNGI3NS1iNTJkLTBlOTlkY2FlMTNmNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMmZmMTVjZjg1MzAwY2M3MWZmMWRmY2MxZmQyNWNhMWJmMTFkYzhkMDMxOGNjYWM1OTExZjhjNzUzNzAzMTlhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.CnUNSP8bR0t_57HfP8VekhJBWwyiXKXukbtL-ocXdkQ" alt="Safari on iOS" content-type-secured-asset="image/png" secured-asset-link="" style="max-width: 100%;"></a> <a href="https://apps.apple.com/app/id1668516167?platform=mac" title="Safari on macOS" rel="nofollow"><img src="https://private-user-images.githubusercontent.com/226692/407980194-5521baec-f246-4a91-9615-ef602e3743b5.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvNDA3OTgwMTk0LTU1MjFiYWVjLWYyNDYtNGE5MS05NjE1LWVmNjAyZTM3NDNiNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xODg1OWFlN2ZlZDM1NjNkMjk3ZDY1NDc3MmQ5NjEwZDliYjQ0MDM1MzhkMmY0YTE1ZmFhZjg5NDMxMjMxZjllJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.KmpMw6YZFfMxC6vbsiPFcr59dLmeJqiouqWuycjNLYo" alt="Safari on macOS)" content-type-secured-asset="image/png" secured-asset-link="" style="max-width: 100%;"></a> <a href="https://microsoftedge.microsoft.com/addons/detail/control-panel-for-twitter/foccddlibbeccjiobcnakipdpkjiijjp" title="Edge and Edge Canary on Android" rel="nofollow"><img src="https://user-images.githubusercontent.com/226692/212897573-34b1af0a-dc5a-4aa2-a1e7-ca85d3823f9f.png" alt="Edge and Edge Canary on Android" style="max-width: 100%;"></a> <a href="https://chromewebstore.google.com/detail/control-panel-for-twitter/kpmjjdhbcfebfjgdnpjagcndoelnidfj" title="Google Chrome and Chromium-based browsers" rel="nofollow"><img src="https://user-images.githubusercontent.com/226692/212897023-9e66b1b0-e1cd-44df-a4f2-3d5bda80c5f8.png" alt="Google Chrome and Chromium-based browsers" style="max-width: 100%;"></a> <a href="https://addons.mozilla.org/firefox/addon/control-panel-for-twitter/" title="Firefox and Firefox for Android" rel="nofollow"><img src="https://user-images.githubusercontent.com/226692/212897487-f3993495-2032-44a4-b0c6-1bd1d9cc56dd.png" alt="Firefox and Firefox for Android" style="max-width: 100%;"></a></p>
<h2>Screenshots</h2>
<h3>Dim PWA theme fix</h3>
<table>
<thead>
<tr>
<th align="center">Before</th>
<th align="center">After</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center"><a target="_blank" rel="noopener noreferrer" href="https://private-user-images.githubusercontent.com/226692/552761914-5c25446d-1e77-46d1-94bf-da64391849bc.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvNTUyNzYxOTE0LTVjMjU0NDZkLTFlNzctNDZkMS05NGJmLWRhNjQzOTE4NDliYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xNmQwMzE5ZGE1MzMyODUyMzVjYjdhZTg2OThlOTQxNDdhN2UwN2EzYWQxOTE0ZTVhMDc5ZmU2MTYyZGJhOTA0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.tenUWwiy3hqi3rO0x4LYyUylGA6zVyxqE-_iHoIUV8w"><img width="1134" height="831" src="https://private-user-images.githubusercontent.com/226692/552761914-5c25446d-1e77-46d1-94bf-da64391849bc.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvNTUyNzYxOTE0LTVjMjU0NDZkLTFlNzctNDZkMS05NGJmLWRhNjQzOTE4NDliYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xNmQwMzE5ZGE1MzMyODUyMzVjYjdhZTg2OThlOTQxNDdhN2UwN2EzYWQxOTE0ZTVhMDc5ZmU2MTYyZGJhOTA0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.tenUWwiy3hqi3rO0x4LYyUylGA6zVyxqE-_iHoIUV8w" content-type-secured-asset="image/png" style="max-width: 100%; height: auto; max-height: 831px;"></a></td>
<td align="center"><a target="_blank" rel="noopener noreferrer" href="https://private-user-images.githubusercontent.com/226692/552762025-fd0f61e5-f979-4985-b4e1-fbaadf949f8f.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvNTUyNzYyMDI1LWZkMGY2MWU1LWY5NzktNDk4NS1iNGUxLWZiYWFkZjk0OWY4Zi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMmQwN2UxNzg1YWU2YzVjZmQwNDhhODc4NDJiNjE0ZjA1Mjg3MmJkMmU1YWU2NTQwMTY1NDg3NTZhN2YxNzAyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.Qq43XrM5r02DaW553QTcurFepO87K6sEjm200QnulZc"><img width="1134" height="831" src="https://private-user-images.githubusercontent.com/226692/552762025-fd0f61e5-f979-4985-b4e1-fbaadf949f8f.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMTE1NzgsIm5iZiI6MTc3NzMxMTI3OCwicGF0aCI6Ii8yMjY2OTIvNTUyNzYyMDI1LWZkMGY2MWU1LWY5NzktNDk4NS1iNGUxLWZiYWFkZjk0OWY4Zi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQyN1QxNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMmQwN2UxNzg1YWU2YzVjZmQwNDhhODc4NDJiNjE0ZjA1Mjg3MmJkMmU1YWU2NTQwMTY1NDg3NTZhN2YxNzAyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.Qq43XrM5r02DaW553QTcurFepO87K6sEjm200QnulZc" content-type-secured-asset="image/png" style="max-width: 100%; height: auto; max-height: 831px;"></a></td>
</tr>
</tbody>
</table></details>
</li>
<li>
  <strong>2026-01-13</strong> – <a href="https://github.com/insin/astro-lazy-youtube-embed">astro-lazy-youtube-embed</a> <a href="https://github.com/insin/astro-lazy-youtube-embed/releases/tag/v0.5.5">v0.5.5</a>
  <div><em>Embed YouTube videos with a static placeholder which only embeds when you click</em></div>
  <details><summary>v0.5.5 release notes</summary><ul>
<li>Astro 6 support</li>
<li>Export types</li>
</ul></details>
</li>
</ul>
<!-- /RECENT_RELEASES -->
