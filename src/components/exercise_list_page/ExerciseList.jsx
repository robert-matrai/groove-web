import React, {useState} from "react";
import NextSet from "./NextSet";
import AllSets from "./AllSets";
import Grid from "@material-ui/core/Grid";

function ExerciseList(props) {
  const [enforceRerender, setEnforceRerender] = useState(true);
  return (
    <div>
      <Grid container direction="row">
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
