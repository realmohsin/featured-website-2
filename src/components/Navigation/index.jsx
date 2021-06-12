import React, { useState, useEffect } from 'react'
import { Hidden } from '@material-ui/core'
import Navbar from './Navbar'
import MobileCtaNavbar from './MobileCtaNavbar'
import SideDrawer from './SideDrawer/index.jsx'

const Navigation = ({ location }) => {
  const [showingSideDrawer, setShowingSideDrawer] = useState(false)

  // menu1 is /business/
  // menu2 is /entertainment/
  // menu3 is /business-disputes/
  const initialMenuState = {
    menu1: location.pathname.startsWith('/business/') ? true : false,
    menu2: location.pathname.startsWith('/entertainment/') ? true : false,
    menu3: location.pathname.startsWith('/business-disputes/') ? true : false
  }

  const [menuState, setMenuState] = React.useState(initialMenuState)

  const handleDropdownMenuClick = menuName => {
    setMenuState({ ...menuState, [menuName]: !menuState[menuName] })
  }

  useEffect(() => {
    if (showingSideDrawer) {
      document.body.style.position = 'fixed'
    } else {
      document.body.style.position = 'static'
    }
  }, [showingSideDrawer])

  const toggleSideDrawer = () => {
    // reset menu state to initial so sidedrawer opens to submenu showing
    setMenuState(initialMenuState)
    setShowingSideDrawer(showingSideDrawer => !showingSideDrawer)
  }

  const closeSideDrawer = () => setShowingSideDrawer(false)

  return (
    <>
      <Hidden smDown>
        <Navbar location={location} />
      </Hidden>
      <Hidden mdUp>
        <MobileCtaNavbar toggleSideDrawer={toggleSideDrawer} />
        <SideDrawer
          showing={showingSideDrawer}
          closeSideDrawer={closeSideDrawer}
          menuState={menuState}
          handleDropdownMenuClick={handleDropdownMenuClick}
          location={location}
        />
      </Hidden>
    </>
  )
}

export default Navigation
