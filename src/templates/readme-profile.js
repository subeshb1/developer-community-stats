import React, { useEffect } from 'react'

import { graphql, Link } from 'gatsby'
import Layout from '../components/Layouts/Layout'
import { rhythm, scale } from '../utils/typography'
import Toc from '../components/Toc'
import { If } from '../components/utils'
import DeveloperCard from '../components/DeveloperCard'


const BlogContent = React.memo(({ html }) => {
  return <section key="blog-layout" id="blog-section" dangerouslySetInnerHTML={{ __html: html }} />
});

function BlogPost(props) {
  const post = props.data.markdownRemark
  const card = props.data.contributor
  return (
    <Layout>
      <div className="readme-profile">
        <DeveloperCard {...card} />
        <div className="blog-main-container">
          <main className="readme-mid-container blog-post-content">
            <BlogContent html={post.html} />
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
          </main>
        </div>
      </div>
    </Layout >
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!, $githubUserId: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contributor(githubUserId: {eq: $githubUserId}) {
      id
      countryCode
      repositoryCount
      contributionYears
      country
      firstContribution
      followersCount
      githubUserId
      issuesCount
      linkedin
      website
      name
      pullRequestsCount
      repoContributedCount
      thisYearContribution
      twitter
      avatarUrl
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
