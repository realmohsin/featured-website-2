// import React from 'react'
// import {
//   makeStyles,
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Button
// } from '@material-ui/core'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
// import clsx from 'clsx'

// const useStyles = makeStyles(theme => ({
//   nameDropdown: {
//     opacity: 0,
//     pointerEvents: 'none',
//     border: '1px solid purple',
//     transform: 'translateY(50px)',
//     transition: 'all 0.3s',
//     width: '31rem',
//     height: '38rem', // 4.75rem each
//     background: 'white',
//     boxShadow: theme.shadows[5],
//     '& > li': {
//       flex: '1',
//       display: 'flex'
//     }
//   },
//   nameLink: {
//     ...theme.custom.navLinkText,
//     flex: 1,
//     display: 'flex',
//     alignItems: 'center',
//     paddingLeft: '2rem',
//     '&:hover': {
//       backgroundColor: theme.palette.common.navHoverColor,
//       color: 'white'
//     }
//   },
//   inSideDrawer: {
//     ...theme.custom.dropdownInSideDrawer
//   }
// }))

// const EntertainmentDropdown = ({ inSideDrawer }) => {
//   const classes = useStyles()
//   return (
//     <Grid
//       container
//       className={clsx(
//         classes.nameDropdown,
//         inSideDrawer && classes.inSideDrawer
//       )}
//       component='ul'
//       direction='column'
//     >
//       <Grid item component='li'>
//         <AniLink
//           fade
//           duration={1}
//           to={`/entertainment/trademark-law`}
//           className={classes.nameLink}
//         >
//           Trademark Law
//         </AniLink>
//       </Grid>
//       <Grid item component='li'>
//         <AniLink
//           fade
//           duration={1}
//           to={`/entertainment/art-law`}
//           className={classes.nameLink}
//         >
//           Art Law
//         </AniLink>
//       </Grid>
//       <Grid item component='li'>
//         <AniLink
//           fade
//           duration={1}
//           to={`/entertainment/fashion-law`}
//           className={classes.nameLink}
//         >
//           Fashion Law
//         </AniLink>
//       </Grid>
//       <Grid item component='li'>
//         <AniLink
//           fade
//           duration={1}
//           to={`/entertainment/film-financing`}
//           className={classes.nameLink}
//         >
//           Film Financing
//         </AniLink>
//       </Grid>
//       <Grid item component='li'>
//         <AniLink
//           fade
//           duration={1}
//           to={`/entertainment/music-law`}
//           className={classes.nameLink}
//         >
//           Music Law
//         </AniLink>
//       </Grid>
//       <Grid item component='li'>
//         <AniLink
//           fade
//           duration={1}
//           to={`/entertainment/sports-law-attorney`}
//           className={classes.nameLink}
//         >
//           Sports Law
//         </AniLink>
//       </Grid>
//     </Grid>
//   )
// }

// export default EntertainmentDropdown

import React from 'react'
import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
  Button
} from '@material-ui/core'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
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
    background: theme.palette.primary.dark,
    boxShadow: theme.shadows[3],
    '& > li': {
      flex: '1',
      display: 'flex'
      // '&:not(:last-of-type)': {
      //   borderBottom: `1px solid ${theme.palette.secondary.main}`
      // }
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
        <AniLink
          fade
          duration={1}
          to={`/entertainment/trademark-law`}
          className={classes.nameLink}
        >
          Trademark Law
        </AniLink>
      </Grid>
      <Grid item component='li'>
        <AniLink
          fade
          duration={1}
          to={`/entertainment/art-law`}
          className={classes.nameLink}
        >
          Art Law
        </AniLink>
      </Grid>
      <Grid item component='li'>
        <AniLink
          fade
          duration={1}
          to={`/entertainment/fashion-law`}
          className={classes.nameLink}
        >
          Fashion Law
        </AniLink>
      </Grid>
      <Grid item component='li'>
        <AniLink
          fade
          duration={1}
          to={`/entertainment/film-financing`}
          className={classes.nameLink}
        >
          Film Financing
        </AniLink>
      </Grid>
      <Grid item component='li'>
        <AniLink
          fade
          duration={1}
          to={`/entertainment/music-law`}
          className={classes.nameLink}
        >
          Music Law
        </AniLink>
      </Grid>
      <Grid item component='li'>
        <AniLink
          fade
          duration={1}
          to={`/entertainment/sports-law-attorney`}
          className={classes.nameLink}
        >
          Sports Law
        </AniLink>
      </Grid>
    </Grid>
  )
}

export default EntertainmentDropdown
