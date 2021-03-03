import React, { useState } from "react";
import NextSet from "./NextSet";
import AllSets from "./AllSets";
import Grid from "@material-ui/core/Grid";

function ExerciseList(props) {
  const [enforceRerender, setEnforceRerender] = useState(true);
  return (
    <div className={"full_width"} >
      <Grid container direction="row" justify={"center"} alignItems={"center"} className={"full_height"}>
        <NextSet
          allSets={props.allSets}
          numOfSets={props.numOfSets}
          selectedInterval={props.selectedInterval}
          enforceRerender={() => setEnforceRerender(!enforceRerender)}
        />
        <AllSets
          allSets={props.allSets}
          selectedInterval={props.selectedInterval}
        />
      </Grid>
    </div>
  );
}

export default ExerciseList;
