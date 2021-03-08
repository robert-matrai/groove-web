import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textfield: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiInputLabel-outlined": {
      color: "white",
    },
    "& input[type=time]::-webkit-calendar-picker-indicator": {
      opacity: 1,
      filter:
        "invert(99%) sepia(1%) saturate(3984%) hue-rotate(278deg) brightness(115%) contrast(100%)", // use https://codepen.io/sosuke/pen/Pjoqqp to compute
    },
  },
  unit: {
    "& .MuiTypography-colorTextSecondary": { color: "white" },
  },
  exercise: {
    margin: "0.4rem 0",
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
      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.exercise}
      >
        <TextField
          id="start-time"
          label="Start time"
          type="time"
          value={props.selectedStartTime}
          onChange={props.handleSelectedStartTimeChange}
          className={classes.textfield}
          inputProps={{
            step: 300, // 5 min
          }}
          variant="outlined"
          fullWidth={true}
        />
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.exercise}
      >
        <TextField
          id="Interval"
          type="Number"
          label="Interval"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" className={classes.unit}>
                min
              </InputAdornment>
            ),
          }}
          value={props.selectedInterval}
          onChange={props.handleIntervalChange}
          className={classes.textfield}
          variant="outlined"
          fullWidth={true}
        />
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.exercise}
      >
        <TextField
          id="Rounds"
          type="Number"
          label="Rounds"
          InputProps={null}
          value={props.selectedRounds}
          onChange={props.handleRoundsChange}
          className={classes.textfield}
          variant="outlined"
          fullWidth={true}
        />
      </Grid>
    </Grid>
  );
}

export default List;
