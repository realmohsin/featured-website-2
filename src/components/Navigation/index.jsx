import React, { useState, useEffect } from 'react'
import { Hidden } from '@material-ui/core'
import Navbar from './Navbar'
import MobileCtaNavbar from './MobileCtaNavbar'
// import SideDrawer from './SideDrawer/index.jsx'

const Navigation = props => {
  const [showingSideDrawer, setShowingSideDrawer] = useState(false)

  useEffect(() => {
    if (showingSideDrawer) {
      document.body.style.position = 'fixed'
    } else {
      document.body.style.position = 'static'
    }
  }, [showingSideDrawer])

  const toggleSideDrawer = () => {
    setShowingSideDrawer(showingSideDrawer => !showingSideDrawer)
  }

  const closeSideDrawer = () => setShowingSideDrawer(false)

  return (
    <>
      <Hidden smDown>
        <Navbar />
      </Hidden>
      <Hidden mdUp>
        <MobileCtaNavbar toggleSideDrawer={toggleSideDrawer} />
        {/* <SideDrawer
          showing={showingSideDrawer}
          closeSideDrawer={closeSideDrawer}
        /> */}
      </Hidden>
    </>
  )
}

export default Navigation
