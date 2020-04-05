import React from 'react'
import { Link, graphql } from 'gatsby'
import LayoutSinglePost from "./layout-singlepost"
import SEO from './seo'
import Header from './header'

class singlePostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    var { previous, next } = this.props.pageContext
    
    var lastModIntro, lastModText /* null unless there's a lastmod */
    if (post.frontmatter.lastmod) {
      lastModIntro = "last modified:";
      lastModText = post.frontmatter.lastmod;
    }
  
    return (
      <>
      <SEO 
      title={post.frontmatter.title} 
      description={post.excerpt}
      />
      <Header />
      <LayoutSinglePost location={this.props.location}>
        <div className="background-hero-div">
          <div className="background-hero-title-block-fit">
            <h1 className="background-hero-title-text">{post.frontmatter.title}</h1>
            <h2 className="background-hero-subtitle-text">
            {post.frontmatter.subtitle && (
              <em>{post.frontmatter.subtitle}</em>
            )}
            {!post.frontmatter.subtitle && (
              <>
              &nbsp;
              </>
            )}
            </h2>
            <p className="background-hero-description-text">{post.frontmatter.description}</p>
            <p className="background-hero-p-text">
              <span style={{ fontVariant: "small-caps" }}>published:</span>&nbsp; <strong>{post.frontmatter.date}</strong><br />
              <span className="pokey">
              <span style={{ fontVariant: "small-caps" }}>{lastModIntro}</span>&nbsp; {lastModText}
              </span>
            </p>
          </div>
        </div>
        <div className="post-line"></div>
        <div className="container-narrower">
          <article className="article" dangerouslySetInnerHTML={{ __html: post.html }}>
          </article>
        </div>
        <div className="bg-dark">
          <h3 className="ctr wht"><a href="/posts" style={{ borderBottom: "0" }}>Other posts</a></h3>
          {next && (
            <p className="ctr"><strong>Next</strong>: <Link to={next.fields.slug} style={{ borderBottom: "0" }}>{next.frontmatter.title}</Link></p>
          )}
          {previous.fields.slug !== "/"
            ? (
            <p className="ctr"><strong>Previous</strong>: <Link to={previous.fields.slug} style={{ borderBottom: "0" }}>{previous.frontmatter.title}</Link></p>
            ) : null
          }
        </div>
      </LayoutSinglePost>
    </>
    )
  }
}

export default singlePostTemplate

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug, ne: "Home page" } }) {
      frontmatter {
        description
        title
        tags
        subtitle
        date(formatString: "MMMM D, YYYY")
        lastmod(formatString: "MMMM D, YYYY")
        discussionId
      }
      html
    }
  }
`