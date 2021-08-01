// import React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'
// import { makeStyles } from '@material-ui/core/styles'
// import { Container, Grid, Typography } from '@material-ui/core'

// const useStyles = makeStyles(theme => ({
//   introSection: {
//     padding: '12rem',
//     background: `radial-gradient(circle, rgba(239,249,249, 0.9) 0%, rgba(255, 255, 255, 0.4) 100%)`,
//     position: 'relative',
//     '& .gatsby-image-wrapper-constrained': {
//       position: 'absolute',
//       top: 0,
//       bottom: 0,
//       right: 0,
//       left: 0155049
//     },
//     [theme.breakpoints.down('md')]: {
//       padding: '12rem 9rem'
//     },
//     [theme.breakpoints.down('xs')]: {
//       padding: '11rem 5rem'
//     }
//   },
//   introTitle: {
//     ...theme.custom.title2
//   },
//   introSecondaryTitle: {
//     ...theme.custom.title3
//   },
//   introGrid: {},
//   firstGridItem: {
//     paddingLeft: '4rem',
//     paddingRight: '5rem',
//     [theme.breakpoints.down('md')]: {
//       paddingLeft: 0
//     },
//     [theme.breakpoints.down('sm')]: {
//       marginBottom: '8rem'
//     },
//     [theme.breakpoints.down('xs')]: {
//       textAlign: 'center',
//       paddingRight: 0
//     }
//   },
//   secondGridItem: {
//     paddingLeft: '7rem',
//     paddingRight: '7rem',
//     '@media (max-width: 1520px)': {
//       paddingLeft: '3rem',
//       paddingRight: 0
//     },
//     [theme.breakpoints.down('md')]: {
//       paddingLeft: 0,
//       paddingRight: 0
//     }
//   },
//   paragraph: {
//     marginBottom: '2.5rem'
//   },
//   highlightedText: {
//     color: theme.palette.secondary.main,
//     letterSpacing: '0.7px',
//     fontWeight: 'normal'
//   },
//   symbolDivider: {
//     width: '3.5rem',
//     height: '2px',
//     backgroundColor: theme.palette.secondary.main,
//     marginBottom: '2rem'
//   },
//   lightBg: {
//     zIndex: -10
//   }
// }))

// const IntroSection = () => {
//   const classes = useStyles()

//   return (
//     <section className={classes.introSection}>
//       <StaticImage
//         src='../../assets/images/light-bg.png'
//         className={classes.lightBg}
//       />
//       <Container>
//         <h2 className={classes.introTitle}>Innovative Legal Counsel</h2>
//         <Grid container className={classes.introGrid}>
//           <Grid item xs={12} md={6} className={classes.firstGridItem}>
//             <h3 className={classes.introSecondaryTitle}>
//               For Businesses, Professionals & Creative People
//             </h3>
//           </Grid>
//           <Grid item xs={12} md={6} className={classes.secondGridItem}>
//             <div className={classes.symbolDivider} />
//             <Typography variant='body1' className={classes.paragraph}>
//               <strong className={classes.highlightedText}>
//                 BASED IN NEW YORK CITY
//               </strong>
//               , Romano Law is a cutting edge firm, with a passion for making a
//               difference in our clients’ lives.
//             </Typography>
//             <Typography variant='body1' className={classes.paragraph}>
//               Our legal team takes pride in developing meaningful relationships
//               with our clients. Our mission is to deliver cost-effective and
//               efficient solutions to help you or your company thrive.
//             </Typography>
//             <Typography variant='body1' className={classes.paragraph}>
//               We’re more than just attorneys – we’re trusted advisors. We love
//               what we do.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </section>
//   )
// }

// export default IntroSection

import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid, Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  aboutSection: {
    padding: "3rem 0 12rem",
    background: `radial-gradient(circle, rgba(239,249,249, 0.9) 0%, rgba(255, 255, 255, 0.1) 100%)`,
    position: "relative",
  },
  lightBg: {
    position: "absolute !important",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -10,
    "& img": {
      objectFit: "cover",
    },
  },
  symbolDivider: {
    width: "3.5rem",
    height: "2px",
    backgroundColor: theme.palette.secondary.main,
    margin: "10rem 0 2rem",
    [theme.breakpoints.down("xs")]: {
      margin: "4rem 0 2rem",
    },
  },
  aboutTitle: {
    ...theme.custom.title2,
    textAlign: "left",
    fontSize: "5.8rem",
    paddingLeft: "5rem",
    marginBottom: "4rem",
    marginTop: "0rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "4.6rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.4rem",
      paddingLeft: "1.2rem",
      marginBottom: "3rem",
    },
  },
  aboutSubTitle: {
    ...theme.custom.title3,
    // ...theme.custom.outlineTitle,
    marginBottom: "3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.1rem",
    },
  },
  gridItem: {
    padding: "0 5rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0 1.2rem",
    },
  },
  contentTitle: {
    ...theme.custom.title4,
    // ...theme.custom.outlineTitle,
    letterSpacing: "1px",
    marginBottom: "3rem",
    fontSize: "1.6rem",
  },
  leftImg: {
    [theme.breakpoints.down("xs")]: {
      height: "40rem",
    },
  },
}));

const AboutSection = (props) => {
  const theme = useTheme();
  const classes = useStyles();

  const atXsDown = useMediaQuery(theme.breakpoints.down("xs")); // below 600

  const RightSideImg = () => (
    <StaticImage src="../../assets/images/about-2.jpg" alt="Business Law" />
  );

  const RightSideText = () => (
    <>
      <div className={classes.symbolDivider} data-testid="divider" />
      <h5 className={classes.contentTitle}>We Love What We Do</h5>
      <Typography variant="body1" gutterBottom>
        We are committed to providing practical legal services.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Whether you’re scaling a business, negotiating a contract or trying to
        resolve a dispute – your goals become our goals.
      </Typography>
      <Typography variant="body1" gutterBottom>
        We pride ourselves in being approachable and getting things done. We
        avoid legalese. We’re proactive.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Focused on business, entertainment and dispute resolution, we represent
        entrepreneurs, stake-holders and creative professionals.
      </Typography>
      <Typography variant="body1" gutterBottom>
        We focus on legal strategy, so you don’t have to.
      </Typography>
      <Typography variant="body1" gutterBottom>
        We’ve got this.
      </Typography>
    </>
  );

  return (
    <section className={classes.aboutSection}>
      <StaticImage
        src="../../assets/images/light-bg.png"
        className={classes.lightBg}
        alt="background"
      />
      <Container>
        <h1 className={classes.aboutTitle}>We are Romano Law</h1>
        <Grid container>
          <Grid item xs={12} sm={6} className={classes.gridItem}>
            <h2 className={classes.aboutSubTitle}>
              Innovative Legal Counsel for Business, Professionals & Creative
              People
            </h2>
            <StaticImage
              src="../../assets/images/about-1.jpg"
              alt="Business Law"
              className={classes.leftImg}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridItem}>
            {atXsDown ? (
              <>
                <RightSideText />
                <RightSideImg />
              </>
            ) : (
              <>
                <RightSideImg />
                <RightSideText />
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutSection;
