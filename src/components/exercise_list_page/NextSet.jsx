import React from "react";
import TimeTillNextSet from "./nextSet/TimeTillNextSet";
import Details from "./nextSet/Details";
import Grid from "@material-ui/core/Grid";

function NextSet(props) {
  return (
    <Grid item>
      <Grid container direction="column">
        <TimeTillNextSet content={props.timeTillNextSet} />
        <Details
          numOfSets={props.numOfSets}
          allSets={props.allSets}
          currentSetNum={props.currentSetNum}
        />
      </Grid>
    </Grid>
  );
}

export default NextSet;
