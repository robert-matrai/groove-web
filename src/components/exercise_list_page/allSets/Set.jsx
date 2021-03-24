import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  set: {
    border: "0.1rem solid",
    borderColor: theme.palette.textField.outline,
    borderRadius: "8px",
    height: "56px",
    padding: "0 5%",
    marginBottom: "5.5%",
  },
  setTime: {
    paddingRight: "10%",
    "& .MuiTypography-body1": {
      fontSize: "0.9rem",
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
    },
  },
  setName: {
    fontSize: "1rem",
    "& .MuiTypography-body1": {
      fontFamily: theme.typography.fontFamily,
    },
  },
}));

function Set(props) {
  const classes = useStyles();
  return (
    <Grid
      item
      className={classes.set}
      style={props.displayMargin ? null : { marginBottom: "0" }}
    >
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
            {props.set[2].length > 19
              ? `${props.set[2].substring(0, 19)}...`
              : props.set[2]}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Set;
