import React from 'react'
import { Link, graphql } from 'gatsby'
import 'flag-icon-css/css/flag-icon.min.css'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import BlogPostTemplate from '../components/Layouts/BlogLayout'
import Layout from '../components/Layouts/Layout'
import DeveloperCard from '../components/DeveloperCard'

class DeveloperCommunityHome extends React.Component {
  render() {
    const { data: { allContributor: { nodes: contributors } } } = this.props

    console.log(contributors)
    return (
      <Layout>
        <SEO
          url="/"
          title="Developer Community Stats"
          description="A repository to encourage beginners to contribute to open source and for all contributors to view their Github stats."
          keywords={[`GithubStats`, `github`, `stats`, `developer`, `community`]}
        />

        <div className="developer-card-container">
          {
            contributors.map(contributorStats => <DeveloperCard {...contributorStats} key={contributorStats.id} />)
          }
        </div>
      </Layout>
    )
  }
}

export default DeveloperCommunityHome

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContributor(sort: {order: DESC, fields: thisYearContribution}) {
    totalCount
    nodes {
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
      name
      pullRequestsCount
      repoContributedCount
      thisYearContribution
      twitter
      avatarUrl
    }
  }
  }
`
