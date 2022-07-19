import * as React from "react"
import { graphql } from "gatsby"
import Layout from './layout';

const IndexPage = ({data}) => {
  return (
    <Layout>
      <p>Hello World, My name is Kyle Copeland and I'm a software developer in Brooklyn, NY</p>
      <p>I'm interested in discovering the <a href="https://biblehub.com/ecclesiastes/8-15.htm">goodness & joy</a> in my everday life--particularly in software</p>
      <p></p>
      <p>Here are some of my thoughts</p>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node: { frontmatter: { title, slug }}}) => (
          <li key={title}><a href={slug}>{title}</a></li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

export default IndexPage

