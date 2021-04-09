import React from 'react'
import { StaticImage, getImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import lightBg from '../../assets/images/light-bg.png'

const useStyles = makeStyles(theme => ({
  introSection: {
    padding: '12rem',
    background: `radial-gradient(circle, rgba(239,249,249, 0.9) 0%, rgba(255, 255, 255, 0.4) 100%)`,
    position: 'relative',
    '& .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    [theme.breakpoints.down('md')]: {
      padding: '12rem 9rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '11rem 5rem'
    }
  },
  introTitle: {
    ...theme.custom.title2
  },
  introSecondaryTitle: {
    ...theme.custom.title3
  },
  introGrid: {},
  firstGridItem: {
    paddingLeft: '4rem',
    paddingRight: '5rem',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '8rem'
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      paddingRight: 0
    }
  },
  secondGridItem: {
    paddingLeft: '7rem',
    paddingRight: '7rem',
    '@media (max-width: 1520px)': {
      paddingLeft: '3rem',
      paddingRight: 0
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  paragraph: {
    marginBottom: '2.5rem'
  },
  highlightedText: {
    color: theme.palette.secondary.main,
    letterSpacing: '0.7px',
    fontWeight: 'normal'
  },
  symbolDivider: {
    width: '3.5rem',
    height: '2px',
    backgroundColor: theme.palette.secondary.main,
    marginBottom: '2rem'
  },
  lightBg: {
    zIndex: -10
  }
}))

const IntroSection = () => {
  const classes = useStyles()

  return (
    <section className={classes.introSection}>
      <StaticImage
        src='../../assets/images/light-bg.png'
        className={classes.lightBg}
      />
      <Container>
        <h2 className={classes.introTitle}>Innovative Legal Counsel</h2>
        <Grid container className={classes.introGrid}>
          <Grid item xs={12} md={6} className={classes.firstGridItem}>
            <h3 className={classes.introSecondaryTitle}>
              For Businesses, Professionals & Creative People
            </h3>
          </Grid>
          <Grid item xs={12} md={6} className={classes.secondGridItem}>
            <div className={classes.symbolDivider} />
            <Typography variant='body1' className={classes.paragraph}>
              <strong className={classes.highlightedText}>
                BASED IN NEW YORK CITY
              </strong>
              , Romano Law is a cutting edge firm, with a passion for making a
              difference in our clients’ lives.
            </Typography>
            <Typography variant='body1' className={classes.paragraph}>
              Our legal team takes pride in developing meaningful relationships
              with our clients. Our mission is to deliver cost-effective and
              efficient solutions to help you or your company thrive.
            </Typography>
            <Typography variant='body1' className={classes.paragraph}>
              We’re more than just attorneys – we’re trusted advisors. We love
              what we do.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default IntroSection
