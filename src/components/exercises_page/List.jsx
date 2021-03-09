import React from "react";
import NewExercise from "./NewExercise";
import Exercise from "./Exercise";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textfield: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3282b8",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiInputLabel-outlined": {
      color: "white",
    },
  },
  exercise: {
    margin: "3% 0",
  },
  deleteButton: {
    color: "#3282b8",
  },
  addButton: {
    color: "#bbe1fa",
  },
  list: {
    padding: "4% 15% 2%",
  },
});

function List(props) {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.list}
      id={"no_neg_margin"}
    >
      {props.exercises.map((exercise, index) => {
        return (
          <Exercise
            key={index}
            id={index.toString()}
            index={index}
            exercise={exercise}
            handleRemoveExercise={props.handleRemoveExercise}
            classes={classes}
          />
        );
      })}
      <NewExercise
        key={props.exercises.length}
        handleAddNewExercise={props.handleAddNewExercise}
        classes={classes}
      />
    </Grid>
  );
}

export default List;
