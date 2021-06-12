import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography, Container } from '@material-ui/core'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'

const useStyles = makeStyles(theme => ({
  heroSection: {
    marginTop: '-2.3rem',
    height: '62rem',
    // overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      // minWidth: '60%',
      // marginTop: 0
      height: 'auto'
    }
  },
  heroImage: {
    transform: 'translateY(-10%)',
    [theme.breakpoints.down('xs')]: {
      transform: 'translateY(0)',
      height: '40vh'
    }
  },
  mainBlurb: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '50%',
    backgroundColor: '#002B2E',
    transform: 'translate(-50%, -50%)',
    padding: '5rem 8rem 10rem',
    borderRadius: '0rem',
    '& p': {
      color: 'white',
      fontSize: '1.7rem',
      lineHeight: 1.8
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '60%'
    },
    [theme.breakpoints.down('xs')]: {
      position: 'static',
      transform: 'translate(0, 0)',
      padding: '3rem 4rem 5rem',
      '& p': {
        fontSize: '1.5rem',
        lineHeight: 1.6
      }
    }
  },
  mainTitle: {
    fontFamily: ['PT Serif', 'serif'].join(', '),
    fontSize: '4.8rem',
    color: '#CCAB63',
    fontWeight: 'normal',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '3.4rem'
    }
  },
  imageContainer: {
    height: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      height: 'auto'
    }
  },
  contentTitle: {
    fontFamily: ['Piazzolla', 'serif'].join(', '),
    fontSize: '2.2rem',
    color: '#0E5C60',
    marginBottom: '0.5rem',
    marginTop: '6rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.8rem'
    }
  },
  contentSection: {
    padding: '3rem 18rem',
    [theme.breakpoints.down('md')]: {
      padding: '3rem 12rem'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '3rem 4rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '2rem 1.2rem'
    }
  },
  contentPara: {
    marginBottom: '2rem',
    fontSize: '1.6rem',
    lineHeight: 1.7,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem'
    }
  },
  contentLink: {
    color: '#CCAB63',
    display: 'inline'
  },
  listItem: {
    listStyle: 'square',
    marginLeft: '3rem',
    paddingLeft: '1rem',
    '& > p': {
      marginBottom: '1rem'
    }
  }
}))

const InnerPageTemplate = ({
  data: { contentfulRomanoInnerPage: innerPageData },
  location
}) => {
  const classes = useStyles()
  const image = getImage(innerPageData.heroImage)

  const mainBlurbDocument = JSON.parse(innerPageData.mainBlurb.raw)
  const pageContentDocument = JSON.parse(innerPageData.pageContent.raw)

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className={classes.contentTitle}>{children}</h2>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={classes.contentPara}>{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className={classes.listItem}>{children}</li>
      ),
      [INLINES.HYPERLINK]: node => (
        <a href={node.data.uri} className={classes.contentLink}>
          {node.content[0].value}
        </a>
      )
    }
  }

  return (
    <Layout location={location}>
      <section className={classes.heroSection}>
        <div className={classes.imageContainer}>
          <GatsbyImage
            image={image}
            alt={innerPageData.title}
            className={classes.heroImage}
            layout='fullWidth'
          />
        </div>

        <div className={classes.mainBlurb}>
          <h1 className={classes.mainTitle}>{innerPageData.title}</h1>
          <br />
          {documentToReactComponents(mainBlurbDocument, options)}
        </div>
      </section>

      <Container>
        <section className={classes.contentSection}>
          {documentToReactComponents(pageContentDocument, options)}
        </section>
      </Container>
      <ContactForm />
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
