import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import teamMembers from '../../data/team-members'

const useStyles = makeStyles(theme => ({
  teamSection: {
    padding: '4rem 0 10rem',
    [theme.breakpoints.down('xs')]: {
      padding: '4rem 0 6rem'
    }
  },
  teamSectionTitle: {
    ...theme.custom.title2,
    textAlign: 'left',
    paddingLeft: '5rem',
    fontSize: '5.6rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '4.6rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '3.4rem',
      paddingLeft: '3.5rem',
      marginBottom: '2rem'
    }
  },
  gridItem: {
    padding: '2.5rem',
    [theme.breakpoints.down('xs')]: {
      padding: '2.2rem 3.5rem'
    }
  },
  name: {
    ...theme.custom.title5,
    letterSpacing: '0.7px',
    marginTop: '1rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: 0
    }
  },
  title: {
    // textTransform: 'uppercase',
    fontSize: '1.4rem'
  }
}))

const TeamSection = props => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { regex: "/^legal-team/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  return (
    <section className={classes.teamSection}>
      <Container>
        <h2 className={classes.teamSectionTitle}>Legal Team</h2>
        <Grid container>
          {teamMembers.map(({ id, name, title }, i) => (
            <Grid key={id} item xs={12} sm={6} md={4} className={classes.gridItem}>
              <figure>
                <GatsbyImage
                  image={getImage(data.allFile.nodes[i].childImageSharp)}
                  alt='Business Law'
                />
                <figcaption>
                  <Typography
                    variant='body1'
                    className={classes.name}
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant='body1'
                    className={classes.title}
                  >
                    {title}
                  </Typography>
                </figcaption>
              </figure>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default TeamSection
