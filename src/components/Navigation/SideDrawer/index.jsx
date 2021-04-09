import React from 'react'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { makeStyles, Box } from '@material-ui/core'
import CSSTransition from 'react-transition-group/CSSTransition'
import Collapse from '@material-ui/core/Collapse'

import clsx from 'clsx'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import BusinessDropdown from '../NavLinks/BusinessDropdown'
import EntertainmentDropdown from '../NavLinks/EntertainmentDropdown'
import DisputeDropdown from '../NavLinks/DisputeDropdown'

const useStyles = makeStyles(theme => ({
  sideDrawer: {
    position: 'fixed',
    width: '280px',
    maxWidth: '74%',
    height: '100%',
    left: 0,
    top: 0,
    backgroundColor: theme.palette.primary.dark,
    boxShadow: '3px 0px 10px 2px rgba(0, 0, 0, 0.4)',
    transition: 'transform 0.4s ease-out',
    transform: 'translateX(-104%)',
    zIndex: 102,
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    '&.showing': {
      transform: 'translateX(0)'
    },
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  backdrop: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    transition: 'all 0.5s',
    zIndex: 101,
    '&.fade-enter': {
      opacity: 0
    },
    '&.fade-enter-active': {
      opacity: 1
    },
    '&.fade-exit': {
      opacity: 1
    },
    '&.fade-exit-active': {
      opacity: 0
    }
  },
  sideDrawerNav: {
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },

  link: {
    color: theme.palette.primary.main,
    fontSize: '1.2rem',
    display: 'flex',
    height: '4rem',
    borderBottom: `0.5px solid #eee`,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontWeight: 'normal'
  },

  logo: {
    width: '22rem',
    margin: '0 auto'
  },
  subMenuUl: {
    boxShadow: 'inset 0 0 5px 2px rgba(0,0,0,.2)'
  },
  subMenuSectionLink: {
    // height: 'auto !important'
    paddingLeft: '3.6rem'
  }
}))

const SideDrawer = ({ showing, closeSideDrawer }) => {
  const classes = useStyles()

  const initialMenuState = {
    menu1: false,
    menu2: false,
    menu3: false
  }

  const [menuState, setMenuState] = React.useState(initialMenuState)

  const handleMenuClick = menuName => {
    setMenuState({ ...menuState, [menuName]: !menuState[menuName] })
  }

  const handleSubMenuClick = (e, menuName, subMenuName) => {
    e.stopPropagation()
    handleMenuClick(menuName, subMenuName)
  }

  const sideDrawerClasses = [classes.sideDrawer]
  if (showing) {
    sideDrawerClasses.push('showing')
  }
  return (
    <>
      <CSSTransition in={showing} unmountOnExit classNames='fade' timeout={500}>
        <div className={classes.backdrop} onClick={closeSideDrawer} />
      </CSSTransition>

      <div className={sideDrawerClasses.join(' ')}>
        <Box>
          <StaticImage src='../../../assets/images/logo.png' alt='Logo' />
          {/* <img src={logo} alt='logo' className={classes.logo} /> */}
        </Box>

        <nav className={classes.sideDrawerNav}>
          <ul>
            <li>
              <AniLink fade duration={1} to={`/`} className={classes.link}>
                Home
              </AniLink>
            </li>

            <li>
              <AniLink fade duration={1} to={`/about`} className={classes.link}>
                About
              </AniLink>
            </li>

            <li
              onClick={() => handleMenuClick('menu1')}
              className={classes.link}
            >
              Business
              {menuState.menu1 ? <FaAngleUp /> : <FaAngleDown />}
            </li>
            <Collapse in={menuState.menu1} timeout='auto' unmountOnExit>
              <BusinessDropdown inSideDrawer />
            </Collapse>

            <li
              onClick={() => handleMenuClick('menu2')}
              className={classes.link}
            >
              Entertainment
              {menuState.menu2 ? <FaAngleUp /> : <FaAngleDown />}
            </li>
            <Collapse in={menuState.menu2} timeout='auto' unmountOnExit>
              <EntertainmentDropdown inSideDrawer />
            </Collapse>

            <li
              onClick={() => handleMenuClick('menu3')}
              className={classes.link}
            >
              Disputes
              {menuState.menu3 ? <FaAngleUp /> : <FaAngleDown />}
            </li>
            <Collapse in={menuState.menu3} timeout='auto' unmountOnExit>
              <DisputeDropdown inSideDrawer />
            </Collapse>

            <li>
              <AniLink fade duration={1} to={`/blog`} className={classes.link}>
                Blog
              </AniLink>
            </li>

            <li>
              <AniLink
                fade
                duration={1}
                to={`/careers`}
                className={classes.link}
              >
                Careers
              </AniLink>
            </li>

            <li>
              <AniLink
                fade
                duration={1}
                to={`/contact`}
                className={classes.link}
              >
                Contact
              </AniLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default SideDrawer