import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import HtmlHead from './HtmlHead'
import StickyCTA from './Headers/StickyCTA'
import LogoHeader from './Headers/LogoHeader'
import Navigation from './Navigation'
import { Hidden } from '@material-ui/core'

const Layout = ({ title, description, children }) => {
  return (
    <>
      <HtmlHead title={title} description={description} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Hidden smDown>
          <StickyCTA />
        </Hidden>
        <LogoHeader />
        <Navigation />
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

export default Layout
