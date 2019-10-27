import React from 'react'
import { Link, graphql } from 'gatsby'
import LayoutSinglePost from "./layout-singlepost"
import BackgroundImage from 'gatsby-background-image'
import SEO from './seo'
import Header from './header'
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard'

class singlePostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    // const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

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
      description={post.excerpt} 
      image={post.frontmatter.featured_image.childImageSharp.resize.src}
      />
      <Header />
      <LayoutSinglePost location={this.props.location}>
      <BackgroundImage
        fluid={featuredImageFluid} 
        className="background-hero-div" 
        alt={post.frontmatter.featured_image_alt}
      >
        <div className="background-hero-title-block">
          <h1 className="background-hero-title-text">{post.frontmatter.title}</h1>
          <h2 className="background-hero-subtitle-text"><em>{post.frontmatter.subtitle}</em></h2>
          <p className="background-hero-description-text">{post.frontmatter.description}</p>
          <p className="background-hero-p-text">
            <span style={{ fontVariant: "small-caps" }}>published:</span>&nbsp; <strong>{post.frontmatter.date}</strong><br />
            <span className="pokey">
            <span style={{ fontVariant: "small-caps" }}>{lastModIntro}</span>&nbsp; {lastModText}
            </span>
          </p>
        </div>
        </BackgroundImage>
        <p className="featured-image-caption">{post.frontmatter.featured_image_caption}</p>
        <div className="post-line"></div>
        <div className="container-narrower">
          <article className="article" dangerouslySetInnerHTML={{ __html: post.html }}>
          </article>
        </div>
        <div className="container container-comments">
          <TalkyardCommentsIframe />
        </div>
        <div className="bg-dark">
          <h3 className="ctr wht"><a href="/posts" style={{ borderBottom: "0" }}>Other posts</a></h3>
          {next && (
            <p className="ctr"><strong>Next</strong>: <Link to={next.fields.slug} style={{ borderBottom: "0" }}>{next.frontmatter.title}</Link></p>
          )}
          {previous && (
            <p className="ctr"><strong>Previous</strong>: <Link to={previous.fields.slug} style={{ borderBottom: "0" }}>{previous.frontmatter.title}</Link></p>
          )}
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
  }
`