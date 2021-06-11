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
  },
  activeInSideDrawer: {
    color: `${theme.palette.secondary.main} !important`
  }
}))

const EntertainmentDropdown = ({ inSideDrawer, pathname }) => {
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
          to={`/entertainment/trademark-law`}
          className={createClassNames(`/entertainment/trademark-law`)}
        >
          Trademark Law
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/entertainment/art-law`}
          className={createClassNames(`/entertainment/art-law`)}
        >
          Art Law
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/entertainment/fashion-law`}
          className={createClassNames(`/entertainment/fashion-law`)}
        >
          Fashion Law
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/entertainment/film-financing`}
          className={createClassNames(`/entertainment/film-financing`)}
        >
          Film Financing
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/entertainment/music-law`}
          className={createClassNames(`/entertainment/music-law`)}
        >
          Music Law
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/entertainment/sports-law-attorney`}
          className={createClassNames(`/entertainment/sports-law-attorney`)}
        >
          Sports Law
        </Link>
      </Grid>
    </Grid>
  )
}

export default EntertainmentDropdown
