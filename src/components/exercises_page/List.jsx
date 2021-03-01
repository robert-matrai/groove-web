import React from "react";
import NewExercise from "./NewExercise";
import Exercise from "./Exercise";
import Grid from "@material-ui/core/Grid";

function List(props) {
  return (
    <Grid
      item
      container
      direction="column"
      justify="center"
      alignItems="center"
      className="list"
      spacing={1}
    >
      {props.exercises.map((exercise, index) => {
        return (
          <Exercise
            key={index}
            id={index.toString()}
            index={index}
            exercise={exercise}
            handleRemoveExercise={props.handleRemoveExercise}
          />
        );
      })}
      <NewExercise
        key={props.exercises.length}
        handleAddNewExercise={props.handleAddNewExercise}
      />
    </Grid>
  );
}

export default List;
