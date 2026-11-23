## Why `@connect *` is required

Link checking uses `GM.xmlHttpRequest` to request the real URL saved in a bookmark. The script only looks at the HTTP status and whether the request times out. Those URLs are arbitrary sites chosen by the people who created the bookmarks, so they cannot be listed in advance.

Tampermonkey allows a cross-origin `GM.xmlHttpRequest` only when the host is declared in `@connect`. A short allowlist would leave most bookmarks unchecked. `@connect *` is used only for this user-started check. The script does not run on those sites and does not read their page content. It records whether the request succeeded, returned 404, returned 500 or higher, or timed out.

## What is BookmarkMars

BookmarkMars is a site for sharing browser bookmarks. People can browse public collections organized as folders and bookmark trees, create their own bookmarks and folders online, and download a collection into the browser.

The site can search bookmarks or folders, open a collection to see its structure, and open a preview page for a single bookmark. It also provides download and export, plus bookmark tools, a bookmarklet, and an extension, in multiple interface languages.

Website: https://www.bookmarkmars.com/

## What this script does

The script runs only on BookmarkMars.

1. On a `/view/` preview page, a normal http or https target opens directly. A bookmarklet or other non-page target is left alone.
2. On the home page, search results, a folder page, and a detail page, **Check link status** requests each bookmark's real URL. A link is marked unavailable only when the response is 404, 500 or higher, or the request times out. Its title is then struck through. Any other response is treated as reachable, and a green check is placed in the center of the bookmark icon. Clicking the button again stops the check. Each host is requested only once. The result is saved locally on BookmarkMars and reused for later links to the same host.
3. On a detail page, one button expands or collapses every bookmark node. Expand, collapse, and link checking stay attached under the header while the page scrolls. The check includes every link in the bookmark tree, including nodes that are still collapsed. Button labels follow the language currently selected on the site.
