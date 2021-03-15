import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "absolute",
    textAlign: "center",
    bottom: "0",
    width: "100%",
    height: "2.5rem",
    margin: "0 -6%",
    [theme.breakpoints.up("sm")]: {
      margin: "0 -12%",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0 -20%",
    },
  },
  p: {
    color: theme.palette.text.footer,
    fontFamily: theme.typography.fontFamily,
    ...theme.typography.footer,
  },
}));

function Footer(props) {
  const classes = useStyles();
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <div>
        <p className={classes.p}>Copyright ⓒ {year} Robert Matrai</p>
      </div>
    </footer>
  );
}

export default Footer;
