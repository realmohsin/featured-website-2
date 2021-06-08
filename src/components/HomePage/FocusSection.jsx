import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Typography, Hidden } from '@material-ui/core'
import Button from '../Button'

const useStyles = makeStyles(theme => ({
  focusSection: {
    padding: '12rem 0',
    [theme.breakpoints.down('xs')]: {
      padding: '8rem 0'
    }
  },
  focusTitle: {
    ...theme.custom.title2,
    [theme.breakpoints.down('xs')]: {
      fontSize: '3.4rem'
    }
  },
  row: {
    marginBottom: '5rem'
  },
  rowContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 5rem'
  },

  rowTitle: {
    ...theme.custom.title4,
    textAlign: 'center',
    marginBottom: '3rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
      marginBottom: '1.2rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.7rem'
    }
  },
  divider: {
    width: '100%',
    height: '2px',
    backgroundColor: theme.palette.secondary.main
  },
  rowParagraph: {
    margin: '4rem 0 8rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2rem'
    }
  },
  button: {
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      marginBottom: '6rem'
    }
  },
  rowImgContainer: {
    padding: '2.3rem'
  }
}))

const FocusSection = props => {
  const classes = useStyles()

  return (
    <section className={classes.focusSection}>
      <Container>
        <h2 className={classes.focusTitle}>Our Focus</h2>
        <Grid container className={classes.row}>
          <Grid item xs={12} md={5} className={classes.rowContent}>
            <h3 className={classes.rowTitle}>Business Law</h3>
            <div className={classes.divider} />
            <Typography variant='body1' className={classes.rowParagraph}>
              From startups to larger corporations, we provide a range of legal
              services to help your business grow.
            </Typography>
            <Hidden mdDown>
              <Button
                isLink
                text='Learn More'
                extraClassName={classes.button}
                href='/business/small-business-law'
              />
            </Hidden>
          </Grid>
          <Grid item xs={12} md={7} className={classes.rowImgContainer}>
            {/* <Img fluid={data.focus1.childImageSharp.fluid} alt='Business Law' /> */}
            <StaticImage
              src='../../assets/images/focus-1.jpg'
              alt='Business Law'
            />
          </Grid>
          <Hidden mdUp>
            <Button
              isLink
              text='Learn More'
              extraClassName={classes.button}
              href='/business/small-business-law'
            />
          </Hidden>
        </Grid>

        <Grid container className={classes.row}>
          <Hidden mdUp>
            <Grid item xs={12} md={5} className={classes.rowContent}>
              <h3 className={classes.rowTitle}>Entertainment Law</h3>
              <div className={classes.divider} />
              <Typography variant='body1' className={classes.rowParagraph}>
                We’re here to provide guidance to production companies,
                producers, talent and other industry professionals as you build
                your career.
              </Typography>
              <Hidden mdDown>
                <Button
                  isLink
                  text='Learn More'
                  extraClassName={classes.button}
                  href='/entertainment/trademark-law'
                />
              </Hidden>
            </Grid>
          </Hidden>

          <Grid item xs={12} md={7} className={classes.rowImgContainer}>
            <StaticImage
              src='../../assets/images/focus-2.jpg'
              alt='Entertainment Law'
            />
          </Grid>

          <Hidden mdUp>
            <Button
              isLink
              text='Learn More'
              extraClassName={classes.button}
              href='/entertainment/trademark-law'
            />
          </Hidden>

          <Hidden mdDown>
            <Grid item xs={12} md={5} className={classes.rowContent}>
              <h3 className={classes.rowTitle}>Entertainment Law</h3>
              <div className={classes.divider} />
              <Typography variant='body1' className={classes.rowParagraph}>
                We’re here to provide guidance to production companies,
                producers, talent and other industry professionals as you build
                your career.
              </Typography>
              <Button
                isLink
                text='Learn More'
                extraClassName={classes.button}
                href='/entertainment/trademark-law'
              />
            </Grid>
          </Hidden>
        </Grid>

        <Grid container className={classes.row}>
          <Grid item xs={12} md={5} className={classes.rowContent}>
            <h3 className={classes.rowTitle}>Business Disputes</h3>
            <div className={classes.divider} />
            <Typography variant='body1' className={classes.rowParagraph}>
              Our experienced team of attorneys can help you navigate a
              disagreement, business divorce or recover a debt. We can assist
              with the litigation or defense of commercial matters in state,
              federal bankruptcy, federal district and federal appellate courts.
            </Typography>

            <Hidden mdDown>
              <Button
                isLink
                text='Learn More'
                extraClassName={classes.button}
                href='/business-disputes/arbitration'
              />
            </Hidden>
          </Grid>
          <Grid item xs={12} md={7} className={classes.rowImgContainer}>
            <StaticImage
              src='../../assets/images/focus-3.jpg'
              alt='Business Disputes'
            />
          </Grid>

          <Hidden mdUp>
            <Button
              isLink
              text='Learn More'
              extraClassName={classes.button}
              href='/business-disputes/arbitration'
            />
          </Hidden>
        </Grid>
      </Container>
    </section>
  )
}

export default FocusSection
