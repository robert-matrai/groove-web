import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

function Set(props) {
  return (
    <Grid item id={"set"}>
      <Grid
        container
        direction="row"
        className={"full_height"}
        justify={"flex-start"}
        alignItems={"center"}
      >
        <Grid item id={"setTime"}>
          <Typography variant="h6">
            {props.set[0].toLocaleString("en-US", {
              minimumIntegerDigits: 2,
            }) +
              ":" +
              props.set[1].toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
          </Typography>
        </Grid>
        <Grid item id={"setName"}>
          <Typography variant="h6">
            {props.set[2].length > 14
              ? props.set[2].substring(0, 14)
              : props.set[2]}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Set;
