import React from "react";
import Grid from "@material-ui/core/Grid";
import Set from "./allSets/Set";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  allSets: {
    width: "30%",
    height: "100%",
    // border: "0.1rem solid white",
    borderRadius: "8px",
    marginLeft: "50px",
    // padding: "1% 0",
  },
  container: {
    // padding: "0 5%",
    height: "100%",
    width: "252px",
  },
});

function AllSets(props) {
  const classes = useStyles();
  return (
    <Grid item className={classes.allSets}>
      <Grid container direction="column" className={classes.container}>
        <div className={"scroll"}>
          {props.allSets.map((set, index) => {
            const temp = new Date();
            const now = {
              hours: temp.getHours(),
              minutes: temp.getMinutes(),
            };
            console.log("now in allsets: ");
            console.log(now);
            return index > 0 && // never show first set
              ((set[0] === now.hours &&
                set[1] > now.minutes + props.selectedInterval) ||
                (set[0] === now.hours + 1 &&
                  set[1] > props.selectedInterval - (60 - now.minutes)) ||
                set[0] > now.hours + 1) ? (
              <Set key={index} set={set} index={index} />
            ) : null;
          })}
        </div>
      </Grid>
    </Grid>
  );
}

export default AllSets;
