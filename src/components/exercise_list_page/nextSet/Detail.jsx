import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

function Detail(props) {
  return (
    <Grid item id={"detail"} className={"full_height"}>
      <Grid
        container
        direction="column"
        className={"full_height full_width"}
        justify={"center"}
        alignItems={"center"}
      >
        <Grid item>
          <Typography variant="h5"> {props.title}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6"> {props.content}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Detail;
