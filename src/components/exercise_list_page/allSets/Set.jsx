import React from "react";
import Grid from "@material-ui/core/Grid";
import SetTime from "./SetTime";
import SetName from "./SetName";

function Set(props) {
  return (
    <Grid item>
      <Grid container direction="row">
        <SetTime
          content={
            props.set[0].toLocaleString("en-US", {
              minimumIntegerDigits: 2,
            }) +
            ":" +
            props.set[1].toLocaleString("en-US", {
              minimumIntegerDigits: 2,
            })
          }
        />
        <SetName content={props.set[2]}/>
      </Grid>
    </Grid>
  );
}

export default Set;
