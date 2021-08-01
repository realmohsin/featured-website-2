import React from 'react'
import clsx from 'clsx'
import {
  makeStyles,
  Grid
} from '@material-ui/core'
import Toggle from './Toggle'

const useStyles = makeStyles(theme => ({
  mobileCtaNavbar: {
    backgroundColor: theme.palette.primary.dark,
    padding: '0.95rem',
    position: 'fixed',
    top: 0,
    boxShadow: theme.shadows[3],
    zIndex: 10,
    [theme.breakpoints.down('xs')]: {
      padding: '0.5rem 0.9rem 0.5rem 0.5rem'
    }
  },
  ctaButton: {
    backgroundColor: 'transparent',
    color: 'white',
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: '0.5rem',
    padding: '0.75rem 1.5rem',
    transition: '0.3s all',
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0.5rem 1.6rem',
      fontSize: '1.3rem'
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

const MobileCtaNavbar = ({ toggleSideDrawer }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify='space-between'
      alignItems='center'
      className={classes.mobileCtaNavbar}
    >
      {/* <button className={clsx(classes.ctaButton, classes.callButton)}>
        (212) 865-8989
      </button> */}
      <button className={clsx(classes.ctaButton, classes.bookNowButton)}>
        Book Now
      </button>
      <Toggle onToggle={toggleSideDrawer} />
    </Grid>
  )
}

export default MobileCtaNavbar
