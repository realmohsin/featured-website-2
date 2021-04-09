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
  aboutHeroSection: {
    marginTop: '-2rem',
    // position: 'relative',
    height: '42rem',
    overflow: 'hidden'
  },
  // AboutHeroSectionTitle: {
  //   zIndex: 1, // unclear why this is needed
  //   width: '100%',
  //   textAlign: 'center',
  //   position: 'absolute',
  //   top: '15%',
  //   color: theme.palette.primary.dark,
  //   fontFamily: ['Piazzolla', 'serif'].join(', '),
  //   fontSize: '4.2rem'
  // },
  heroImage: {
    transform: 'translateY(-10%)'
    // height: '100%',
    // objectFit: 'center',
    // objectPosition: '25% 25%'
  }
}))

const AboutHeroSection = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      contentfulRomanoAboutPage {
        heroImage {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  const image = getImage(data.contentfulRomanoAboutPage.heroImage)

  return (
    <section className={classes.aboutHeroSection}>
      <GatsbyImage
        image={image}
        layout='fullWidth'
        alt={'Romana Law Lawyers'}
        className={classes.heroImage}
      />
    </section>
  )
}

export default AboutHeroSection
