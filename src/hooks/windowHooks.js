import { useState, useEffect } from 'react'

export function useWindowWidth() {
  const [width, setWidth] = useState(null)

  useEffect(() => {
    window &&
      window.addEventListener('resize', () => {
        setWidth(window.width)
      })
  }, [])

  return width
}

export function useWindowHeight() {
  const [height, setHeight] = useState(null)

  useEffect(() => {
    window &&
      window.addEventListener('resize', () => {
        setHeight(window.height)
      })
  }, [])

  return height
}
