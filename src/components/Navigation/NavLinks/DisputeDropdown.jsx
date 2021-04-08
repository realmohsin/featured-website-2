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
    // width: '31rem',
    // height: '38rem', // 4.75rem each
    width: '23rem',
    height: '30rem', // 4.75rem each
    // background: 'white',
    background: theme.palette.primary.dark,
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
        <AniLink
          fade
          duration={1}
          to={`/business-disputes/arbitration`}
          className={classes.nameLink}
        >
          Arbitration
        </AniLink>
      </Grid>
      <Grid item component='li'>
        <AniLink
          fade
          duration={1}
          to={`/business-disputes/breach-of-contract`}
          className={classes.nameLink}
        >
          Breach of Contract
        </AniLink>
      </Grid>
      <Grid item component='li'>
        <AniLink
          fade
          duration={1}
          to={`/business-disputes/copyright-infringement`}
          className={classes.nameLink}
        >
          Copyright Infringement
        </AniLink>
      </Grid>
      <Grid item component='li'>
        <AniLink
          fade
          duration={1}
          to={`/business-disputes/debt-collection`}
          className={classes.nameLink}
        >
          Debt Collection
        </AniLink>
      </Grid>
      <Grid item component='li'>
        <AniLink
          fade
          duration={1}
          to={`/business-disputes/trademark-infringement`}
          className={classes.nameLink}
        >
          Trademark Infringement
        </AniLink>
      </Grid>
      <Grid item component='li'>
        <AniLink
          fade
          duration={1}
          to={`/business-disputes/defamation-attorney-nyc`}
          className={classes.nameLink}
        >
          Defamation
        </AniLink>
      </Grid>
    </Grid>
  )
}

export default DisputeDropdown

// import React from 'react'
// import { makeStyles, Grid } from '@material-ui/core'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
// import clsx from 'clsx'

// const useStyles = makeStyles(theme => ({
//   photosDropdown: {
//     opacity: 0,
//     pointerEvents: 'none',
//     border: '1px solid purple',
//     transform: 'translateY(50px)',
//     transition: 'all 0.3s',
//     width: '32rem',
//     height: '28.5rem', // 4.75rem each
//     background: 'white',
//     boxShadow: theme.shadows[5],
//     '& > li': {
//       flex: '1',
//       display: 'flex'
//     }
//   },
//   link: {
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

// const DisputeDropdown = ({ inSideDrawer }) => {
//   const classes = useStyles()
//   return (
//     <Grid
//       container
//       className={clsx(
//         classes.photosDropdown,
//         inSideDrawer && classes.inSideDrawer
//       )}
//       component='ul'
//       direction='column'
//     >
//       <Grid item component='li'>
//         <AniLink
//           fade
//           duration={1}
//           to={`/business-disputes/arbitration`}
//           className={classes.link}
//         >
//           Arbitration
//         </AniLink>
//       </Grid>
//       <Grid item component='li'>
//         <AniLink
//           fade
//           duration={1}
//           to={`/business-disputes/breach-of-contract`}
//           className={classes.link}
//         >
//           Breach of Contract
//         </AniLink>
//       </Grid>
//       <Grid item component='li'>
//         <AniLink
//           fade
//           duration={1}
//           to={`/business-disputes/copyright-infringement`}
//           className={classes.link}
//         >
//           Copyright Infringement
//         </AniLink>
//       </Grid>
//       <Grid item component='li'>
//         <AniLink
//           fade
//           duration={1}
//           to={`/business-disputes/debt-collection`}
//           className={classes.link}
//         >
//           Debt Collection
//         </AniLink>
//       </Grid>
//       <Grid item component='li'>
//         <AniLink
//           fade
//           duration={1}
//           to={`/business-disputes/trademark-infringement`}
//           className={classes.link}
//         >
//           Trademark Infringement
//         </AniLink>
//       </Grid>
//       <Grid item component='li'>
//         <AniLink
//           fade
//           duration={1}
//           to={`/business-disputes/defamation-attorney-nyc`}
//           className={classes.link}
//         >
//           Defamation
//         </AniLink>
//       </Grid>
//     </Grid>
//   )
// }

// export default DisputeDropdown
