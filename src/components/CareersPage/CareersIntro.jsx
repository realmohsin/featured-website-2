import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  careersIntroSection: {
    padding: '5rem 0 0',
    [theme.breakpoints.down('xs')]: {
      padding: '2rem 0.6rem 0'
    }
  },
  careersTitle: {
    ...theme.custom.title2,
    // textAlign: 'left',
    marginTop: '2rem',
    marginBottom: '3rem',
    fontSize: '5.6rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '3.4rem'
    }
  },
  joinSubtitle: {
    ...theme.custom.title3,
    marginBottom: '3rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.2rem',
      textAlign: 'center'
    }
    // textShadow: `-1px 0 ${theme.palette.primary.main}, 0 1px ${theme.palette.primary.main}, 1px 0 ${theme.palette.primary.main}, 0 -1px ${theme.palette.primary.main}`
  },
  positionLink: {
    marginBottom: '1.5rem',
    textDecoration: 'underline',
    fontSize: '1.5rem',
    background: 'none',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    padding: 0,
    display: 'block',
    textAlign: 'left',
    '&:hover': {
      opacity: 0.8
    }
  }
}))

const CareersIntro = props => {
  const classes = useStyles()

  return (
    <section className={classes.careersIntroSection}>
      <Container maxWidth='md'>
        <Typography variant='h1' className={classes.careersTitle}>
          Careers
        </Typography>
        <Typography variant='h2' className={classes.joinSubtitle}>
          Join Our Team
        </Typography>
        <div>
          <Typography variant='body1' gutterBottom>
            We are Innovative Problem Solvers.
          </Typography>
          <Typography variant='body1' gutterBottom>
            Romano Law is a boutique law firm of talented and diverse people.
            Located in Downtown Manhattan, we are focused on Business Law,
            Entertainment, Employment and Dispute Resolution. Whatever
            “traditional” thoughts you might have about a law firm, that’s not
            us. We do things differently. Our team-oriented culture is
            professional, but modern – always working on growing and improving.{' '}
          </Typography>
          <Typography variant='body1' gutterBottom>
            We are all about getting things done and having fun along the way.
            We’re looking for intelligent, dynamic and thoughtful people.
          </Typography>
          <Typography variant='body1' gutterBottom>
            The following positions are available:
          </Typography>
          <button type="button" className={classes.positionLink}>
            Office Manager
          </button>
          <button type="button" className={classes.positionLink}>
            Experienced Corporate Attorney
          </button>
          <button type="button" className={classes.positionLink}>
            Client Development Director
          </button>
          <button type="button" className={classes.positionLink}>
            Virtual Assistant
          </button>
          <button type="button" className={classes.positionLink}>
            Experienced Business Litigation Attorney
          </button>
        </div>
      </Container>
    </section>
  )
}

export default CareersIntro
