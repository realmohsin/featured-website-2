import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage, getImage } from 'gatsby-plugin-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Container, Typography } from '@material-ui/core'
import Button from '../Button'

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
  focusSection: {
    padding: '12rem 0'
  },
  focusTitle: {
    ...theme.custom.title2
  },
  row: {
    marginBottom: '5rem'
  },
  rowContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 5rem'
  },

  rowTitle: {
    ...theme.custom.title4,
    textAlign: 'center',
    marginBottom: '4rem'
  },
  divider: {
    width: '100%',
    height: '2px',
    backgroundColor: theme.palette.secondary.main
  },
  rowParagraph: {
    margin: '4rem 0 8rem'
  },
  button: {
    margin: '0 auto'
  },
  rowImgContainer: {
    padding: '2.3rem'
  }
}))

const FocusSection = props => {
  const classes = useStyles()
  // const data = useStaticQuery(graphql`
  //   query {
  //     focus1: file(name: { eq: "focus-1" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1275, maxHeight: 828) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     focus2: file(name: { eq: "focus-2" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1275, maxHeight: 828) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     focus3: file(name: { eq: "focus-3" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1275, maxHeight: 828) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <section className={classes.focusSection}>
      <Container>
        <h2 className={classes.focusTitle}>Our Focus</h2>
        <Grid container className={classes.row}>
          <Grid item xs={12} sm={5} className={classes.rowContent}>
            <h3 className={classes.rowTitle}>Business Law</h3>
            <div className={classes.divider} />
            <Typography variant='body1' className={classes.rowParagraph}>
              From startups to larger corporations, we provide a range of legal
              services to help your business grow.
            </Typography>
            <Button isLink text='Learn More' extraClassName={classes.button} />
          </Grid>
          <Grid item xs={12} sm={7} className={classes.rowImgContainer}>
            {/* <Img fluid={data.focus1.childImageSharp.fluid} alt='Business Law' /> */}
            <StaticImage
              src='../../assets/images/focus-1.jpg'
              alt='Business Law'
            />
          </Grid>
        </Grid>

        <Grid container className={classes.row}>
          <Grid item xs={12} sm={7} className={classes.rowImgContainer}>
            {/* <Img
              fluid={data.focus2.childImageSharp.fluid}
              alt='Entertainment Law'
            /> */}
            <StaticImage
              src='../../assets/images/focus-2.jpg'
              alt='Entertainment Law'
            />
          </Grid>

          <Grid item xs={12} sm={5} className={classes.rowContent}>
            <h3 className={classes.rowTitle}>Entertainment Law</h3>
            <div className={classes.divider} />
            <Typography variant='body1' className={classes.rowParagraph}>
              We’re here to provide guidance to production companies, producers,
              talent and other industry professionals as you build your career.
            </Typography>
            <Button isLink text='Learn More' extraClassName={classes.button} />
          </Grid>
        </Grid>

        <Grid container className={classes.row}>
          <Grid item xs={12} sm={5} className={classes.rowContent}>
            <h3 className={classes.rowTitle}>Business Disputes</h3>
            <div className={classes.divider} />
            <Typography variant='body1' className={classes.rowParagraph}>
              Our experienced team of attorneys can help you navigate a
              disagreement, business divorce or recover a debt. We can assist
              with the litigation or defense of commercial matters in state,
              federal bankruptcy, federal district and federal appellate courts.
            </Typography>
            <Button isLink text='Learn More' extraClassName={classes.button} />
          </Grid>
          <Grid item xs={12} sm={7} className={classes.rowImgContainer}>
            <StaticImage
              src='../../assets/images/focus-3.jpg'
              alt='Business Disputes'
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default FocusSection
