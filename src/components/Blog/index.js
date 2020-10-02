import React from 'react'
import { Link } from 'gatsby'

export function NextBlog({ previousNode, nextNode, series, current }) {
  let previous, next
  if (series && series.length) {
    const currentBlogIndex = series.findIndex(x => x.slug == current)
    if (currentBlogIndex !== -1) {
      next = series[currentBlogIndex + 1]
      previous = series[currentBlogIndex - 1]
    }
  } else {
    previousNode &&
      (previous = {
        slug: previousNode.fields.slug,
        title: previousNode.frontmatter.title,
      })
    nextNode &&
      (previous = {
        slug: nextNode.fields.slug,
        title: nextNode.frontmatter.title,
      })
  }
  return (
    <div className="next-blog-container">
      <div className="next-blog-container__item">
        {previous && (
          <Link to={previous.slug} rel="prev">
            <span className="next-blog-header">Previous</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="css-1hyj6ne"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ verticalAlign: 'middle' }}
            >
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg>
            {previous.title}
          </Link>
        )}
      </div>
      <div className="next-blog-container__item next-blog-container__item--right">
        {next && (
          <Link to={next.slug} rel="next">
            <span className="next-blog-header">Next</span>
            {next.title}{' '}
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="css-jmo9lw"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ verticalAlign: 'middle' }}
            >
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}
