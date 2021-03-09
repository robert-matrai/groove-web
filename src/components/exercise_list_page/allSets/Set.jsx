import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  set: {
    border: "0.5px solid #3282b8",
    borderRadius: "8px",
    height: "56px",
    padding: "0 5%",
    // transparency
    // background: "linear-gradient(transparent, #1b262c)",
    marginBottom: "5.5%",
  },
  setTime: {
    paddingRight: "10%",
    "& .MuiTypography-body1": {
      fontSize: "0.9rem",
      color: "#bbe1fa",
    },
  },
  setName: {
    fontSize: "1rem",
  },
});

function Set(props) {
  const classes = useStyles();
  return (
    <Grid item id={"set"} className={classes.set}>
      <Grid
        container
        direction="row"
        className={"full_height"}
        justify={"flex-start"}
        alignItems={"center"}
      >
        <Grid item className={classes.setTime}>
          <Typography>
            {props.set[0].toLocaleString("en-US", {
              minimumIntegerDigits: 2,
            }) +
              ":" +
              props.set[1].toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
          </Typography>
        </Grid>
        <Grid item className={classes.setName}>
          <Typography>
            {props.set[2].length > 14
              ? props.set[2].substring(0, 14)
              : props.set[2]}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Set;
