import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { StaticImage } from 'gatsby-plugin-image'

const useStyles = makeStyles(theme => ({
  logoHeader: {
    background: theme.palette.primary.main,
    padding: '10rem 0 7rem',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '10rem 0 6rem'
    }
  },
  logo: {
    width: '20rem',
    [theme.breakpoints.down('sm')]: {
      width: '18rem'
    }
  }
}))

const LogoHeader = () => {
  const classes = useStyles()

  return (
    <div className={classes.logoHeader}>
      <StaticImage
        src='../../assets/images/logo.png'
        alt='Romana Law Logo'
        className={classes.logo}
      />
    </div>
  )
}

export default LogoHeader
