
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Template({
  data,
}) {
  const { markdownRemark } = data 
  const { frontmatter, html } = markdownRemark
  console.log(frontmatter);
  return (
    <div className="Container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`