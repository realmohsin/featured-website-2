import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles' 

const useStyles = makeStyles(theme => ({
  contactHero: {
    marginTop: '-2rem',
    height: '42rem',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      height: 'auto'
    }
  },
  heroImage: {
    transform: 'translateY(-10%)'
  }
}))

const ContactHero = () => {
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
    <section className={classes.contactHero}>
      <GatsbyImage
        image={image}
        layout='fullWidth'
        alt={'Romana Law Lawyers'}
        className={classes.heroImage}
      />
    </section>
  )
}

export default ContactHero
