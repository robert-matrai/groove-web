import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  subTitle: {
    ...theme.typography.subTitle,
    fontFamily: theme.typography.fontFamily,
  },
}));

export default function SubTitle(props) {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      justify="flex-start"
      className={props.classes.subTitle}
    >
      <Typography
        // variant="h7"
        gutterBottom
        className={classes.subTitle}
      >
        {props.subTitle}
      </Typography>
    </Grid>
  );
}
