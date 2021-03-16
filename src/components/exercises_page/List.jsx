import React from "react";
import NewExercise from "./NewExercise";
import Exercise from "./Exercise";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textfield: {
    "& .MuiInputBase-root": {
      fontFamily: theme.typography.fontFamily,
      ...theme.typography.textField,
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.textField.outline,
    },
    "& .MuiOutlinedInput-input": {
      color: theme.palette.text.primary,
    },
  },
  exercise: {
    margin: "3% 0",
  },
  textFieldButton: {
    "&:hover": {
      color: theme.palette.textField.button.hover,
    },
    color: theme.palette.textField.button.active,
  },
  list: {
    padding: "4% 0 2%",
    width: "252px",
    margin: "0",
  },
}));

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
      // id={"no_neg_margin"}
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
