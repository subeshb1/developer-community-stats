import React from 'react'

import Layout from './Layout'
import { rhythm } from '../../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    return (
      <Layout>
        <div
          style={{
            background: 'var(--theme-background)',
            color: 'var(--theme-color)',
            minHeight: '100vh',
          }}
        >
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: 900,
              background: 'var(--theme-background)',
              color: 'var(--theme-color)',
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            {this.props.children}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate
