import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: { 
    ...theme.typography.title, 
    fontFamily: theme.typography.fontFamily },
}));

function Title(props) {
  const classes = useStyles();
  return (
    <Grid item container justify="flex-start">
      <Typography variant="h2" gutterBottom className={classes.title}>
        {props.title}
      </Typography>
    </Grid>
  );
}

export default Title;
