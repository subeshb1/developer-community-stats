import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import BlogPostTemplate from '../components/Layouts/BlogLayout'

class BlogHome extends React.Component {
  render() {
    const { data } = this.props

    return (
      <BlogPostTemplate>
        <SEO
          url="/"
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

      </BlogPostTemplate>
    )
  }
}

export default BlogHome

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
