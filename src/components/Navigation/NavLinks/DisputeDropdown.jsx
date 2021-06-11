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
    height: '32rem', // 4.75rem each
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
  }
}))

const DisputeDropdown = ({ inSideDrawer, pathname }) => {
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
          className={clsx(
            classes.nameLink,
            pathname === '/business-disputes/arbitration' && classes.active
          )}
        >
          Arbitration
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/breach-of-contract`}
          className={clsx(
            classes.nameLink,
            pathname === '/business-disputes/breach-of-contract' &&
              classes.active
          )}
        >
          Breach of Contract
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/copyright-infringement`}
          className={clsx(
            classes.nameLink,
            pathname === '/business-disputes/copyright-infringement' &&
              classes.active
          )}
        >
          Copyright Infringement
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/debt-collection`}
          className={clsx(
            classes.nameLink,
            pathname === '/business-disputes/debt-collection' && classes.active
          )}
        >
          Debt Collection
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/trademark-infringement`}
          className={clsx(
            classes.nameLink,
            pathname === '/business-disputes/trademark-infringement' &&
              classes.active
          )}
        >
          Trademark Infringement
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/defamation-attorney-nyc`}
          className={clsx(
            classes.nameLink,
            pathname === '/business-disputes/defamation-attorney-nyc' &&
              classes.active
          )}
        >
          Defamation
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/business-torts`}
          className={clsx(
            classes.nameLink,
            pathname === '/business-disputes/business-torts' && classes.active
          )}
        >
          Business Torts
        </Link>
      </Grid>
    </Grid>
  )
}

export default DisputeDropdown
