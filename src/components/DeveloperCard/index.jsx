import React from 'react'
import { GrLinkedin, GrTwitter, GrGithub } from 'react-icons/gr'
import { FaLink } from 'react-icons/fa'

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
  website,
}) {
  return (
    <div className="developer-card">
      <div className="developer-card-user-info">
        {countryCode && (
          <span
            className={`flag-icon flag-icon-${countryCode.toLowerCase()} `}
            title={country}
          ></span>
        )}
        <div className="developer-card-username">{githubUserId}</div>
        <div className="developer-card-avatar">
          <img src={avatarUrl} alt={githubUserId} />
        </div>
        <div className="developer-card-links">
          <a
            href={`https://github.com/${githubUserId}`}
            target="__blank"
            rel="noreferrer"
          >
            <GrGithub />
          </a>
          {twitter && (
            <a href={twitter} target="__blank" rel="noreferrer">
              <GrTwitter />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="__blank" rel="noreferrer">
              <GrLinkedin />
            </a>
          )}
          {website && (
            <a href={website} target="__blank" rel="noreferrer">
              <FaLink />
            </a>
          )}
        </div>
      </div>
      <div className="developer-card-user-stats">
        <div className="developer-card-name">{name}</div>
        <div className="developer-card-detail">
          <div className="developer-card-title">Contribution(This Year)</div>
          <div className="developer-card-value">{thisYearContribution}</div>
        </div>
        <div className="developer-card-detail">
          <div className="developer-card-title">No. of Repositories</div>
          <div className="developer-card-value">{repositoryCount}</div>
        </div>
        <div className="developer-card-detail">
          <div className="developer-card-title">No. of Repos Contributed</div>
          <div className="developer-card-value">{repoContributedCount}</div>
        </div>

        <div className="developer-card-detail">
          <div className="developer-card-title">Total Pull Requests</div>
          <div className="developer-card-value">{pullRequestsCount}</div>
        </div>
        <div className="developer-card-detail">
          <div className="developer-card-title">Total Issues</div>
          <div className="developer-card-value">{issuesCount}</div>
        </div>
        <div className="developer-card-detail">
          <div className="developer-card-title">Followers</div>
          <div className="developer-card-value">{followersCount}</div>
        </div>
      </div>
    </div>
  )
}
