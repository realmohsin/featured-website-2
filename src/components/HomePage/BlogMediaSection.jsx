import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Container } from '@material-ui/core'
import Button from '../Button'

const useStyles = makeStyles(theme => ({
  example: {
    // ...mobile first styles,
    [theme.breakpoints.up('sm')]: {
      //...sm and up styles
    },
    [theme.breakpoints.up('md')]: {
      //...md and up styles
    },
    '@media (min-width: 1320px)': {
      //...rules for above 1320px
    }
  },
  blogMediaSection: {
    padding: '10rem 0 12rem',
    height: '122rem'
  },
  titleList: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    ...theme.custom.title2,
    margin: '0 3rem',
    cursor: 'pointer',
    color: '#B2D1D2',
    transition: 'all 0.3s'
  },
  activeTitle: {
    color: theme.palette.primary.main,
    textDecoration: 'underline'
  },
  hiddenTitle: {
    fontSize: 0,
    position: 'absolute',
    left: '-5000px'
  },
  contentContainer: {
    position: 'relative'
  },
  blogSection: {
    position: 'absolute',
    opacity: 0,
    transform: 'scale(0.5)',
    transition: 'all 0.3s',
    width: '100%'
  },
  mediaSection: {
    position: 'absolute',
    opacity: 0,
    transform: 'scale(0.5)',
    transition: 'all 0.3s',
    width: '100%'
  },
  activeSection: {
    opacity: 1,
    transform: 'scale(1)'
  },
  blogItem: {
    padding: '3rem 6rem 7rem'
  },
  itemDate: {
    color: theme.palette.primary.main,
    marginBottom: '1.2rem'
  },
  blogItemTitle: {
    ...theme.custom.title3,
    marginBottom: '2.5rem',
    fontSize: '2.6rem',
    color: theme.palette.secondary.dark,
    cursor: 'pointer' // remove after turning into link
  },
  blogItemContent: {
    marginBottom: '0.7rem',
    fontSize: '1.5rem'
  },
  blogItemReadMore: {
    color: theme.palette.primary.main,
    cursor: 'pointer' // remove after turning into link
  },
  button: {
    margin: '3rem auto'
  },
  mediaItem: {
    padding: '3rem 4rem 3rem'
  },
  leftMediaItem: {
    paddingLeft: '8rem'
  },
  rightMediaItem: {
    paddingRight: '8rem'
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%', // for youtube embeds,
    marginBottom: '1.6rem'
  },
  iframeYT: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%'
  },
  mediaItemTitle: {
    ...theme.custom.title5,
    color: theme.palette.secondary.dark,
    letterSpacing: '0.2px',
    marginTop: '-0.75rem'
  }
}))

const BlogMediaSection = props => {
  const theme = useTheme()
  const classes = useStyles()

  const [sectionType, setSectionType] = useState('blog')

  const handleSectionType = type => {
    setSectionType(type)
  }

  const blogSection = (
    <div
      className={clsx(
        classes.blogSection,
        sectionType === 'blog' && classes.activeSection
      )}
    >
      <h2 className={classes.hiddenTitle}>Blog</h2>
      <Grid container>
        <Grid item xs={12} md={6} className={classes.blogItem}>
          <p className={classes.itemDate}>
            <time>03.30.20</time>
          </p>
          <h5 className={classes.blogItemTitle}>
            Are You an Employer Covered by the WARN Act? Three Questions to
            Consider.
          </h5>
          <p className={classes.blogItemContent}>
            As the current coronavirus crisis unfolds, many employers are forced
            to consider laying off their staff, particularly those in the
            hospitality, wellness and event industries. Before you alert your
            team to the new reality, employers should determine whether they are
            covered by federal and state-level WARN laws. For background,
            Congress passed the WARN Act in the
          </p>
          <p className={classes.blogItemReadMore}>(read more...)</p>
        </Grid>
        <Grid item xs={12} md={6} className={classes.blogItem}>
          <p className={classes.itemDate}>
            <time>03.30.20</time>
          </p>
          <h5 className={classes.blogItemTitle}>
            Are You an Employer Covered by the WARN Act? Three Questions to
            Consider.
          </h5>
          <p className={classes.blogItemContent}>
            As the current coronavirus crisis unfolds, many employers are forced
            to consider laying off their staff, particularly those in the
            hospitality, wellness and event industries. Before you alert your
            team to the new reality, employers should determine whether they are
            covered by federal and state-level WARN laws. For background,
            Congress passed the WARN Act in the
          </p>
          <p className={classes.blogItemReadMore}>(read more...)</p>
        </Grid>
        <Grid item xs={12} md={6} className={classes.blogItem}>
          <p className={classes.itemDate}>
            <time>03.30.20</time>
          </p>
          <h5 className={classes.blogItemTitle}>
            Are You an Employer Covered by the WARN Act? Three Questions to
            Consider.
          </h5>
          <p className={classes.blogItemContent}>
            As the current coronavirus crisis unfolds, many employers are forced
            to consider laying off their staff, particularly those in the
            hospitality, wellness and event industries. Before you alert your
            team to the new reality, employers should determine whether they are
            covered by federal and state-level WARN laws. For background,
            Congress passed the WARN Act in the
          </p>
          <p className={classes.blogItemReadMore}>(read more...)</p>
        </Grid>
        <Grid item xs={12} md={6} className={classes.blogItem}>
          <p className={classes.itemDate}>
            <time>03.30.20</time>
          </p>
          <h5 className={classes.blogItemTitle}>
            Are You an Employer Covered by the WARN Act? Three Questions to
            Consider.
          </h5>
          <p className={classes.blogItemContent}>
            As the current coronavirus crisis unfolds, many employers are forced
            to consider laying off their staff, particularly those in the
            hospitality, wellness and event industries. Before you alert your
            team to the new reality, employers should determine whether they are
            covered by federal and state-level WARN laws. For background,
            Congress passed the WARN Act in the
          </p>
          <p className={classes.blogItemReadMore}>(read more...)</p>
        </Grid>
      </Grid>
      <Button isLink text='Visit Our Blog' extraClassName={classes.button} />
    </div>
  )

  const mediaSection = (
    <div
      className={clsx(
        classes.mediaSection,
        sectionType === 'media' && classes.activeSection
      )}
    >
      <h2 className={classes.hiddenTitle}>Media</h2>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          className={clsx(classes.mediaItem, classes.leftMediaItem)}
        >
          <div className={classes.videoContainer}>
            <iframe
              title=''
              src='https://www.youtube.com/embed/Bva8ARJrCog'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
              className={classes.iframeYT}
            />
          </div>
          <p className={classes.itemDate}>
            <time>11.07.19</time>
          </p>
          <h5 className={classes.mediaItemTitle}>
            DOMENIC ROMANO ON FOX BUSINESS NEWS – TRUMP ORDERS US COMPANIES OUT
            OF CHINA – 8/23/2019
          </h5>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className={clsx(classes.mediaItem, classes.rightMediaItem)}
        >
          <div className={classes.videoContainer}>
            <iframe
              title=''
              src='https://www.youtube.com/embed/Bva8ARJrCog'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
              className={classes.iframeYT}
            />
          </div>
          <p className={classes.itemDate}>
            <time>11.07.19</time>
          </p>
          <h5 className={classes.mediaItemTitle}>
            DOMENIC ROMANO ON FOX BUSINESS NEWS – TRUMP ORDERS US COMPANIES OUT
            OF CHINA – 8/23/2019
          </h5>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className={clsx(classes.mediaItem, classes.leftMediaItem)}
        >
          <div className={classes.videoContainer}>
            <iframe
              title=''
              src='https://www.youtube.com/embed/Bva8ARJrCog'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
              className={classes.iframeYT}
            />
          </div>
          <p className={classes.itemDate}>
            <time>11.07.19</time>
          </p>
          <h5 className={classes.mediaItemTitle}>
            DOMENIC ROMANO ON FOX BUSINESS NEWS – TRUMP ORDERS US COMPANIES OUT
            OF CHINA – 8/23/2019
          </h5>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className={clsx(classes.mediaItem, classes.rightMediaItem)}
        >
          <div className={classes.videoContainer}>
            <iframe
              title=''
              src='https://www.youtube.com/embed/Bva8ARJrCog'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
              className={classes.iframeYT}
            />
          </div>
          <p className={classes.itemDate}>
            <time>11.07.19</time>
          </p>
          <h5 className={classes.mediaItemTitle}>
            DOMENIC ROMANO ON FOX BUSINESS NEWS – TRUMP ORDERS US COMPANIES OUT
            OF CHINA – 8/23/2019
          </h5>
        </Grid>
      </Grid>
      <Button
        isLink
        text='Visit our Media Page'
        extraClassName={classes.button}
      />
    </div>
  )

  return (
    <section className={classes.blogMediaSection}>
      <Container>
        <header>
          <ul className={classes.titleList}>
            <li
              onClick={e => handleSectionType('blog')}
              className={clsx(
                classes.title,
                sectionType === 'blog' && classes.activeTitle
              )}
            >
              Blog
            </li>
            <li
              onClick={e => handleSectionType('media')}
              className={clsx(
                classes.title,
                sectionType === 'media' && classes.activeTitle
              )}
            >
              Media
            </li>
          </ul>
        </header>
        <div className={classes.contentContainer}>
          {blogSection}
          {mediaSection}
        </div>
      </Container>
    </section>
  )
}

export default BlogMediaSection
