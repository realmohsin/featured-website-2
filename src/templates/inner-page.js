import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'

const InnerPageTemplate = ({
  data: { contentfulRomanoInnerPage: innerPageData }
}) => {
  console.log(innerPageData)
  const image = getImage(innerPageData.heroImage)

  const mainBlurbDocument = JSON.parse(innerPageData.mainBlurb.raw)
  const pageContentDocument = JSON.parse(innerPageData.pageContent.raw)

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 style={{ color: 'red' }}>{children}</h2>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p style={{ color: 'green' }}>{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul style={{ color: 'blue' }}>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol style={{ color: 'blue' }}>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li style={{ color: 'blue' }}>{children}</li>
      ),
      [INLINES.HYPERLINK]: node => (
        <a href={node.data.uri} style={{ color: 'pink' }}>
          {node.content[0].value}
        </a>
      )
    }
  }

  return (
    <Layout>
      <h1>{innerPageData.title}</h1>
      <p>{innerPageData.slug}</p>
      <GatsbyImage image={image} alt={innerPageData.title} />

      <p>
        <b>Main Blurb: </b>
        <br />
        {documentToReactComponents(mainBlurbDocument, options)}
      </p>
      <p>
        <b>Page Content: </b>
        <br />
        {documentToReactComponents(pageContentDocument, options)}
      </p>

      <h1>{innerPageData.title}</h1>
      <p>{innerPageData.slug}</p>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulRomanoInnerPage(slug: { eq: $slug }) {
      slug
      title
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      mainBlurb {
        raw
      }
      pageContent {
        raw
      }
    }
  }
`

export default InnerPageTemplate
