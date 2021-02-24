import React from "react";
import NextSet from "./NextSet";
import AllSets from "./AllSets";
import Grid from "@material-ui/core/Grid";

function ExerciseList(props) {
  return (
    <div>
      <Grid container direction="row">
        <NextSet
          timeTillNextSet={props.timeTillNextSet}
          allSets={props.allSets}
          numOfSets={props.numOfSets}
            currentSetNum={props.currentSetNum}
        />
        <AllSets allSets={props.allSets} />
      </Grid>
    </div>
  );
}

export default ExerciseList;
