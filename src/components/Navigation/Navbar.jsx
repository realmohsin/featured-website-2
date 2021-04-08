import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import BusinessDropdown from './NavLinks/BusinessDropdown'
import EntertainmentDropdown from './NavLinks/EntertainmentDropdown'
import DisputeDropdown from './NavLinks/DisputeDropdown'

const useStyles = makeStyles(theme => ({
  example: {
    // ...mobile first styles,
    [theme.breakpoints.up('sm')]: {
      //...sm and up styles
    },
    [theme.breakpoints.up('md')]: {
      //...md and up styles
    },
    '@media (min-width: 1320px)': {
      //...rules for above 1320px
    }
  },
  navContainer: {
    position: 'sticky',
    top: 58,
    zIndex: 10,
    marginTop: '-2.2rem'
  },
  navbar: {
    zIndex: 1,
    border: `2px solid ${theme.palette.secondary.dark}`,
    borderRadius: '1rem',
    // backgroundColor: '#F9F9F9',
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.down('md')]: {
      margin: '0 2rem'
    }
  },
  navList: {
    display: 'flex'
  },
  navItem: {
    flex: 1,
    position: 'relative',
    transition: 'all 0.3s',
    '& > ul': {
      position: 'absolute',
      top: '102%',
      left: -2
    },
    '&:hover > ul': {
      transform: 'translateY(0)',
      opacity: 1,
      pointerEvents: 'auto'
    },
    '&:hover': {
      '& > div': {
        backgroundColor: theme.palette.primary.light,
        cursor: 'pointer'
      },
      '& > a': {
        backgroundColor: theme.palette.primary.light
      }
    }
  },
  entertainmentLawItem: {
    flex: 1.3
  },
  navLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '1rem 0',
    height: '100%',
    color: theme.palette.secondary.main,
    borderRight: `2px solid ${theme.palette.secondary.dark}`,
    transition: 'color 0.3s'
  },
  lastNavLink: {
    borderRight: 'none'
  }
}))

const Navbar = props => {
  const classes = useStyles()

  return (
    <Container component='header' className={classes.navContainer}>
      <nav className={classes.navbar}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <AniLink cover bg='#663399' to={`/`} className={classes.navLink}>
              Home
            </AniLink>
          </li>
          <li className={classes.navItem}>
            <AniLink
              fade
              duration={1}
              to={`/about`}
              className={classes.navLink}
            >
              About
            </AniLink>
          </li>
          <li className={classes.navItem}>
            <div className={classes.navLink}>Business</div>
            <BusinessDropdown />
          </li>
          <li className={clsx(classes.navItem, classes.entertainmentLawItem)}>
            <div className={classes.navLink}>Entertainment</div>
            <EntertainmentDropdown />
          </li>
          <li className={classes.navItem}>
            <div className={classes.navLink}>Disputes</div>
            <DisputeDropdown />
          </li>
          <li className={classes.navItem}>
            <AniLink fade duration={1} to={`/blog`} className={classes.navLink}>
              Blog
            </AniLink>
          </li>
          <li className={classes.navItem}>
            <AniLink
              fade
              duration={1}
              to={`/careers`}
              className={classes.navLink}
            >
              Careers
            </AniLink>
          </li>
          <li className={classes.navItem}>
            <AniLink
              fade
              duration={1}
              to={`/contact`}
              className={classes.navLink}
            >
              Contact
            </AniLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Navbar

// import React, { useState, useRef, useEffect } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import { makeStyles, Box, Container, Grid, Hidden } from '@material-ui/core'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
// import throttle from 'lodash/throttle'
// import Toggle from './Toggle'
// // import NameDropdown from './NavLinks/NameDropdown'
// // import FaceEyesDropdown from './NavLinks/FaceEyesDropdown'
// // import BodyDropdown from './NavLinks/BodyDropdown'
// // import InjectablesDropdown from './NavLinks/InjectablesDropdown'
// // import LaserDropdown from './NavLinks/LaserDropdown'
// // import HairDropdown from './NavLinks/HairDropdown'
// // import PhotosDropdown from './NavLinks/PhotosDropdown'
// // import ContactDropdown from './NavLinks/ContactDropdown'
// import BusinessDropdown from './NavLinks/BusinessDropdown.jsx'
// import DisputeDropdown from './NavLinks/DisputeDropdown.jsx'
// import EntertainmentDropdown from './NavLinks/EntertainmentDropdown.jsx'

// const useStyles = makeStyles(theme => ({
//   navContainer: {
//     position: 'sticky',
//     top: 50,
//     zIndex: 10
//   },
//   navbar: {
//     zIndex: '1',
//     boxShadow: theme.shadows[2],
//     backgroundColor: theme.palette.primary.main,
//     borderRadius: 15,
//     border: `1px solid ${theme.palette.primary.main}`
//   },
//   mainNavUl: {
//     display: 'flex'
//   },
//   topNavLi: {
//     flex: 1,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//     '& > a': {
//       ...theme.custom.navLinkText,
//       padding: '1rem 0',
//       backgroundColor: 'white',
//       width: '100%',
//       textAlign: 'center',
//       borderRight: `1px solid ${theme.palette.primary.main}`
//     },
//     '&:first-of-type > a': {
//       borderTopLeftRadius: 13,
//       borderBottomLeftRadius: 13
//     },
//     '&:last-of-type > a': {
//       borderRight: 'none',
//       borderBottomRightRadius: 13,
//       borderTopRightRadius: 13
//     },
//     '&:hover > a': {
//       backgroundColor: theme.palette.common.navHoverColor,
//       color: 'white'
//     },
//     '&:hover > ul': {
//       transform: 'translateY(0)',
//       opacity: 1,
//       pointerEvents: 'auto'
//     }
//   },
//   topNavLink: {
//     '& + ul': {
//       position: 'absolute',
//       top: '102%',
//       left: -1
//     }
//   },
//   topNavLinkFaceEyes: {
//     '& +ul': {
//       position: 'absolute',
//       top: '102%',
//       left: '-111%',
//       [theme.breakpoints.down('lg')]: {
//         left: '-125%'
//       },
//       '@media (max-width:1095px)': {
//         left: '-202%'
//       }
//     }
//   },
//   topNavLinkHair: {
//     '& + ul': {
//       position: 'absolute',
//       top: '102%',
//       left: -1,
//       [theme.breakpoints.down('lg')]: {
//         left: '-10%'
//       }
//     }
//   },
//   topNavLinkPhotos: {
//     '& + ul': {
//       position: 'absolute',
//       top: '102%',
//       right: '-100%'
//     }
//   },
//   topNavLinkContact: {
//     '& + ul': {
//       position: 'absolute',
//       top: '102%',
//       right: '-11%'
//     }
//   }
// }))

// const Navbar = () => {
//   const classes = useStyles()
//   const navRef = useRef(null)

//   useEffect(() => {
//     const element = document.querySelector('.tl-edges')
//     element.style.overflowX = 'visible'
//   }, [])

//   return (
//     <Container className={classes.navContainer}>
//       <nav ref={navRef} className={classes.navbar}>
//         <ul className={classes.mainNavUl}>
//           <li className={classes.topNavLi}>
//             <AniLink cover bg='#663399' to={`/`}>
//               Home
//             </AniLink>
//           </li>

//           <li className={classes.topNavLi}>
//             <AniLink fade duration={1} to={`/about`}>
//               About
//             </AniLink>
//           </li>

//           <li className={classes.topNavLi}>
//             <AniLink fade duration={1} to={`/`} className={classes.topNavLink}>
//               Business Law
//             </AniLink>
//             <BusinessDropdown />
//           </li>

//           <li className={classes.topNavLi}>
//             <AniLink fade duration={1} to={`/`} className={classes.topNavLink}>
//               Entertainment Law
//             </AniLink>
//             <EntertainmentDropdown />
//           </li>

//           <li className={classes.topNavLi}>
//             <AniLink fade duration={1} to={`/`} className={classes.topNavLink}>
//               Business Disputes
//             </AniLink>
//             <DisputeDropdown />
//           </li>

//           <li className={classes.topNavLi}>
//             <AniLink fade duration={1} to={`/blog`}>
//               Blog
//             </AniLink>
//           </li>

//           <li className={classes.topNavLi}>
//             <AniLink fade duration={1} to={`/careers`}>
//               Careers
//             </AniLink>
//           </li>

//           <li className={classes.topNavLi}>
//             <AniLink fade duration={1} to={`/contact`}>
//               Contact
//             </AniLink>
//           </li>
//         </ul>
//       </nav>
//     </Container>
//   )
// }

// export default Navbar
