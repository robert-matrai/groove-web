import React from "react";
import Grid from "@material-ui/core/Grid";

function Detail(props) {
  return (
    <Grid item>
      <Grid container direction="column">
        <Grid item>{props.title}</Grid>
        <Grid item>{props.content}</Grid>
      </Grid>
    </Grid>
  );
}

export default Detail;
