import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'
import Button from '../Button'

const useStyles = makeStyles(theme => ({
  instagramSection: {
    padding: '12rem 0',
    background: `radial-gradient(circle, rgba(239,249,249, 0.9) 0%, rgba(255, 255, 255, 0.4) 100%)`,
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    [theme.breakpoints.down('xs')]: {
      padding: '8rem 0'
    }
  },
  instagramTitle: {
    ...theme.custom.title2,
    marginBottom: '6rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '3.4rem'
    }
  },
  instagramGrid: {
    padding: '0 7rem',
    marginBottom: '5rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0 2rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0'
    }
  },
  gridItem: {
    padding: '1.75rem',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      padding: '1.75rem 0.8rem'
    }
  },
  instagramImg: {},
  instagramButton: {
    margin: '0 auto'
  },
  lightBg: {
    zIndex: -10
  }
}))

const InstagramSection = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { regex: "/^instagram-/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(height: 329, width: 329)
          }
        }
      }
    }
  `)

  return (
    <section className={classes.instagramSection}>
      <StaticImage
        src='../../assets/images/light-bg.png'
        className={classes.lightBg}
      />
      <Container>
        <h2 className={classes.instagramTitle}>Romano Law Instagram</h2>
        <Grid container className={classes.instagramGrid}>
          {data.allFile.nodes.map(node => (
            <Grid item className={classes.gridItem} xs={12} sm={6} md={4}>
              <GatsbyImage
                image={getImage(node.childImageSharp)}
                alt='Featured In'
                className={classes.instagramImg}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          isLink
          href='https://www.instagram.com'
          text={'Visit our Instagram'}
          extraClassName={classes.instagramButton}
        />
      </Container>
    </section>
  )
}

export default InstagramSection
