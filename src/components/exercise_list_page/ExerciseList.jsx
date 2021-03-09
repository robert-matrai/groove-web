import React, { useState } from "react";
import NextSet from "./NextSet";
import AllSets from "./AllSets";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  exerciseList: {
    height: "400px",
    width: "100%",
  },
});

function ExerciseList(props) {
  const [enforceRerender, setEnforceRerender] = useState(true);
  const classes = useStyles();
  return (
    <div className={classes.exerciseList}>
      <Grid
        container
        direction="row"
        justify={"center"}
        alignItems={"center"}
        className={"full_height"}
      >
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
