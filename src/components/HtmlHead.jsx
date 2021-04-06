import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const HtmlHead = ({ title, description }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet>
      <title>{title || site.siteMetadata.title}</title>
      <meta
        name='description'
        content={description || site.siteMetadata.description}
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Piazzolla&family=PT+Serif&family=Noto+Serif+JP&family=Cinzel&family=Playfair+Display&display=swap'
        rel='stylesheet'
      />
    </Helmet>
  )
}

export default HtmlHead
