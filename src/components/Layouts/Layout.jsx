import React, { useState, useEffect } from 'react'
import '../../css/index.scss'
import NavBar from '../navbar/index'
import Footer from '../footer/index'

class ErrorBoundary extends React.PureComponent {
  constructor() {
    super()
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong. Please refresh the page!</h1>
    }

    return this.props.children
  }
}

const Layout = props => {
  const { children } = props

  return (
    <div id="project-main-container">
      <NavBar />
      <div className="nav-breaker"></div>
      <ErrorBoundary>
        <div className="dynamic-container">{children}</div>
      </ErrorBoundary>
      <Footer />
      <div className="st-nav-breaker"></div>
    </div>
  )
}


export default Layout
