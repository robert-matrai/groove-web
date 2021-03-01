import React from "react";
import TimeTillNextSet from "./nextSet/TimeTillNextSet";
import Details from "./nextSet/Details";
import Grid from "@material-ui/core/Grid";

function NextSet(props) {
  const temp = new Date();
  const now = {
    hours: temp.getHours(),
    minutes: temp.getMinutes(),
  };
  let currentSetNum = 0;
  for (let set in props.allSets) {
    if (
      (props.allSets[set][0] === now.hours &&
        props.allSets[set][1] > now.minutes) ||
      props.allSets[set][0] > now.hours
    ) {
      currentSetNum = set;
      break;
    }
  }
  return (
    <Grid item>
      <Grid container direction="column">
        <TimeTillNextSet
          allSets={props.allSets}
          currentSetNum={currentSetNum}
          selectedInterval={props.selectedInterval}
          enforceRerender={props.enforceRerender}
        />
        <Details
          numOfSets={props.numOfSets}
          allSets={props.allSets}
          currentSetNum={currentSetNum}
        />
      </Grid>
    </Grid>
  );
}

export default NextSet;
