import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { FaFacebook, FaStar } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const useStyles = makeStyles(theme => ({
  gridItem: {
    padding: '4.5rem 4rem',
    [theme.breakpoints.down('xs')]: {
      padding: '4rem 3.2rem'
    }
  },
  nameAndDate: {
    marginBottom: '0.6rem'
  },
  nameSpan: {
    color: theme.palette.primary.main
  },
  daysAgoSpan: {
    color: theme.palette.common.fadedTextColor
  },
  starsContainer: {
    display: 'flex',
    marginBottom: '1.8rem'
  },
  star: {
    marginRight: '0.3rem'
  },
  iconAndTextGrid: {
    display: 'flex'
  },
  text: {
    flex: 1,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem'
    }
  },
  platformIcon: {
    marginTop: '1rem',
    marginRight: '1.5rem'
  },
  readMoreOrLess: {
    cursor: 'pointer',
    color: theme.palette.primary.light,
    textDecoration: 'underline',
    transition: '0.3s all',
    '&:hover': {
      color: theme.palette.primary.dark
    }
  }
}))

const Review = ({ review }) => {
  const theme = useTheme()
  const classes = useStyles()

  const [opened, setOpened] = useState(false)

  const toggleOpen = e => {
    setOpened(opened => !opened)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleOpen(e)
    }
  }

  return (
    <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
      <Typography variant='body1' className={classes.nameAndDate}>
        <span className={classes.nameSpan}>{review.name},</span> &nbsp;
        <span className={classes.daysAgoSpan}>{review.daysAgo}</span>
      </Typography>
      <div className={classes.starsContainer}>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <FaStar
              key={index}
              className={classes.star}
              size='1.2em'
              color={
                theme.palette.common[
                  review.type === 'facebook'
                    ? 'facebookColor'
                    : 'googleStarColor'
                ]
              }
            />
          ))}
      </div>
      <div className={classes.iconAndTextGrid}>
        <div>
          {review.type === 'facebook' ? (
            <FaFacebook
              color={theme.palette.common.facebookColor}
              size='2.4em'
              className={classes.platformIcon}
            />
          ) : (
            <FcGoogle size='2.4em' className={classes.platformIcon} />
          )}
        </div>
        <Typography variant='body2' className={classes.text}>
          {opened ? review.content : review.content.slice(0, 201)}
          {!opened && '...'} &nbsp;
          <span 
            className={classes.readMoreOrLess} 
            onClick={toggleOpen}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
          >
            Read {opened ? 'Less' : 'More'}
          </span>
        </Typography>
      </div>
    </Grid>
  )
}

export default Review
