import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Input from "./Input";
import Button from "./Button";

const useStyles = makeStyles((theme) => ({
  contactSection: {
    padding: "12rem 0",
    background: `radial-gradient(circle, rgba(239,249,249, 0.9) 0%, rgba(255, 255, 255, 0.4) 100%)`,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      padding: "8rem 0",
    },
  },
  contactTitle: {
    ...theme.custom.title2,
    marginBottom: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.4rem",
    },
  },
  form: {
    maxWidth: "40rem",
    margin: "0 auto",
  },
  submitButton: {
    margin: "4rem auto",
  },
  telephoneContainer: {
    margin: "0 auto",
    width: "max-content",
    marginBottom: "8rem",
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      textAlign: "center",
    },
  },
  telephoneLink: {
    color: theme.palette.secondary.dark,
    display: "inline",
    margin: "0 0.5rem",
    fontSize: "1.6rem",
    letterSpacing: "0.4px",
    transition: "0.3s all",
    "&:hover": {
      color: theme.palette.primary.main,
    },
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
}));

const ContactSection = (props) => {
  const classes = useStyles();

  const initialFormState = {
    email: "",
    firstName: "",
    lastName: "",
    telephone: "",
    message: "",
  };
  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormState((formState) => ({ ...formState, [name]: value }));
  };

  return (
    <section className={classes.contactSection}>
      <StaticImage
        src="../assets/images/light-bg.png"
        className={classes.lightBg}
        alt="background"
      />
      <Container>
        <h2 className={classes.contactTitle}>How Can We Help?</h2>
        <div className={classes.telephoneContainer}>
          Call us at
          <a href="tel:123-456-7890" className={classes.telephoneLink}>
            (123) 456-7890
          </a>
          or submit a message.
        </div>

        <form data-testid="contact-form" className={classes.form}>
          <Input
            type="text"
            name="firstName"
            value={formState.firstName}
            label="First Name"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="lastName"
            value={formState.lastName}
            label="Last Name"
            onChange={handleInputChange}
          />
          <Input
            type="tel"
            name="telephone"
            value={formState.telephone}
            label="Telephone"
            onChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            value={formState.email}
            label="Email"
            onChange={handleInputChange}
          />
          <Input
            isTextarea
            rows={5}
            name="message"
            value={formState.message}
            label="Message"
            onChange={handleInputChange}
          />
          <Button text="Submit" extraClassName={classes.submitButton} />
        </form>
      </Container>
    </section>
  );
};

export default ContactSection;
