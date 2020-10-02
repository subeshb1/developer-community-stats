import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

const categorizeSeries = series =>
  series.reduce((acc, x) => {
    const key = Math.floor(x.position / 100)
    if (!acc[key]) {
      acc[key] = {
        category: x.category,
        items: [x],
      }
    } else {
      acc[key].items.push(x)
    }
    return acc
  }, [])

export default function SideBar({ seriesElements }) {
  useEffect(() => {
    document.querySelector('.blog-sidebar__item--active') &&
      document.querySelector('.blog-sidebar__item--active').focus()
  }, [])
  if (!(seriesElements && seriesElements.length)) return null
  const first = seriesElements[0]
  const categorizedSeries = categorizeSeries(seriesElements.slice(1))

  return (
    <aside className="blog-sidebar">
      <Link
        className="blog-sidebar__series-title blog-sidebar__item"
        key={first.title}
        activeClassName="blog-sidebar__item--active"
        to={first.slug}
      >
        {first.title}
      </Link>
      {categorizedSeries.map((elements, i) => {
        return (
          <React.Fragment key={i}>
            {elements.category && (
              <div className="blog-sidebar__header">{elements.category}</div>
            )}
            {elements.items.map(element => (
              <Link
                className="blog-sidebar__item"
                key={element.title}
                activeClassName="blog-sidebar__item--active"
                to={element.slug}
              >
                {element.shortTitle || element.title}
              </Link>
            ))}
          </React.Fragment>
        )
      })}
    </aside>
  )
}
