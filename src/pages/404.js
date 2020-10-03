import React from 'react'
import Layout from '../components/Layouts/Layout'
import SEO from '../components/seo'
import notFound from '../assets/svg/404.svg'
import '../css/404.scss'
import { Link } from 'gatsby'
class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="404: Not Found" />
        <div className="not-found">
          <img src={notFound} alt="404 not found" />
          <div className="not-found__message">
            <h1>Not Found</h1>
            Looks like the page you are looking for couldn't be found.
            <Link to="/" className="not-found__button">
              Return Home
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage
