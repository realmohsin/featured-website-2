import React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import BusinessDropdown from './NavLinks/BusinessDropdown'
import EntertainmentDropdown from './NavLinks/EntertainmentDropdown'
import DisputeDropdown from './NavLinks/DisputeDropdown'

const useStyles = makeStyles(theme => ({
  navContainer: {
    position: 'sticky',
    top: 53,
    zIndex: 10,
    marginTop: '-3.8rem'
  },
  navbar: {
    zIndex: 1,
    border: `2px solid ${theme.palette.secondary.dark}`,
    borderRadius: '1rem',
    // backgroundColor: '#F9F9F9',
    backgroundColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[6],
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
  active: {
    '& > div': {
      backgroundColor: theme.palette.primary.light
    },
    '& > a': {
      backgroundColor: theme.palette.primary.light
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
    padding: '0.75rem 0',
    height: '100%',
    color: theme.palette.secondary.main,
    borderRight: `2px solid ${theme.palette.secondary.dark}`,
    transition: 'color 0.3s',
    fontSize: '1.3rem'
  },
  lastNavLink: {
    borderRight: 'none'
  }
}))

const Navbar = ({ location }) => {
  const classes = useStyles()

  const pathname = location.pathname

  return (
    <Container component='header' className={classes.navContainer}>
      <nav className={classes.navbar}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link to={`/`} className={classes.navLink}>
              Home
            </Link>
          </li>
          <li
            className={clsx(
              classes.navItem,
              pathname === '/about' && classes.active
            )}
          >
            <Link to={`/about`} className={classes.navLink}>
              About
            </Link>
          </li>
          <li
            className={clsx(
              classes.navItem,
              pathname.startsWith('/business/') && classes.active
            )}
          >
            <div className={classes.navLink}>Business Law</div>
            <BusinessDropdown pathname={pathname} />
          </li>
          <li
            className={clsx(
              classes.navItem,
              classes.entertainmentLawItem,
              pathname.startsWith('/entertainment/') && classes.active
            )}
          >
            <div className={classes.navLink}>Entertainment Law</div>
            <EntertainmentDropdown pathname={pathname} />
          </li>
          <li
            className={clsx(
              classes.navItem,
              pathname.startsWith('/business-disputes/') && classes.active
            )}
          >
            <div className={classes.navLink}>Disputes</div>
            <DisputeDropdown pathname={pathname} />
          </li>
          <li
            className={clsx(
              classes.navItem,
              pathname === '/careers' && classes.active
            )}
          >
            <Link to={`/careers`} className={classes.navLink}>
              Careers
            </Link>
          </li>
          <li
            className={clsx(
              classes.navItem,
              pathname === '/contact' && classes.active
            )}
          >
            <Link to={`/contact`} className={classes.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Navbar
