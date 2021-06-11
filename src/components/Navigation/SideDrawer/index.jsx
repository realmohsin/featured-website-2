import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles, Box } from '@material-ui/core'
import CSSTransition from 'react-transition-group/CSSTransition'
import Collapse from '@material-ui/core/Collapse'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import BusinessDropdown from '../NavLinks/BusinessDropdown'
import EntertainmentDropdown from '../NavLinks/EntertainmentDropdown'
import DisputeDropdown from '../NavLinks/DisputeDropdown'
import clsx from 'clsx'

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
  logoContainer: {
    padding: '7rem 8rem 4rem'
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
  },
  activeInSidedrawer: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.light,
    borderBottom: `0.5px solid ${theme.palette.primary.light}`
  }
}))

const SideDrawer = ({ showing, closeSideDrawer, location }) => {
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

  // const handleSubMenuClick = (e, menuName, subMenuName) => {
  //   e.stopPropagation()
  //   handleMenuClick(menuName, subMenuName)
  // }

  const sideDrawerClasses = [classes.sideDrawer]
  if (showing) {
    sideDrawerClasses.push('showing')
  }

  const createLinkClasses = href => {
    const classNames = [classes.link]
    if (href === location.pathname) {
      classNames.push(classes.activeInSidedrawer)
    }
    return clsx(...classNames)
  }
  return (
    <>
      <CSSTransition in={showing} unmountOnExit classNames='fade' timeout={500}>
        <div className={classes.backdrop} onClick={closeSideDrawer} />
      </CSSTransition>

      <div className={sideDrawerClasses.join(' ')}>
        <Box className={classes.logoContainer}>
          <StaticImage src='../../../assets/images/logo.png' alt='Logo' />
        </Box>

        <nav className={classes.sideDrawerNav}>
          <ul>
            <li>
              <Link to={`/`} className={classes.link}>
                Home
              </Link>
            </li>

            <li>
              <Link to={`/about`} className={createLinkClasses('/about')}>
                About
              </Link>
            </li>

            <li
              onClick={() => handleMenuClick('menu1')}
              className={classes.link}
            >
              Business Law
              {menuState.menu1 ? <FaAngleUp /> : <FaAngleDown />}
            </li>
            <Collapse in={menuState.menu1} timeout='auto' unmountOnExit>
              <BusinessDropdown inSideDrawer pathname={location.pathname} />
            </Collapse>

            <li
              onClick={() => handleMenuClick('menu2')}
              className={classes.link}
            >
              Entertainment Law
              {menuState.menu2 ? <FaAngleUp /> : <FaAngleDown />}
            </li>
            <Collapse in={menuState.menu2} timeout='auto' unmountOnExit>
              <EntertainmentDropdown
                inSideDrawer
                pathname={location.pathname}
              />
            </Collapse>

            <li
              onClick={() => handleMenuClick('menu3')}
              className={classes.link}
            >
              Disputes
              {menuState.menu3 ? <FaAngleUp /> : <FaAngleDown />}
            </li>
            <Collapse in={menuState.menu3} timeout='auto' unmountOnExit>
              <DisputeDropdown inSideDrawer pathname={location.pathname} />
            </Collapse>

            <li>
              <Link to={`/careers`} className={createLinkClasses('/careers')}>
                Careers
              </Link>
            </li>

            <li>
              <Link to={`/contact`} className={createLinkClasses('/contact')}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default SideDrawer
