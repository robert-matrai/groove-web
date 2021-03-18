import React, { useState } from "react";
import NextSet from "./NextSet";
import AllSets from "./AllSets";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const customHeight = 400;

const useStyles = makeStyles((theme) => ({
  exerciseList: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: `${customHeight}px`,
    },
  },
  wrapper: {
    //height: "80%",
    marginBottom: "30px",
    height: `${customHeight * 0.8}px`,
    [theme.breakpoints.up("sm")]: {
      marginBottom: 0,
      height: "100%",
    },
  },
  container: {
    height: "100%",
    width: "380px",
  },
}));

function ExerciseList(props) {
  const [enforceRerender, setEnforceRerender] = useState(true);
  const classes = useStyles();
  return (
    // <div className={classes.exerciseList}>
    <Grid
      container
      direction="row"
      justify={"flex-start"}
      alignItems={"center"}
      // className={"full_height"}
      className={classes.exerciseList}
    >
      <Grid item xs={12} sm={6} className={classes.wrapper}>
        <Grid container className={classes.container}>
          <NextSet
            allSets={props.allSets}
            numOfSets={props.numOfSets}
            selectedInterval={props.selectedInterval}
            enforceRerender={() => setEnforceRerender(!enforceRerender)}
            notificationsAllowed={props.notificationsAllowed}
          />
        </Grid>
      </Grid>

      <Grid item xs={12} sm={6} className={classes.wrapper}>
        <Grid container className={classes.container}>
          <AllSets
            allSets={props.allSets}
            selectedInterval={props.selectedInterval}
          />
        </Grid>
      </Grid>
    </Grid>
    // </div>
  );
}

export default ExerciseList;
