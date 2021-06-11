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
  },
  activeInSideDrawer: {
    color: `${theme.palette.secondary.main} !important`
  }
}))

const DisputeDropdown = ({ inSideDrawer, pathname }) => {
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
          to={`/business-disputes/arbitration`}
          className={createClassNames(`/business-disputes/arbitration`)}
        >
          Arbitration
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/breach-of-contract`}
          className={createClassNames(`/business-disputes/breach-of-contract`)}
        >
          Breach of Contract
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/copyright-infringement`}
          className={createClassNames(
            `/business-disputes/copyright-infringement`
          )}
        >
          Copyright Infringement
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/debt-collection`}
          className={createClassNames(`/business-disputes/debt-collection`)}
        >
          Debt Collection
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/trademark-infringement`}
          className={createClassNames(
            `/business-disputes/trademark-infringement`
          )}
        >
          Trademark Infringement
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/defamation-attorney-nyc`}
          className={createClassNames(
            `/business-disputes/defamation-attorney-nyc`
          )}
        >
          Defamation
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/business-disputes/business-torts`}
          className={createClassNames(`/business-disputes/business-torts`)}
        >
          Business Torts
        </Link>
      </Grid>
    </Grid>
  )
}

export default DisputeDropdown
