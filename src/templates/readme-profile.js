import React, { useEffect } from 'react'

import { graphql, Link } from 'gatsby'
import Layout from '../components/Layouts/Layout'
import { rhythm, scale } from '../utils/typography'
import Toc from '../components/Toc'
import { If } from '../components/utils'


const BlogContent = React.memo(({ html }) => {
  return <section key="blog-layout" id="blog-section" dangerouslySetInnerHTML={{ __html: html }} />
});

function BlogPost(props) {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout>
      <div className="blog-main-container">
        <main className="blog-mid-container blog-post-content">
          <BlogContent html={post.html} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        </main>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
    }
  }
`
