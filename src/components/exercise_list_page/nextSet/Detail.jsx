import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    padding: "10% 5%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: theme.typography.fontFamily,
  },
  wrapper: {
    width: "30%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: theme.palette.text.secondary,
    fontSize: "1rem",
  },
  content: {
    fontSize: "1.5rem",
  }
}));

function Detail(props) {
  const classes = useStyles();
  return (
    <Grid item className={classes.wrapper}>
      <Grid
        container
        direction="column"
        className={classes.container}
      >
        <Grid item>
          <Typography variant="h6" className={classes.title}>
            {" "}
            {props.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" className={classes.content}> {props.content}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Detail;
