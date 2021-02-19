import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";

function NewExercise(props) {
  return (
    <Grid item container justify="center" alignItems="center">
      <TextField
        id="AddExercise"
        type="String"
        label=""
        placeholder="Add Exercise"
        value={props.newExercise}
        onChange={props.handleChangeNewExercise}
        InputProps={{
          endAdornment: (
            <IconButton
              variant="contained"
              color={"primary"}
              onClick={props.onAddNewExercise}
              position="right"
            >
              <AddIcon />
            </IconButton>
          ),
        }}
        variant="outlined"
        fullWidth={true}
      />
    </Grid>
  );
}

export default NewExercise;
