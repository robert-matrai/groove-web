import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  brand: {
    textDecorationLine: "none",
    color: "#efecec",
    fontWeight: "200",
    fontFamily: "Helvetica",
    fontSize: "1.3rem"
  },
  header: {
    padding: "20px 0",
  }
});

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
