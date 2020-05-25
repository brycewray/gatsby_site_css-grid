# Repo for brycewray.com

This is the repository from which the [Gatsby](https://gatsbyjs.org)-generated version of [brycewray.com](https://brycewray.com) is built. Please note that this is just as an example; the **real** site is done in [Eleventy](https://11ty.dev).

## Not a starter kit, but&nbsp;.&nbsp;.&nbsp;.

While this is a Gatsby version of the actual site&rsquo;s repo rather than a starter version thereof, you can turn it into the latter by doing the following:

1. Clone it to a local repo.
2. Make appropriate changes to `gatsby-config.js`.
3. Delete the Markdown files from `src/pages/**/*.*` and the images from their various locations (well, maybe you should keep one or two of each around at the start, until you see how things work).

## What&rsquo;s under the hood

This isn&rsquo;t a complete list but, rather, covers only the biggies. Check out `package.json` and `gatsby-config.js` for the whole shebang. They&rsquo;re handled primarily through Gatsby plugins.

- [PostCSS](https://postcss.org) and [Tailwind CSS](https://tailwindcss.com).
- [Prism](https://prismjs.com) for syntax highlighting of code and code blocks.
- [Webmentions](https://indieweb.org), made possible through [Chris Biscardi](https://www.christopherbiscardi.com/post/building-gatsby-plugin-webmentions)&rsquo;s [gatsby-plugin-webmention plugin](https://www.npmjs.com/package/gatsby-plugin-webmention) and my admittedly spaghetti-ish code, the latter based on hours of studying articles and code by [Knut Malvær](https://www.knutmelvaer.no/blog/2019/06/getting-started-with-webmentions-in-gatsby/), [Sung M. Kim](https://sung.codes/blog/2020/02/17/clientside-webmentions-in-gatsby/), and [Chad Lee](https://www.chadly.net/embracing-the-indieweb/).

<hr />

For more information about the thinking behind this repo as well as a similar, [Hugo](https://gohugo.io)-generated version of the site, please refer to “[Different modes for different code](https://brycewray.com/posts/2020/04/different-modes-different-code).”