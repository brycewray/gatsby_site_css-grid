# Repo for brycewray.com

This is the repository from which the [Gatsby](https://gatsbyjs.org)-generated version of [brycewray.com](https://brycewray.com) is built. Please note that this is just as an example; the **real** site is done in a combination of [Eleventy](https://11ty.dev) and [webpack](https://webpack.js.org).

## Not a starter kit, but&nbsp;.&nbsp;.&nbsp;.

While this is a Gatsby version of the actual site&rsquo;s repo rather than a starter version thereof, you can turn it into the latter by doing the following:

1. Clone it to a local repo.
2. Make appropriate changes to `gatsby-config.js`.
3. Delete from `src/pages/**.*` the Markdown files and images (well, maybe you should keep one or two of each around at the start, until you see how things work).

## What&rsquo;s under the hood

This isn&rsquo;t a complete list but, rather, covers only the biggies. Check out `package.json` and `gatsby-config.js` for the whole shebang. They&rsquo;re handled primarily through Gatsby plugins.

- [PostCSS](https://postcss.org) for, among other things, transpiling my CSS for easier consumption — even for obsolete browsers (looking at you, IE).
- [typefaces](https://github.com/kyleamathews/typefaces), through which I&rsquo;m using the [Public Sans](https://public-sans.digital.gov) Web &ldquo;[font](https://brycewray.com/posts/2018/10/web-typography-part-2/)&rdquo; for all non-code text and [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) for code and code blocks. In my real site repo, a separate webpack installation handles this but, of course, webpack comes out of the proverbial box with Gatsby. For this repo, I provide these fonts (as well as the CSS that PostCSS manipulates) via the `gatsby-browser.js` file.
- [Prism](https://prismjs.com) for syntax highlighting of code and code blocks.
- [Webmentions](https://indieweb.org), made possible through [Chris Biscardi](https://www.christopherbiscardi.com/post/building-gatsby-plugin-webmentions)&rsquo;s [gatsby-plugin-webmention plugin](https://www.npmjs.com/package/gatsby-plugin-webmention) and admittedly spaghetti-ish code based on hours of studying articles and code by [Knut Malvær](https://www.knutmelvaer.no/blog/2019/06/getting-started-with-webmentions-in-gatsby/), [Sung M. Kim](https://sung.codes/blog/2020/02/17/clientside-webmentions-in-gatsby/), and [Chad Lee](https://www.chadly.net/embracing-the-indieweb/).

<hr />

For more information about the thinking behind this repo as well as a similar, [Hugo](https://gohugo.io)-generated version of the site, please refer to “[Different modes for different code](https://brycewray.com/posts/2020/04/different-modes-different-code).”