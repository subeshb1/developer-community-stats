import React from 'react'

export const If = ({ condition, children, fallback = null }) => {
  return condition ? children : fallback
}
