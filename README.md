### Recent Releases

<!-- RECENT_RELEASES -->
<ul>
<li>
  <strong>2023-07-15</strong> – <a href="https://github.com/insin/comments-owl-for-hacker-news">comments-owl-for-hacker-news</a> <a href="https://github.com/insin/comments-owl-for-hacker-news/releases/tag/v2.0.0">v2.0.0</a>
  <div><em>Browser extension which makes it easer to follow comment threads on Hacker News across multiple visits, showing which items have new comments, highlighting new comments and collapsing threads without new comments. It also adds the ability to annotate and mute other users, plus some other UI and UX tweaks</em></div>
  <details><summary>v2.0.0 release notes</summary><h3>New</h3>
<ul>
<li>Added a Safari version for iOS and macOS</li>
<li>Added specific support for the mobile version
<ul>
<li>Added an option to avoid accidental flagging while scrolling, by removing the flag button or having it require confirmation</li>
<li>Added a workaround to prevent Safari on iPhone zooming in when fields are focused on the login screen</li>
<li>Improved the navigation bar by displaying it below the rest of the header contents instead</li>
<li>Increased the distance between the upvote and downvote arrow (when you have it)</li>
<li>Improved styling of the highlighting/collapsing and manual comment hiding controls</li>
<li>Mute controls are always shown on mobile</li>
<li>Hid comment next/prev etc. navigation links as they might be trying to scroll to items we've hidden</li>
<li>Made the collapse/expand toggle target slightly larger on mobile</li>
<li>Allowed comments to go right to the edge on mobile - at some specific widths there is currently a gap</li>
</ul>
</li>
<li>Added a user notes feature - add/edit notes on a user's profile page; the first line will be displayed next to their comments
<ul>
<li>Tip: Use Ctrl+Enter or Cmd+Return as a shortcut on desktop to save notes</li>
</ul>
</li>
<li>Added an option to disable automatic auto-collapsing of comment threads without new items when you revisit an item</li>
<li>Added options to hide some of the more niche navigation items, like "past" and "comments"</li>
<li>Added support for more list pages</li>
<li>Added a fake /muted user profile page for logged-out users to manage their mutes</li>
<li>Added a browser action button for quick access to options</li>
</ul>
<h3>Changed</h3>
<ul>
<li>Changed name from HN Comments Owl to Comments Owl for Hacker News because the App Store loves (and often requires) a good "for"</li>
<li>Changed the extension icon to one in the same style as Control Panel for Twitter</li>
<li>Changed the manual comment highlighting controls to not be displayed by default - the item now has a new "highlight comments" link</li>
<li>Changed the mute control to not display on collapsed comments</li>
<li>Changed collapsed comments without children to display nothing, instead of "(0 children)"</li>
<li>Manual comment highlighting now takes mutes into account</li>
</ul>
<h3>Fixed</h3>
<ul>
<li>Fixed toggling display of reply links via the context menu</li>
<li>Fixed extra vertical space when comments are collapsed</li>
<li>Fixed position of the /upvoted link on pages which add their own item to the end of the navigation links</li>
<li>Fixed children of muted or collapsed comments being reshown if a parent comment is collapsed then expanded</li>
<li>Fixed displaying mute controls on deleted comments</li>
<li>Fixed child counts on collapsed comments being incorrect if they're affected by muting a user on the current page</li>
<li>Fixed /bestcomments being detected as a list page</li>
<li>Fixed some list pages not being detected as such</li>
</ul></details>
</li>
<li>
  <strong>2023-07-13</strong> – <a href="https://github.com/insin/astro-lazy-youtube-embed">astro-lazy-youtube-embed</a> <a href="https://github.com/insin/astro-lazy-youtube-embed/releases/tag/v0.0.2">v0.0.2</a>
  <div><em>Embed YouTube videos with a static placeholder which only embeds when you click</em></div>
  <details><summary>v0.0.2 release notes</summary><ul>
<li>Added <code>homepage</code> to package.json for Astro Integrations</li>
</ul></details>
</li>
<li>
  <strong>2023-07-11</strong> – <a href="https://github.com/insin/control-panel-for-twitter">control-panel-for-twitter</a> <a href="https://github.com/insin/control-panel-for-twitter/releases/tag/v3.11.2">v3.11.2</a>
  <div><em>Browser extension which gives you more control over your Twitter timeline and adds missing features and UI improvements - available for desktop and mobile browsers</em></div>
  <details><summary>v3.11.2 release notes</summary><ul>
<li>Fixed uninverted Follow buttons not having a text colour in some places</li>
<li>Fixed some french translations</li>
</ul>
<hr>
<p>Available in the following extension stores:</p>
<p><a href="https://apps.apple.com/app/id1668516167?platform=iphone" rel="nofollow"><img src="https://user-images.githubusercontent.com/226692/216768643-4756e33c-1e61-41a7-9c56-9bd80f10bcc9.png" alt="Apple App Store" style="max-width: 100%;"></a> <a href="https://chrome.google.com/webstore/detail/control-panel-for-twitter/kpmjjdhbcfebfjgdnpjagcndoelnidfj" rel="nofollow"><img src="https://user-images.githubusercontent.com/226692/212897023-9e66b1b0-e1cd-44df-a4f2-3d5bda80c5f8.png" alt="Chrome" style="max-width: 100%;"></a></p></details>
</li>
<li>
  <strong>2021-11-24</strong> – <a href="https://github.com/insin/rllmuk-ignore-topics">rllmuk-ignore-topics</a> <a href="https://github.com/insin/rllmuk-ignore-topics/releases/tag/v1.2">v1.2</a>
  <div><em>Hide topics and forums you're not interested in on the Rllmuk forum</em></div>
  <details><summary>v1.2 release notes</summary><ul>
<li>Added support for the Fluid view</li>
<li>Added a collapse control for the Fluid sidebar</li>
</ul></details>
</li>
<li>
  <strong>2021-11-20</strong> – <a href="https://github.com/insin/cookdandbombd-really-ignore-users">cookdandbombd-really-ignore-users</a> <a href="https://github.com/insin/cookdandbombd-really-ignore-users/releases/tag/v1.2">v1.2</a>
  <div><em>Really ignore ignored users</em></div>
  <details><summary>v1.2 release notes</summary><p>Updated for new theme</p>
<p>Added re-striping of posts so it doesn't look weird when posts are hidden</p></details>
</li>
</ul>
<!-- /RECENT_RELEASES -->
