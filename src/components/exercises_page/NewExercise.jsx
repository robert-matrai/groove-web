import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";

function NewExercise(props) {
  const [newExercise, setNewExercise] = useState("");

  function handleChangeNewExercise(event) {
    setNewExercise(event.target.value);
  }

  return (
    <Grid item container justify="center" alignItems="center">
      <TextField
        id="AddExercise"
        type="String"
        label=""
        placeholder="Add Exercise"
        value={newExercise}
        onChange={handleChangeNewExercise}
        InputProps={{
          endAdornment: (
            <IconButton
              variant="contained"
              color={"primary"}
              onClick={() => {
                if (newExercise !== "") {
                  props.handleAddNewExercise(newExercise);
                  setNewExercise("");
                }
              }}
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
