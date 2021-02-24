import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

function TimeTillNextSet(props) {
  return (
    <Grid item>
      <Grid container justify="center" alignItems="center" >
        <Typography variant="h3">{props.content.minutes}:{props.content.seconds}</Typography>
      </Grid>
    </Grid>
  );
}

export default TimeTillNextSet;
