import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography, Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  aboutSection: {
    padding: '2rem 0 12rem'
  },
  symbolDivider: {
    width: '3.5rem',
    height: '2px',
    backgroundColor: theme.palette.secondary.main,
    margin: '10rem 0 2rem',
    [theme.breakpoints.down('xs')]: {
      margin: '4rem 0 2rem'
    }
  },
  aboutTitle: {
    ...theme.custom.title2,
    textAlign: 'left',
    fontSize: '5.6rem',
    paddingLeft: '5rem',
    marginBottom: '2rem',
    marginTop: '3rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '4.6rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '4rem',
      paddingLeft: '1.2rem'
    }
  },
  aboutSubTitle: {
    ...theme.custom.title3,
    marginBottom: '3rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.8rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.2rem'
    }
  },
  gridItem: {
    padding: '0 5rem',
    [theme.breakpoints.down('xs')]: {
      padding: '0 1.2rem'
    }
  },
  contentTitle: {
    ...theme.custom.title5,
    letterSpacing: '1px',
    marginBottom: '3rem'
  },
  leftImg: {
    [theme.breakpoints.down('xs')]: {
      height: '40rem'
    }
  }
}))

const AboutSection = props => {
  const theme = useTheme()
  const classes = useStyles()

  const atXsDown = useMediaQuery(theme.breakpoints.down('xs')) // below 600

  const RightSideImg = () => (
    <StaticImage src='../../assets/images/about-2.jpg' alt='Business Law' />
  )

  const RightSideText = () => (
    <>
      <div className={classes.symbolDivider} />
      <h5 className={classes.contentTitle}>We Love What We Do</h5>
      <Typography variant='body1' gutterBottom>
        We are committed to providing practical legal services.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Whether you’re scaling a business, negotiating a contract or trying to
        resolve a dispute – your goals become our goals.
      </Typography>
      <Typography variant='body1' gutterBottom>
        We pride ourselves in being approachable and getting things done. We
        avoid legalese. We’re proactive.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Focused on business, entertainment and dispute resolution, we represent
        entrepreneurs, stake-holders and creative professionals.
      </Typography>
      <Typography variant='body1' gutterBottom>
        We focus on legal strategy, so you don’t have to.
      </Typography>
      <Typography variant='body1' gutterBottom>
        We’ve got this.
      </Typography>
    </>
  )

  return (
    <section className={classes.aboutSection}>
      <Container>
        <h1 className={classes.aboutTitle}>About Our Firm</h1>
        <Grid container>
          <Grid item xs={12} sm={6} className={classes.gridItem}>
            <h2 className={classes.aboutSubTitle}>
              Innovative Legal Counsel for Business, Professionals & Creative
              People
            </h2>
            <StaticImage
              src='../../assets/images/about-1.jpg'
              alt='Business Law'
              className={classes.leftImg}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridItem}>
            {atXsDown ? (
              <>
                <RightSideText />
                <RightSideImg />
              </>
            ) : (
              <>
                <RightSideImg />
                <RightSideText />
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default AboutSection
