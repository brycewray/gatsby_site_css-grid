const { paginate } = require('gatsby-awesome-pagination')

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const sitePosts = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {title: {ne: "Home page"}}}) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              description
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  paginate({
    createPage,
    items: sitePosts.data.allMarkdownRemark.edges,
    itemsPerPage: 5,
    pathPrefix: `/posts`,
    component: path.resolve(`./src/components/postslist.js`),
  })
  sitePosts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/singlepost.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}