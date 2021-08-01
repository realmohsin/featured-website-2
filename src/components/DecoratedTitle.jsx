import React from "react";
import {
  makeStyles,
  useTheme,
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Paper,
} from "@material-ui/core";
import TitleDecoration from "../assets/svgs/TitleDecoration";

import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    margin: "0 0 12rem",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      margin: "0 0 10rem",
    },
  },
  title: {
    textShadow: "1px 1px 5px rgba(0,0,0,0.2)",
    fontSize: "4.8rem",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "4.6rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.8rem",
    },
  },
  decoration: {
    position: "absolute",
    // top: '150%',
    // left: '73px'
    top: "150%",
    left: "50%",
    transform: "translateX(-50%)",
  },
  closer: {
    top: "130%",
  },
  smallerFont: {
    fontSize: "4.2rem",
  },
}));

const SectionTitle = ({ title, closer, classStyles, smallerFont }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Box className={clsx(classes.sectionTitle, classStyles)}>
      <Typography
        variant="h2"
        className={clsx(classes.title, smallerFont && classes.smallerFont)}
        align="center"
      >
        {title}
      </Typography>
      <TitleDecoration
        color={theme.palette.secondary.main}
        className={clsx(classes.decoration, closer && classes.closer)}
      />
    </Box>
  );
};

export default SectionTitle;
