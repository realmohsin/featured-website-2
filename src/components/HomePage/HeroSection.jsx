import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  example: {
    // ...mobile first styles,
    [theme.breakpoints.up('sm')]: {
      //...sm and up styles
    },
    [theme.breakpoints.up('md')]: {
      //...md and up styles
    },
    '@media (min-width: 1320px)': {
      //...rules for above 1320px
    }
  },
  heroSection: {
    marginTop: '-2rem',
    position: 'relative',
    height: '74rem'
  },
  heroSectionTitle: {
    zIndex: 1, // unclear why this is needed
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    top: '15%',
    color: theme.palette.primary.dark,
    fontFamily: ['Piazzolla', 'serif'].join(', '),
    fontSize: '4.2rem'
  },
  heroImage: {
    height: '100%'
  }
}))

const HeroSection = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      contentfulRomanoHomePage {
        heroImageTitle
        heroImage1 {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  const image = getImage(data.contentfulRomanoHomePage.heroImage1)

  return (
    <section className={classes.heroSection}>
      <h1 className={classes.heroSectionTitle}>
        {data.contentfulRomanoHomePage.heroImageTitle}
      </h1>
      <GatsbyImage
        image={image}
        alt={'Romana Law Lawyers'}
        className={classes.heroImage}
      />
    </section>
  )
}

export default HeroSection
