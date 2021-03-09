import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textfield: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3282b8",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
      padding: "18.5px 22px 18.5px 14px",
    },
    "& .MuiInputLabel-outlined": {
      color: "#bbe1fa",
    },
    "& input[type=time]::-webkit-calendar-picker-indicator": {
      opacity: 1,
      filter:
        "invert(48%) sepia(9%) saturate(3350%) hue-rotate(161deg) brightness(92%) contrast(87%)", // use https://codepen.io/sosuke/pen/Pjoqqp to compute
    },
    "& .MuiOutlinedInput-adornedEnd": {
      paddingRight: "26px",
    },
  },

  unit: {
    "& .MuiTypography-colorTextSecondary": { color: "#3282b8" },
  },
  exercise: {
    margin: "3% 0",
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
