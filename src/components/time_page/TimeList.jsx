import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

function List(props) {
  return (
    <Grid
      item
      container
      direction="column"
      justify="center"
      alignItems="center"
      className="list"
    >
      <Grid item container direction="row" justify="center" alignItems="center">
        <TextField
          id="start-time"
          label="Start time"
          type="time"
          value={props.selectedStartTime}
          onChange={props.handleDateChange}
          className="MuiFormControl-marginNormal"
          inputProps={{
            step: 300, // 5 min
          }}
          variant="outlined"
          fullWidth={true}
        />
      </Grid>
      <Grid item container direction="row" justify="center" alignItems="center">
        <TextField
          id="Interval"
          type="Number"
          label="Interval"
          InputProps={{
            endAdornment: <InputAdornment position="end">min</InputAdornment>,
          }}
          value={props.selectedInterval}
          onChange={props.handleIntervalChange}
          className="MuiFormControl-marginNormal"
          variant="outlined"
          fullWidth={true}
        />
      </Grid>
      <Grid item container direction="row" justify="center" alignItems="center">
        <TextField
          id="Rounds"
          type="Number"
          label="Rounds"
          InputProps={null}
          value={props.selectedRounds}
          onChange={props.handleRoundsChange}
          className="MuiFormControl-marginNormal"
          variant="outlined"
          fullWidth={true}
        />
      </Grid>
    </Grid>
  );
}

export default List;
