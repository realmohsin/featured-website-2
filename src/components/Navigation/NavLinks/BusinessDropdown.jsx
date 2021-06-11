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
    height: '27rem', // 4.75rem each
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
    fontSize: '1.3rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    }
  },
  inSideDrawer: {
    ...theme.custom.inSideDrawer
  },
  active: {
    backgroundColor: theme.palette.primary.light
  },
  activeInSideDrawer: {
    color: `${theme.palette.secondary.main} !important`
  }
}))

const BusinessDropdown = ({ inSideDrawer, pathname }) => {
  const classes = useStyles()

  const createClassNames = href => {
    const classNames = [classes.nameLink]
    if (pathname === href) {
      classNames.push(classes.active)
      if (inSideDrawer) {
        classNames.push(classes.activeInSideDrawer)
      }
    }
    return clsx(...classNames)
  }

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
        <Link
          to={`/business/small-business-law`}
          className={createClassNames(`/business/small-business-law`)}
        >
          Small Business Law
        </Link>
      </Grid>

      <Grid item component='li'>
        <Link
          to={`/business/startup-lawyers`}
          className={createClassNames(`/business/startup-lawyers`)}
        >
          Start-Up Law
        </Link>
      </Grid>

      <Grid item component='li'>
        <Link
          to={`/business/secured-transactions`}
          className={createClassNames(`/business/secured-transactions`)}
        >
          Secured Transactions
        </Link>
      </Grid>

      <Grid item component='li'>
        <Link
          to={`/business/insolvency`}
          className={createClassNames(`/business/insolvency`)}
        >
          Insolvency
        </Link>
      </Grid>

      <Grid item component='li'>
        <Link
          to={`/business/internet-law`}
          className={createClassNames(`/business/internet-law`)}
        >
          Internet Law
        </Link>
      </Grid>

      <Grid item component='li'>
        <Link
          to={`/business/business-agreements-partnership-operating-shareholder`}
          className={createClassNames(
            `/business/business-agreements-partnership-operating-shareholder`
          )}
        >
          Business Agreements
        </Link>
      </Grid>
    </Grid>
  )
}

export default BusinessDropdown
