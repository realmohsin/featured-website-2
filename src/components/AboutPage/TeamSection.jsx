import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import teamMembers from '../../data/team-members'

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
  teamSection: {
    padding: '4rem 0 10rem'
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
      fontSize: '4rem',
      paddingLeft: '3.5rem'
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
    marginTop: '1rem'
  },
  title: {
    // textTransform: 'uppercase',
    fontSize: '1.4rem'
  }
}))

const TeamSection = props => {
  const theme = useTheme()
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
            <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
              <figure>
                <GatsbyImage
                  image={getImage(data.allFile.nodes[i].childImageSharp)}
                  alt='Business Law'
                />
                <figcaption>
                  <Typography
                    variant='body1'
                    marginBottom
                    className={classes.name}
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant='body1'
                    marginBottom
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
