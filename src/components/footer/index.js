import React, { Component } from 'react'
import { Link } from 'gatsby'
import { GrLinkedin, GrTwitter, GrGithub, GrRss, GrGraphQl, GrGatsbyjs } from 'react-icons/gr'
import { FaGithub, FaReact } from 'react-icons/fa';
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="links">
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
          </div>
        </div>
        <div className="copyright">
          {new Date().getFullYear()} - Subesh Bhandari
        </div>
        <div className="madeWith">
          Made with
          <a href="https://reactjs.org/"><FaReact /></a>
          <a href="https://github.com"><FaGithub /></a>
          <a href="https://graphql.org/"><GrGraphQl /></a>
          <a href="https://www.gatsbyjs.com/"><GrGatsbyjs /></a>
        </div>
      </div>
    )
  }
}
