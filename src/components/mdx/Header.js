import React from 'react'

export default function Header({ as = 'h1', children, ...props }) {
  return React.createElement(
    as,
    {
      id: children
        .toLowerCase()
        .split(/\s+/g)
        .join('-'),
      ...props,
    },
    children
  )
}
