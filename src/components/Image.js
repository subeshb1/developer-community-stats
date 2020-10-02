import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const prepareQuery = (path, width, height) => graphql`
  query {
    file(absolutePath: { regex: ${path} }) {
      childImageSharp {
        fixed(width: ${width}, height: ${height}) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default ({ path, width, height, ...props }) => {
  const data = useStaticQuery(prepareQuery())
  return <Img fixed={data.file.childImageSharp.fixed} {...props} />
}
