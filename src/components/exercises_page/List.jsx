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
            onRemoveExercise={props.onRemoveExercise}
          />
        );
      })}
      <NewExercise
        key={props.exercises.length}
        newExercise={props.newExercise}
        handleChangeNewExercise={props.handleChangeNewExercise}
        onAddNewExercise={props.onAddNewExercise}
      />
    </Grid>
  );
}

export default List;
