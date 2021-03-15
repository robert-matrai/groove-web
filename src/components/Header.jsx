import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  brand: {
    textDecorationLine: "none",
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.brand.fontWeight,
    fontSize: theme.typography.brand.fontSize,
    color: theme.palette.textField.button.active,
    "&:hover": {
      color: theme.palette.textField.button.hover,
    },
  },
  header: {
    padding: "20px 0",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <h2>
        <Link to="/" className={classes.brand}>
          Groove
        </Link>
      </h2>
    </header>
  );
}

export default Header;
