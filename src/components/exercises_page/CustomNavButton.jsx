import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    "&:hover": {
      backgroundColor: "#3282b8"
    },
    backgroundColor: "#0f4c75",
    width: "100%"
  }
}

);

function CustomNavButton(props) {
  const classes = useStyles();
  return (
    <Grid item={true} container={true} justify="center" className="list">
      <Button
        variant="contained"
        color={"primary"}
        onClick={props.onClick}
        className={classes.button}
        size="large"
      >
        {props.name}
      </Button>
    </Grid>
  );
}

export default CustomNavButton;
