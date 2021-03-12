import React from "react";
import Grid from "@material-ui/core/Grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

function Exercise(props) {
  return (
    <Grid item container direction="row" justify="center" alignItems="center" className={props.classes.exercise}>
      <TextField
        type="String"
        label=""
        value={props.exercise}
        className={props.classes.textfield}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <IconButton
              variant="contained"
              color={"default"}
              className={props.classes.textFieldButton}
              onClick={() =>
                props.handleRemoveExercise(props.exercise, props.index)
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
