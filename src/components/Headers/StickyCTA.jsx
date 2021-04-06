import React from 'react'
import clsx from 'clsx'
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
  stickyCta: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.dark,
    width: '100%',
    padding: '0.95rem',
    position: 'fixed',
    boxShadow: theme.shadows[2],
    zIndex: 100
  },
  stickyCtaText: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: '1.6rem',
    letterSpacing: '1px',
    fontWeight: 'normal'
  },
  ctaButton: {
    backgroundColor: 'transparent',
    color: 'white',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: '1rem',
    padding: '0.75rem 1.5rem',
    transition: '0.3s all',
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main
    }
  },
  callButton: {
    marginLeft: '2rem',
    letterSpacing: '0.5px'
  },
  bookNowButton: {
    marginLeft: '2rem'
  }
}))

const StickyCTA = () => {
  const classes = useStyles()

  return (
    <div className={classes.stickyCta}>
      <h5 className={classes.stickyCtaText}>
        Contact an Experienced Business Lawyer Now
      </h5>
      <button className={clsx(classes.ctaButton, classes.callButton)}>
        (212) 865-8989
      </button>
      <button className={clsx(classes.ctaButton, classes.bookNowButton)}>
        Book Now
      </button>
    </div>
  )
}

export default StickyCTA
