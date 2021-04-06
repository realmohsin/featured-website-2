import React from 'react'
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
    backgroundColor: theme.palette.common.stickyHeaderColor,
    padding: '0.95rem',
    position: 'fixed',
    top: 0,
    boxShadow: theme.shadows[3],
    zIndex: 1
  },
  ctaButton: {
    ...theme.custom.ctaButton,
    [theme.breakpoints.down('sm')]: {
      lineHeight: 1.2,
      marginLeft: '1rem'
    }
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
      <Button variant='outlined' className={classes.ctaButton}>
        Schedule Your <br /> Consultation
      </Button>
      <Toggle onToggle={toggleSideDrawer} />
    </Grid>
  )
}

export default MobileCtaNavbar
