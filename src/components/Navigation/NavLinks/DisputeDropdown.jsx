import React from 'react'
import { Link } from 'gatsby'
import { makeStyles, Grid } from '@material-ui/core'
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
    background: '#CCAB62',
    boxShadow: theme.shadows[5],
    '& > li': {
      flex: '1',
      display: 'flex'
    }
  },
  nameLink: {
    // ...theme.custom.navLinkText,
    color: theme.palette.primary.dark,
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

const DisputeDropdown = ({ inSideDrawer }) => {
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
        <Link
          to={`/business-disputes/arbitration`}
          className={classes.nameLink}
        >
          Arbitration
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/breach-of-contract`}
          className={classes.nameLink}
        >
          Breach of Contract
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/copyright-infringement`}
          className={classes.nameLink}
        >
          Copyright Infringement
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/debt-collection`}
          className={classes.nameLink}
        >
          Debt Collection
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/trademark-infringement`}
          className={classes.nameLink}
        >
          Trademark Infringement
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/defamation-attorney-nyc`}
          className={classes.nameLink}
        >
          Defamation
        </Link>
      </Grid>
    </Grid>
  )
}

export default DisputeDropdown
