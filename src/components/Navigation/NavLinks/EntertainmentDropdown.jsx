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
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    }
  },
  inSideDrawer: {
    ...theme.custom.inSideDrawer
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
        <Link to={`/entertainment/trademark-law`} className={classes.nameLink}>
          Trademark Law
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link to={`/entertainment/art-law`} className={classes.nameLink}>
          Art Law
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link to={`/entertainment/fashion-law`} className={classes.nameLink}>
          Fashion Law
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link to={`/entertainment/film-financing`} className={classes.nameLink}>
          Film Financing
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link to={`/entertainment/music-law`} className={classes.nameLink}>
          Music Law
        </Link>
      </Grid>
      <Grid item component='li'>
        <Link
          to={`/entertainment/sports-law-attorney`}
          className={classes.nameLink}
        >
          Sports Law
        </Link>
      </Grid>
    </Grid>
  )
}

export default EntertainmentDropdown
