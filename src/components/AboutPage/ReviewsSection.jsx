import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container } from '@material-ui/core'
import Review from './Review'
import Button from '../Button'
import reviews from '../../data/reviews'

const useStyles = makeStyles(theme => ({
  teamSection: {
    padding: '6rem 0 12rem'
  },
  teamSectionTitle: {
    ...theme.custom.title2,
    textAlign: 'left',
    fontSize: '5.6rem',
    paddingLeft: '5rem',
    marginBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '4.6rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '4rem',
      paddingLeft: '1.2rem'
    }
  },
  moreReviewsButton: {
    margin: '3rem auto'
  }
}))

const ReviewsSection = () => {
  const classes = useStyles()

  const [moreOpen, setMoreOpen] = useState(false)

  const toggleOpenMore = e => {
    setMoreOpen(moreOpen => !moreOpen)
  }

  return (
    <section className={classes.teamSection}>
      <Container>
        <h2 className={classes.teamSectionTitle}>Reviews</h2>
        <Grid container>
          {reviews.slice(0, 6).map(review => (
            <Review review={review} />
          ))}
          {moreOpen &&
            reviews.slice(5, 11).map(review => <Review review={review} />)}
        </Grid>
        <Button
          handleClick={toggleOpenMore}
          extraClassName={classes.moreReviewsButton}
          text={`See ${moreOpen ? 'Less' : 'More'} Reviews`}
        />
      </Container>
    </section>
  )
}

export default ReviewsSection
