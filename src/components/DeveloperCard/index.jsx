import React from 'react'
import { GrLinkedin, GrTwitter, GrGithub } from 'react-icons/gr'

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
  countryCode,
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
          <img src={avatarUrl} alt={githubUserId} />
        </div>
        <div className="developer-card-links">
          <a href={`https://github.com/${githubUserId}`}>
            <GrGithub />
          </a>
          {twitter && (
            <a href={twitter}>
              <GrTwitter />
            </a>
          )}
          {linkedin && (
            <a href={linkedin}>
              <GrLinkedin />
            </a>
          )}
        </div>
      </div>
      <div className="developer-card-user-stats">
        <div className="developer-card-name">{name}</div>
        <div className="developer-card-stats">{name}</div>
      </div>
    </div>
  )
}
