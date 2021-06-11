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
    },
    [theme.breakpoints.down('xs')]: {
      padding: '8rem 0 4.5rem'
    }
  },
  logo: {
    width: '20rem',
    [theme.breakpoints.down('sm')]: {
      width: '18rem'
    },
    [theme.breakpoints.down('xs')]: {
      width: '13rem'
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
        placeholder='none'
      />
    </div>
  )
}

export default LogoHeader
