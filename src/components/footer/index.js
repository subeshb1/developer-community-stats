import React, { Component } from 'react'
import { Link } from 'gatsby'
import { GrLinkedin, GrTwitter, GrGithub, GrRss } from 'react-icons/gr'
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="links">
          <div className="group">
            <Link to="/">Blogs</Link>
            <Link to="/blog/games/build-a-snake-game" className="item">
              Build a snake game
            </Link>
            <Link to="/blog/api-test/api-test-tutorial" className="item">
              Test JSON api from terminal
            </Link>
          </div>
          <div className="group">
            <Link to="/app">Apps</Link>
            <Link to="/app/sorting/" className="item">
              Sorting Algorithms
            </Link>
            <Link to="/app/graph-search/" className="item">
              Path finding Algorithms
            </Link>
            <Link to="/app/drawable-graph/" className="item">
              Searching algorithm
            </Link>
            <Link to="/app/games/" className="item">
              Play Games
            </Link>
          </div>
          <div className="group">
            Projects
            <Link to="/api-test/" className="item">
              api-test
            </Link>
          </div>
          <div className="group">
            Stay In Touch
            <a
              href="https://twitter.com/subeshb1"
              className="item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrTwitter /> Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/subesh-bhandari-523438112/"
              className="item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrLinkedin />
              LinkedIn
            </a>
            <a
              href="https://github.com/subeshb1"
              className="item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrGithub />
              Github
            </a>
            <a
              href="/rss.xml"
              className="item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrRss />
              Rss
            </a>
          </div>
        </div>
        <div className="copyright">
          {new Date().getFullYear()} - Developer Community Stats
        </div>
      </div>
    )
  }
}
