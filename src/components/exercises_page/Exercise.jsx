import React from "react";
import Grid from "@material-ui/core/Grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

function Exercise(props) {
  return (
    <Grid
      item
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <TextField
        type="String"
        label=""
        value={props.exercise}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <IconButton
              variant="contained"
              color={"default"}
              onClick={() =>
                props.onRemoveExercise(props.exercise, props.index)
              }
              position="right"
            >
              <DeleteOutlineIcon />
            </IconButton>
          ),
        }}
        variant="outlined"
        fullWidth={true}
      />
    </Grid>
  );
}

export default Exercise;
