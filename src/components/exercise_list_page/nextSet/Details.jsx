import React from "react";
import Grid from "@material-ui/core/Grid";
import Detail from "./Detail";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    height: "38%",
  },
});

function Details(props) {
  const classes = useStyles();
  return (
    <Grid item className={classes.wrapper}>
      <Grid
        container
        direction="row"
        className={"full_height"}
        justify={"space-between"}
        alignItems={"center"}
      >
        <Detail
          title={"Time"}
          content={
            props.allSets[props.currentSetNum][0].toLocaleString("en-US", {
              minimumIntegerDigits: 2,
            }) +
            ":" +
            props.allSets[props.currentSetNum][1].toLocaleString("en-US", {
              minimumIntegerDigits: 2,
            })
          }
        />
        <Detail
          title={"Exercise"}
          content={
            props.allSets[props.currentSetNum][2].length <= 6
              ? props.allSets[props.currentSetNum][2]
              : `${props.allSets[props.currentSetNum][2].substring(0, 6)}...`
          }
        />
        <Detail
          title={"Set"}
          content={
            parseInt(parseInt(props.currentSetNum) + 1) + "/" + props.numOfSets
          }
        />
      </Grid>
    </Grid>
  );
}

export default Details;
