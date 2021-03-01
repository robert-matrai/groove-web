import React from "react";
import Title from "./Title";
import List from "./List";
import CustomNavButton from "./CustomNavButton";
import Grid from "@material-ui/core/Grid";

const title = "Select Exercises";

function Exercises(props) {
  return (
    <div >
      <Grid container direction="column">
        <Title title={title} />
        <List
          exercises={props.exercises}
          handleAddNewExercise={props.handleAddNewExercise}
          handleRemoveExercise={props.handleRemoveExercise}
        />
        <CustomNavButton name="Next" onClick={props.handleShowNextPage}  width="full_width"/>
      </Grid>
    </div>
  );
}

export default Exercises;
