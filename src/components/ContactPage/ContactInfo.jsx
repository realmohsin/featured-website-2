import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Container, Grid, Typography } from '@material-ui/core'
import { FaPhone } from 'react-icons/fa'

const useStyles = makeStyles(theme => ({
  contactSection: {
    padding: '4rem 0 10rem',
    [theme.breakpoints.down('md')]: {
      padding: '0rem 0 10rem'
    }
  },
  leftSide: {
    paddingLeft: '11rem',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      paddingLeft: 0
    }
  },
  rightSide: {
    paddingLeft: '10rem',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      paddingLeft: 0
    }
  },
  // contactTitle: {
  //   ...theme.custom.title2,
  //   marginBottom: '4rem'
  // },
  contactTitle: {
    ...theme.custom.title2,
    textAlign: 'left',
    fontSize: '5.6rem',
    paddingLeft: '11rem',
    marginBottom: '4rem',
    marginTop: '3rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '4rem',
      paddingLeft: 0,
      textAlign: 'center',
      marginTop: 0
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '3rem'
    }
  },
  subsectionTitle: {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '1.4rem',
    marginBottom: '1.4rem',
    color: theme.palette.secondary.main
  },
  daysTitle: {
    color: theme.palette.secondary.main,
    fontSize: '2rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.8rem'
    }
  },
  timesAndAddress: {
    color: theme.palette.primary.main,
    fontSize: '2.4rem',
    marginBottom: '5rem',
    lineHeight: '1.4',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.1rem'
    }
  },
  telephoneNumber: {
    width: 'max-content',
    padding: '0.3rem 2.5rem',
    border: `2px solid ${theme.palette.secondary.main}`,
    fontSize: '3rem',
    marginBottom: '6rem',
    color: theme.palette.primary.main,
    letterSpacing: '0.7px',
    transition: '0.3s all',
    '&:hover': {
      color: theme.palette.primary.dark
    },
    [theme.breakpoints.down('md')]: {
      margin: '6rem auto 2rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem'
    }
  },
  phoneIcon: {
    marginRight: '1.2rem',
    transform: 'translateY(5px)'
  },
  contactMessage: {
    color: theme.palette.primary.main,
    fontSize: '1.9rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '10rem'
    }
  },
  outsideLink: {
    display: 'inline',
    color: theme.palette.secondary.main,
    margin: '0 0.3rem'
  },
  addressSubtitle: {
    fontSize: '1.6rem',
    color: theme.palette.primary.main,
    marginTop: '-3.6rem',
    marginBottom: '8rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '-1rem'
    }
  },
  subwayStopLi: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.3rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: '25%'
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '5%'
    }
  },
  subwayDirections: {
    fontSize: '2.3rem',
    color: theme.palette.primary.main,
    marginBottom: '3rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.6rem'
    }
  },
  subwayStopText: {
    color: theme.palette.primary.main,
    marginLeft: '1.8rem',
    fontSize: '2rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.6rem'
    }
  },
  singleTrainText: {
    marginLeft: '6.2rem'
  },
  subwayIcon: {
    borderRadius: '50%',
    margin: '0 0.5rem',
    color: 'white',
    fontWeight: 'bold',
    width: '3.4rem',
    height: '3.4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem'
  }
}))

const SubwayIcon = ({ symbol, color }) => {
  const classes = useStyles()
  return (
    <span className={classes.subwayIcon} style={{ backgroundColor: color }}>
      {symbol}
    </span>
  )
}

const ContactSection = props => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <section className={classes.contactSection}>
      <Container>
        <h1 className={classes.contactTitle}>Contact Romano Law</h1>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.leftSide}>
            <Typography variant='body1' className={classes.subsectionTitle}>
              Hours
            </Typography>
            <Typography variant='body1' className={classes.daysTitle}>
              Mondays through Friday:
            </Typography>
            <Typography variant='body1' className={classes.timesAndAddress}>
              9:00AM - 7:00PM
            </Typography>
            <Typography variant='body1' className={classes.daysTitle}>
              Saturday:
            </Typography>
            <Typography variant='body1' className={classes.timesAndAddress}>
              9:00AM - 7:00PM
            </Typography>
            <a className={classes.telephoneNumber}>
              <FaPhone
                color={theme.palette.secondary.main}
                className={classes.phoneIcon}
              />
              (212) 865 - 9848
            </a>
            <Typography variant='body1' className={classes.contactMessage}>
              Click
              <a href='https://calendly.com/' className={classes.outsideLink}>
                HERE
              </a>
              to schedule a complimentary call.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={classes.rightSide}>
            <Typography variant='body1' className={classes.subsectionTitle}>
              Address
            </Typography>
            <Typography variant='body1' className={classes.timesAndAddress}>
              Romano Law PLLC <br />
              55 Broad Street, 18th Fl. <br />
              New York, NY 10004
            </Typography>
            <Typography variant='body1' className={classes.addressSubtitle}>
              For directions click{' '}
              <a href='https://google.com/maps' className={classes.outsideLink}>
                HERE
              </a>
            </Typography>
            <Typography variant='body1' className={classes.subsectionTitle}>
              Subway Stops
            </Typography>
            <Typography variant='body1' className={classes.subwayDirections}>
              We are located in the Financial District of New York City, two
              blocks south of Wall Street.
            </Typography>
            <ul className={classes.subwayStopsUL}>
              <li className={classes.subwayStopLi}>
                <SubwayIcon color='#ee352e' symbol={2} />
                <SubwayIcon color='#ee352e' symbol={3} />
                <Typography variant='body1' className={classes.subwayStopText}>
                  Wall St.
                </Typography>
              </li>
              <li className={classes.subwayStopLi}>
                <SubwayIcon color='#00933c' symbol={4} />
                <SubwayIcon color='#00933c' symbol={5} />
                <Typography variant='body1' className={classes.subwayStopText}>
                  Bowling Green (or Wall)
                </Typography>
              </li>
              <li className={classes.subwayStopLi}>
                <SubwayIcon color='#996633' symbol={'J'} />
                <SubwayIcon color='#996633' symbol={'Z'} />
                <Typography variant='body1' className={classes.subwayStopText}>
                  Broad St.
                </Typography>
              </li>
              <li className={classes.subwayStopLi}>
                <SubwayIcon color='#fccc0a' symbol={'R'} />
                <SubwayIcon color='#fccc0a' symbol={'W'} />
                <Typography variant='body1' className={classes.subwayStopText}>
                  Rector St. (or Whitehall)
                </Typography>
              </li>
              <li className={classes.subwayStopLi}>
                <SubwayIcon color='#ee352e' symbol={1} />
                <Typography
                  variant='body1'
                  className={clsx(
                    classes.subwayStopText,
                    classes.singleTrainText
                  )}
                >
                  Rector St. (or South Ferry)
                </Typography>
              </li>
              <li className={classes.subwayStopLi}>
                <SubwayIcon color='#0039a6' symbol={'A'} />
                <SubwayIcon color='#0039a6' symbol={'C'} />
                <Typography variant='body1' className={classes.subwayStopText}>
                  Fulton St.
                </Typography>
              </li>
              <li className={classes.subwayStopLi}>
                <SubwayIcon color='#0039a6' symbol={'E'} />

                <Typography
                  variant='body1'
                  className={clsx(
                    classes.subwayStopText,
                    classes.singleTrainText
                  )}
                >
                  World Trade Center
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default ContactSection
