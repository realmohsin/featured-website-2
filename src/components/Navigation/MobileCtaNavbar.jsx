import React from 'react'
import clsx from 'clsx'
import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
  Button
} from '@material-ui/core'
import Toggle from './Toggle'

const useStyles = makeStyles(theme => ({
  mobileCtaNavbar: {
    backgroundColor: theme.palette.primary.dark,
    padding: '0.95rem',
    position: 'fixed',
    top: 0,
    boxShadow: theme.shadows[3],
    zIndex: 10
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
