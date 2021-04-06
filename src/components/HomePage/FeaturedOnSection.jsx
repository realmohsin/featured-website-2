import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  featuredOnSection: {
    padding: '12rem 0',
    backgroundColor: 'white'
  },
  featuredOnTitle: {
    ...theme.custom.title3,
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '3.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  featuredGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    rowGap: '3rem',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(4, 1fr)'
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  featuredCompanyImg: {
    width: '19.1rem'
  },
  divider: {
    width: '100%',
    height: '2px',
    backgroundColor: theme.palette.secondary.main,
    marginBottom: '2rem'
  },
  bottomDivider: {
    marginTop: '8rem'
  },
  recognitionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    rowGap: '3rem',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  },
  superLawyersImg: {
    width: '19.1rem'
  }
}))

const FeaturedOnSection = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      featured: allFile(filter: { name: { regex: "/^featured-/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      recognition: allFile(filter: { name: { regex: "/^recognition-/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      # recognition1: file(name: { eq: "recognition-1" }) {
      #   childImageSharp {
      #     fixed(width: 142, height: 136) {
      #       ...GatsbyImageSharpFixed
      #     }
      #   }
      # }
      # recognition2: file(name: { eq: "recognition-2" }) {
      #   childImageSharp {
      #     fixed(width: 156, height: 124) {
      #       ...GatsbyImageSharpFixed
      #     }
      #   }
      # }
      # recognition3: file(name: { eq: "recognition-3" }) {
      #   childImageSharp {
      #     fluid(maxWidth: 220) {
      #       ...GatsbyImageSharpFluid
      #     }
      #   }
      # }
      # recognition4: file(name: { eq: "recognition-4" }) {
      #   childImageSharp {
      #     fluid(maxWidth: 220) {
      #       ...GatsbyImageSharpFluid
      #     }
      #   }
      # }
    }
  `)

  console.log(data)

  return (
    <section className={classes.featuredOnSection}>
      <Container>
        <div className={classes.divider} />
        <h2 className={classes.featuredOnTitle}>Featured On</h2>
        <div className={classes.featuredGrid}>
          {data.featured.nodes.map((node, i) => (
            <GatsbyImage
              image={getImage(node.childImageSharp)}
              alt='Featured In'
              className={classes.featuredCompanyImg}
            />
          ))}
        </div>
        <div className={clsx(classes.divider, classes.bottomDivider)} />
        <h2 className={classes.featuredOnTitle}>Recognition</h2>
        <div className={classes.recognitionGrid}>
          {data.recognition.nodes.map((node, i) => (
            <div className={classes.gridItem}>
              <GatsbyImage
                image={getImage(node.childImageSharp)}
                alt='Recognition Award'
                className={classes.featuredCompanyImg}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturedOnSection
