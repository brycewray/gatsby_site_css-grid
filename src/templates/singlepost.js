let copyYear = new Date().getFullYear()
import React from 'react'
import SvgGitHubIcon from "../assets/svg/svgGitHubIcon.svg"
import SvgTwitterIcon from "../assets/svg/svgTwitterIcon.svg"
import SvgMastodonIcon from "../assets/svg/svgMastodonIcon.svg"
import SvgLinkedInIcon from "../assets/svg/svgLinkedInIcon.svg"
import SvgRSSIcon from "../assets/svg/svgRSSIcon.svg"
import SvgFooterIcon from "../assets/svg/svgFooterIcon.svg"
import { Link, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import LayoutSinglePost from "../components/layout-singlepost"
import SEO from '../components/seo'
import Header from '../components/header'

export const query = graphql`
  query($slug: String!, $urlToCheck: String!) {
    forThisPostQuery: markdownRemark(fields: { slug: { eq: $slug, ne: "Home page" } }) {
      fields {
        slug
      }
      frontmatter {
        description
        title
        tags
        subtitle
        date(formatString: "MMMM D, YYYY")
        lastmod(formatString: "MMMM D, YYYY")
        oldComments
        featured_image {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
            resize(width: 1280) {
              src
              width
              height
              aspectRatio
              originalName
            }
          }
        }
        featured_image_alt
        featured_image_caption
        discussionId
      }
      html
    }
    forWMdataQuery: markdownRemark(fields: { slug: { eq: $slug, ne: "Home page" } }) {
      frontmatter {
        date
      }
    }
    likesQuery: allWebMentionEntry(sort: {fields: published, order: ASC}, filter: {wmTarget: {eq: $urlToCheck}, wmProperty: {eq: "like-of"}}) {
      edges {
        node {
          likeOf
          published(formatString: "MMM D, YYYY hh")
          type
          url
          wmReceived(formatString: "MMM D, YYYY")
          wmTarget
          author {
            name
            photo
            type
            url
          }
          wmProperty
        }
      }
    }
    repostsQuery: allWebMentionEntry(sort: {fields: published, order: ASC}, filter: {wmTarget: {eq: $urlToCheck}, wmProperty: {eq: "repost-of"}}) {
      edges {
        node {
          repostOf
          published(formatString: "MMM D, YYYY")
          type
          url
          wmReceived(formatString: "MMM D, YYYY")
          wmTarget
          author {
            name
            photo
            type
            url
          }
          wmProperty
        }
      }
    }
    repliesQuery: allWebMentionEntry(sort: {fields: published, order: ASC}, filter: {wmTarget: {eq: $urlToCheck}, wmProperty: {eq: "in-reply-to"}}) {
      edges {
        node {
          inReplyTo
          published(formatString: "MMM D, YYYY hh:mm:ss z")
          type
          url
          wmReceived(formatString: "MMM D, YYYY")
          wmTarget
          author {
            name
            photo
            type
            url
          }
          wmProperty
          content {
            html
            text
          }
        }
      }
    }
    mentionsQuery: allWebMentionEntry(sort: {fields: published, order: ASC}, filter: {wmTarget: {eq: $urlToCheck}, wmProperty: {eq: "mention-of"}}) {
      edges {
        node {
          likeOf
          published(formatString: "MMM D, YYYY hh:mm:ss z")
          type
          url
          wmReceived(formatString: "MMM D, YYYY")
          wmTarget
          author {
            name
            photo
            type
            url
          }
          wmProperty
          content {
            html
            text
          }
        }
      }
    }
    wmsAQuery: allWebMentionEntry(sort: {fields: published, order: ASC}, filter: {wmTarget: {eq: $urlToCheck}}) {
      edges {
        node {
          published(formatString: "MMM D, YYYY")
          wmReceived(formatString: "MMM D, YYYY")
          wmTarget
        }
      }
      totalCount
    }
  }
`

const singlePostTemplate = ({ data, pageContext }) => {
  const post = data.forThisPostQuery
  const wmDate = data.forWMdataQuery
  const wmsA = data.wmsAQuery
  const likes = data.likesQuery.edges
  const reposts = data.repostsQuery.edges
  const replies = data.repliesQuery.edges
  const mentions = data.mentionsQuery.edges
  
  const { previous, next, urlToCheck } = pageContext

  let featuredImageFluid = post.frontmatter.featured_image.childImageSharp.fluid
  var lastModIntro, lastModText /* null unless there's a lastmod */
  if (post.frontmatter.lastmod) {
    lastModIntro = "last modified:";
    lastModText = post.frontmatter.lastmod;
  }
  
  return (
    <>
    <SEO 
      title={post.frontmatter.title} 
      description={post.frontmatter.description} 
      image={post.frontmatter.featured_image.childImageSharp.resize.src}
    />
    <Header />
    <LayoutSinglePost>
      <BackgroundImage
        fluid={featuredImageFluid} 
        className="background-hero-div" 
        alt={post.frontmatter.featured_image_alt}
      >
        <div className="background-hero-title-block-fit">
          <div class="background-hero-title-text">
            <h1 className="text-center text-4xl md:text-left md:text-5xl lg:text-6xl xb:text-8xl tracking-tight leading-tight mb-6 px-4 md:px-0 text-white">{post.frontmatter.title}</h1>
            <h2 class="italic text-center text-2xl md:text-left md:text-3xl lg:text-5xl xb:text-6xl leading-tight tracking-tight px-6 md:px-0 text-white">
              {post.frontmatter.subtitle && (
                <em>{post.frontmatter.subtitle}</em>
              )}
              {!post.frontmatter.subtitle && (
                <>
                &nbsp;
                </>
              )}
            </h2>
            <p className="hidden not-italic md:block md:text-2xl xb:text-4xl tracking-tight md:text-base md:mt-8 mb-6 text-white">{post.frontmatter.description}</p>
            <p className="text-base xb:text-lg text-center px-4 md:text-right md:px-0 mt-4 md:mt-0 mb-0 text-white">
              <span style={{ fontVariant: "small-caps" }}>published:</span>&nbsp; <strong>{post.frontmatter.date}</strong><br />
              <span className="text-sm">
                <span style={{ fontVariant: "small-caps" }}>{lastModIntro}</span>&nbsp; {lastModText}
              </span>
            </p>
            <p className="text-center text-white text-xs mt-4 mb-0 md:mb-1 pb-1">
              {post.frontmatter.featured_image_caption && (
                post.frontmatter.featured_image_caption
              )}
              {!post.frontmatter.featured_image_caption && (
                <>
                &nbsp;
                </>
              )}
            </p>
          </div>
        </div>
      </BackgroundImage>
      <div className="sm:w-5/6 md:w-4/5 xl:w-1/2 xb:w-5/12 mt-10 mr-auto ml-auto px-6 lg:px-16">
        <article dangerouslySetInnerHTML={{ __html: post.html }}>
        </article>
      </div>
      

      {post.frontmatter.oldComments && (
        <div dangerouslySetInnerHTML={{ __html: post.frontmatter.oldComments }} />
      )}


      <div class="border-t border-solid border-gray-900 dark:border-gray-100 block mt-8 mb-0 mr-auto ml-auto w-3/4 lg:w-1/2 xb:w-5/12 px-6" id="webmentions">
        <h3 className="mt-2 mb-4 italic text-center text-3xl tracking-tight">Webmentions</h3>
        {wmsA.totalCount > 0
          ? <>
            {likes.length > 0
              ? <>
                <details>
                  <summary className="md:text-2xl font-bold tracking-tight">Likes&nbsp;&nbsp;<span className="text-base font-normal">({likes.length})</span></summary>
                  <div>
                    {likes.map(({ node }) => {
                      return (
                      <><a className="border-0 no-underline" href={node.url}><img className="inline h-12 w-12 object-cover mr-2 rounded-full u-photo lazy" loading="lazy" aria-label={node.author.name} src={node.author.photo} alt={node.author.name} /></a></>
                      )
                    })}
                  </div>
                </details>
                </>
              : ''
            }
            {reposts.length > 0
              ? <>
                <details>
                  <summary className="md:text-2xl font-bold tracking-tight">Reposts&nbsp;&nbsp;<span className="text-base font-normal">({reposts.length})</span></summary>
                  <div>
                    {reposts.map(({ node }) => {
                      return (
                      <><a href={node.url} className="border-0 no-underline" aria-label={node.author.name}><img className="inline h-12 w-12 object-cover mr-2 rounded-full u-photo lazy" loading="lazy" src={node.author.photo} alt={node.author.name} /></a></>
                      )
                    })}
                  </div>
                </details>
                </>
              : ''
            }
            {replies.length > 0
              ? <>
                <details>
                  <summary className="md:text-2xl font-bold tracking-tight">Comments&nbsp;&bull;&nbsp;Replies&nbsp;&nbsp;<span className="text-base font-normal">({replies.length})</span></summary>
                  <ol className="list-none p-0">
                    {replies.map(({ node }) => {
                      return (
                      <>
                      <li className="mt-8">
                        <article className="block h-cite">
                          <div className="flex items-center flex-wrap">
                            <a className="text-black dark:text-white flex items-center flex-wrap border-0 no-underline p-author h-card" href={node.url} aria-label={node.author.name}><img className="inline h-12 w-12 object-cover mr-2 rounded-full u-photo lazy" loading="lazy" src={node.author.photo} alt={node.author.name} /><strong className="p-name text-base">{node.author.name}</strong></a>&nbsp;<span className="legal"><time className="italic dt-published" datetime={node.published}>{node.published}</time></span>
                          </div>
                          <div className="p-content pt-2 pl-2 text-base leading-normal" dangerouslySetInnerHTML={{ __html: node.content.html}} />
                        </article>
                      </li>
                      </>
                      )
                    })}
                  </ol>
                </details>
                </>
              : ''
            }
            {mentions.length > 0
              ? <>
                <details>
                  <summary className="md:text-2xl font-bold tracking-tight">Mentions&nbsp;&nbsp;<span className="text-base font-normal">({mentions.length})</span></summary>
                  <ol className="list-none p-0">
                    {mentions.map(({ node }) => {
                      return (
                      <>
                      <li className="mt-8">
                        <article className="block h-cite">
                          <div className="flex items-center flex-wrap">
                            <a className="text-black dark:text-white flex items-center flex-wrap border-0 no-underline p-author h-card" href={node.url} aria-label={node.author.name}><img className="inline h-12 w-12 object-cover mr-2 rounded-full u-photo lazy" loading="lazy" src={node.author.photo} alt={node.author.name} /><strong className="p-name text-base">{node.author.name}</strong></a>&nbsp;<span className="text-sm"><time className="italic dt-published" datetime={node.published}>{node.published}</time></span>
                          </div>
                          <div className="p-content text-base" dangerouslySetInnerHTML={{ __html: node.content.html}} />
                        </article>
                      </li>
                      </>
                      )
                    })}
                  </ol>
                </details>
                </>
              : ''
            }
            </>
          : <>
            <p className="text-center text-base">(No webmentions yet.)</p>
            </>
        }
      </div>

      <div className="w-full px-8 md:px-0 bg-blue-700 align-middle mt-10 mb-10">
        <h3 className="text-center text-3xl tracking-normal mb-0 pt-2"><a href="/posts" className="border-transparent text-blue-100 hover:text-white italic">Other posts</a></h3>
        {next && (
          <p className="text-center mt-2 mb-2 text-xl text-white leading-tight tracking-tight"><strong>Next</strong>: <Link to={next.fields.slug} className="border-transparent text-blue-100 hover:text-white hover:border-blue-100">{next.frontmatter.title}</Link></p>
        )}
        {previous.fields.slug !== "/"
          ? (
          <p className="text-center pb-4 my-0 text-xl text-white leading-tight tracking-tight"><strong>Previous</strong>: <Link to={previous.fields.slug} className="border-transparent text-blue-100 hover:text-white hover:border-blue-100">{previous.frontmatter.title}</Link></p>
          )
          : (
          <p className="text-xs my-0 py-0 leading-tight">&nbsp;</p>
          )
        }
      </div>

      <footer className="text-center pb-6">
        <div className="w-5/6 md:w-3/4 lg:w-2/3 mx-auto">
          <p className="text-xs inline-flex mt-4 mb-4"><a href="https://github.com/brycewray/eleventy_solo" target="_blank" rel="noopener" className="mb-0 border-transparent" aria-label="GitHub"><SvgGitHubIcon /></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://twitter.com/BryceWrayTX" target="_blank" rel="noopener" className="mb-0 border-transparent" aria-label="Twitter"><SvgTwitterIcon /></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://mastodon.technology/@BryceWrayTX" target="_blank" rel="noopener" className="mb-0 border-transparent" aria-label="Mastodon"><SvgMastodonIcon /></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/brycewray" target="_blank" rel="noopener" className="mb-0 border-transparent" aria-label="LinkedIn"><SvgLinkedInIcon /></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/feed.xml" className="mb-0 border-transparent" aria-label="RSS"><SvgRSSIcon /></a></p>
          <p className="text-xs">
            &copy;&nbsp;{copyYear}&nbsp;<a className="h-card" rel="me" href="https://brycewray.com">Bryce Wray</a>.<br />
            Site built and managed with <a href="https://jamstack.org" target="_blank" rel="noopener">the Jamstack</a>, <a href="https://11ty.dev" target="_blank" rel="noopener">Eleventy</a>, <a href="https://tailwindcss.com/" target="_blank" rel="noopener">Tailwind CSS</a>, <a href="https://www.apple.com/macos" target="_blank" rel="noopener">macOS</a>, <a href="https://www.apple.com/ios" target="_blank" rel="noopener">iOS</a>, <a href="https://daringfireball.net/projects/markdown" target="_blank" rel="noopener">Markdown</a>, <span className="text-nowrap">time, and&nbsp;love.</span> <span className="text-nowrap">Hosted by&nbsp;<a href="https://netlify.com" target="_blank" rel="noopener">Netlify</a></span>.
          </p>
        </div>
        <hr className="mt-8 border-black" />
        <div className="w-5/6 md:w-3/4 lg:w-2/3 mx-auto">
          <p className="font-bold text-base tracking-tight mt-4 mb-2">Information for webmentions</p>
          <p className="inline-flex mt-0"><SvgFooterIcon /></p>
          <p className="p-note text-xs leading-tight mt-0">Unrepentant advocate for and user of the Oxford comma (sorry,&nbsp;AP). Webmentions&nbsp;of others&rsquo; content do&nbsp;not necessarily constitute endorsements. Comments&nbsp;and&nbsp;opinions expressed herein are my&nbsp;own, unless otherwise&nbsp;noted.</p>
        </div>
          <h4 className="font-bold text-center text-sm mt-4 mb-0 tracking-tight">About this page</h4>
          <article className="h-entry text-xs leading-tight">
            <div className="e-content p-name">
              {post.frontmatter.title}
              {post.frontmatter.subtitle 
                ? <>&nbsp;&nbsp;|&nbsp;&nbsp;{post.frontmatter.subtitle}</>
                : ''
              }
              {post.frontmatter.description
                ? <>&nbsp;&nbsp;|&nbsp;&nbsp;{post.frontmatter.description}</>
                : ``
              }
            </div>
            <a className="u-url no-underline border-0 text-black dark:text-white tracking-normal" href={post.fields.slug}>Published <time className="dt-published">{wmDate.frontmatter.date}</time></a>
            <link rel="author" href="https://brycewray.com" />
          </article>
      </footer>
    </LayoutSinglePost>
  </>
  )
}

export default singlePostTemplate