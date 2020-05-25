import React from "react"
import { graphql } from "gatsby"
import AboutLayout from "../../components/layout-about"
import SEO from "../../components/seo"

export default ({ data }) => {
  const About = data.markdownRemark
  return (
    <AboutLayout>
      <SEO title="About" />
      <div className="container h-auto w-full min-w-full relative overflow-hidden gradient-titles pb-6 px-4 md:px-12 xb:px-20">
        <h1 className="text-center text-4xl md:text-left md:text-5xl lg:text-6xl xb:text-8xl tracking-tight leading-tight mb-6 px-4 pt-4 md:px-0 text-white">{About.frontmatter.title}</h1>
        <h2 className="italic text-center text-2xl md:text-left md:text-3xl lg:text-5xl xb:text-6xl leading-tight tracking-tight px-6 md:px-0 text-white">
        {About.frontmatter.subtitle && (
          <em>{About.frontmatter.subtitle}</em>
        )}
        {!About.frontmatter.subtitle && (
          <>
          &nbsp;
          </>
        )}
        </h2>
        <p className="hidden not-italic md:block md:text-2xl xb:text-4xl tracking-tight md:text-base md:mt-8 mb-6 text-white">{About.frontmatter.description}</p>
        <p className="text-base xb:text-lg text-center px-4 md:text-right md:px-0 mt-4 md:mt-0 mb-0 text-white">
          <span style={{ fontVariant: "small-caps" }}>published:</span>&nbsp; <strong>{About.frontmatter.date}</strong><br />
            <span className="text-sm">
            <span style={{ fontVariant: "small-caps" }}>last modified:</span>&nbsp; {About.frontmatter.lastmod}
            </span>
          </p>
        </div>
        <div className="sm:w-5/6 md:w-4/5 xl:w-1/2 xb:w-5/12 mt-10 mr-auto ml-auto px-6 lg:px-16">
          <article className="article" dangerouslySetInnerHTML={{ __html: About.html }}>
          </article>
        </div>
    </AboutLayout>
  )
} 

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "The obligatory About Me page"}}) {
      fields {
        slug
      }
      html
      frontmatter {
        description
        title
        tags
        subtitle
        date(formatString: "MMMM D, YYYY")
        lastmod(formatString: "MMMM D, YYYY")
        discussionId
      }
    }
  }
`