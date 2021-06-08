import React from 'react'
import { Link } from 'gatsby'
import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
  Button
} from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  nameDropdown: {
    opacity: 0,
    pointerEvents: 'none',
    border: `1px solid ${theme.palette.secondary.main}`,
    transform: 'translateY(50px)',
    transition: 'all 0.3s',
    width: '23rem',
    height: '30rem', // 4.75rem each
    backgroundColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[5],
    '& > li': {
      flex: '1',
      display: 'flex'
    }
  },
  nameLink: {
    // ...theme.custom.navLinkText,
    color: theme.palette.secondary.main,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '2rem',
    transition: 'all 0.1s',
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    }
  },
  inSideDrawer: {
    ...theme.custom.inSideDrawer
  }
}))

const BusinessDropdown = ({ inSideDrawer }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      className={clsx(
        classes.nameDropdown,
        inSideDrawer && classes.inSideDrawer
      )}
      component='ul'
      direction='column'
    >
      <Grid item component='li'>
        <Link to={`/business/small-business-law`} className={classes.nameLink}>
          Small Business Law
        </Link>
      </Grid>

      <Grid item component='li'>
        <Link to={`/business/startup-lawyers`} className={classes.nameLink}>
          Start-Up Law
        </Link>
      </Grid>

      <Grid item component='li'>
        <Link
          to={`/business/secured-transactions`}
          className={classes.nameLink}
        >
          Secured Transactions
        </Link>
      </Grid>

      <Grid item component='li'>
        <Link to={`/business/insolvency`} className={classes.nameLink}>
          Insolvency
        </Link>
      </Grid>

      <Grid item component='li'>
        <Link to={`/business/internet-law`} className={classes.nameLink}>
          Internet Law
        </Link>
      </Grid>

      <Grid item component='li'>
        <Link
          to={`/business/business-agreements-partnership-operating-shareholder`}
          className={classes.nameLink}
        >
          Business Agreements
        </Link>
      </Grid>
    </Grid>
  )
}

export default BusinessDropdown
