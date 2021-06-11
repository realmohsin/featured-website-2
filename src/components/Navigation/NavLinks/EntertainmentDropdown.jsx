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
    height: '27rem', // 4.75rem each
    backgroundColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[3],
    '& > li': {
      flex: '1',
      display: 'flex'
    }
  },
  nameLink: {
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

const EntertainmentDropdown = ({ inSideDrawer }) => {
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
          to={`/entertainment/trademark-law`}
          className={clsx(
            classes.nameLink,
            pathname === '/entertainment/trademark-law' && classes.active
          )}
        >
          Trademark Law
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/entertainment/art-law`}
          className={clsx(
            classes.nameLink,
            pathname === '/entertainment/art-law' && classes.active
          )}
        >
          Art Law
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/entertainment/fashion-law`}
          className={clsx(
            classes.nameLink,
            pathname === '/entertainment/fashion-law' && classes.active
          )}
        >
          Fashion Law
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/entertainment/film-financing`}
          className={clsx(
            classes.nameLink,
            pathname === '/entertainment/film-financing' && classes.active
          )}
        >
          Film Financing
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/entertainment/music-law`}
          className={clsx(
            classes.nameLink,
            pathname === '/entertainment/music-law' && classes.active
          )}
        >
          Music Law
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/entertainment/sports-law-attorney`}
          className={clsx(
            classes.nameLink,
            pathname === '/entertainment/sports-law-attorney' && classes.active
          )}
        >
          Sports Law
        </Link>
      </Grid>
    </Grid>
  )
}

export default EntertainmentDropdown
