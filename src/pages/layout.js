import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return (
        <div className="Container">
            <title>{data.site.siteMetadata.title}</title>
            <header className="Header"><Link to="/">{data.site.siteMetadata.title}</Link></header>
            <main>
                {children}
            </main>
        </div>
    )
}
export default Layout