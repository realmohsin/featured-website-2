import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container } from '@material-ui/core'
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa'

const useStyles = makeStyles(theme => ({
  footer: {
    padding: '8rem 0 12rem',
    textTransform: 'uppercase',
    color: theme.palette.common.goldVariant1,
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  leftSide: {
    padding: '0 5rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '3rem'
    }
  },
  middleSide: {
    padding: '0 6rem'
  },
  rightSide: {
    padding: '0 4rem'
  },
  addressTitle: {
    marginBottom: '1rem'
  },
  address: {
    marginBottom: '3rem'
  },
  joinOurTeam: {
    marginBottom: '6rem'
  },
  socialIconsTitle: {
    marginBottom: '2rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '7rem'
    }
  },
  socialIconsContainer: {
    width: '24rem',
    display: 'flex',
    paddingRight: '5rem',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      margin: '0rem auto 5rem',
      paddingRight: 0
    }
  },
  contactMessage: {
    marginBottom: '3rem',
    width: '24rem',
    [theme.breakpoints.down('xs')]: {
      width: 'auto'
    }
  },
  telephoneLink: {
    width: '22rem',
    border: `2px solid ${theme.palette.common.goldVariant1}`,
    padding: '0.8rem 0rem',
    textAlign: 'center',
    marginBottom: '5rem',
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto 5rem'
    }
  },
  helpLink: {
    marginBottom: '3rem',
    textDecoration: 'underline',
    fontSize: '0.95em'
  },
  blurb: {
    marginBottom: '3rem',
    fontSize: '1.2rem'
  },
  darkBg: {
    zIndex: -10
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <StaticImage
        src='../assets/images/dark-bg.gif'
        className={classes.darkBg}
      />
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} className={classes.leftSide}>
            <Typography variant='body1' className={classes.contactMessage}>
              Book an Appointment With one of our Lawyers:
            </Typography>
            <a href='tel:123-456-7890' className={classes.telephoneLink}>
              BOOK NOW
            </a>
            {/* <Typography variant='body1' className={classes.addressTitle}>
              Address
            </Typography> */}
            <Typography variant='body1' className={classes.address}>
              ROMANO LAW PLLC <br /> 55 BROAD STREET, 18TH FL. <br />
              NEW YORK, NY 10004
            </Typography>
            <div>
              <Typography variant='body1' className={classes.socialIconsTitle}>
                Get Social With Us
              </Typography>
              <div className={classes.socialIconsContainer}>
                <a href='https://facebook.com'>
                  <FaFacebook size='1.5em' title='Facebook icon link' />
                </a>

                <a href='https://twitter.com'>
                  <FaTwitter size='1.5em' title='Twitter icon link' />
                </a>

                <a href='https://youtube.com'>
                  <FaYoutube size='1.5em' title='Youtube icon link' />
                </a>

                <a href='https://instagram.com'>
                  <FaInstagram size='1.5em' title='Instagram icon link' />
                </a>

                <a href='https://linkedin.com'>
                  <FaLinkedin size='1.5em' title='Linkedin icon link' />
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.middleSide}>
            <Typography variant='body1' className={classes.contactMessage}>
              Contact an Experienced Business Lawyer Now:
            </Typography>
            <a href='tel:123-456-7890' className={classes.telephoneLink}>
              (123) 456-7890
            </a>
            <Typography variant='body1' className={classes.helpLink}>
              How Can We Help?
            </Typography>
            <Typography variant='body1' className={classes.helpLink}>
              Client Reviews
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} className={classes.rightSide}>
            <Typography variant='body2' className={classes.blurb}>
              OUR BUSINESS LAWYERS WORK WITH CLIENTS THROUGHOUT THE WORLD. IN
              NEW YORK, WE REPRESENT PEOPLE AND BUSINESSES BASED IN MANHATTAN,
              BROOKLYN, QUEENS, BRONX, STATEN ISLAND, LONG ISLAND, NASSAU,
              SUFFOLK, WESTCHESTER, UPSTATE AND WESTERN NEW YORK. OUR
              ENTERTAINMENT LAWYERS ALSO REPRESENT INDIVIDUALS AND ORGANIZATIONS
              LOCATED IN LOS ANGELES, TORONTO, LONDON, SYDNEY AND HONG KONG.
            </Typography>
            <Typography variant='body1'>
              ©2003–2020 ROMANO LAW PLLC. <br /> ALL RIGHTS RESERVED. NYC
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
