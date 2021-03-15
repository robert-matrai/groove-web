import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    "&:hover": {
      backgroundColor: theme.palette.button.hover,
    },
    backgroundColor: theme.palette.button.active,
    width: "100%",
    fontFamily: theme.typography.fontFamily,
  },
}));

function CustomButton(props) {
  const classes = useStyles();
  return (
    <Grid item className={props.width}>
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

export default CustomButton;
