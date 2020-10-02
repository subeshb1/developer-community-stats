import React from 'react'

export default function DeveloperCard({
  repositoryCount,
  contributionYears,
  country,
  firstContribution,
  followersCount,
  githubUserId,
  issuesCount,
  linkedin,
  name,
  avatarUrl,
  pullRequestsCount,
  repoContributedCount,
  thisYearContribution,
  twitter,
}) {
  return (
    <div className="developer-card">
      <div className="developer-card-user-info">
        <div className="developer-card-username">{githubUserId}</div>
        <div className="developer-card-avatar">
          <img src="" alt={githubUserId} />
        </div>
        <div className="developer-card-links"></div>
      </div>
      <div className="developer-card-user-stats">
        <div className="developer-card-name">{name}</div>
        <div className="developer-card-name">{name}</div>
      </div>
    </div>
  )
}
