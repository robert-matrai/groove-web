import React from "react";
import Grid from "@material-ui/core/Grid";
import Set from "./allSets/Set";
import { makeStyles } from "@material-ui/core";

const listWrapperWidth = 263;

const useStyles = makeStyles((theme) => ({
  allSets: {
    height: "100%",
    borderRadius: "8px",
    margin: `0 ${(380 - (380 + listWrapperWidth) / 2) / 2}px`,
    [theme.breakpoints.up("sm")]: {
      margin: `0 ${
        (theme.breakpoints.pageWidth / 2 - listWrapperWidth + 30) / 2
      }px`,
    },
  },
  container: {
    height: "100%",
    width: `${(380 + listWrapperWidth) / 2}px`,
    [theme.breakpoints.up("sm")]: {
      width: `${listWrapperWidth}px`,
    },
  },
}));

function AllSets(props) {
  const classes = useStyles();
  return (
    <Grid item className={classes.allSets}>
      <Grid container direction="column" className={classes.container}>
        <div className={"scroll"}>
          {props.allSets.map((set, index) => {
            const temp = new Date();
            const now = {
              date: temp.getDate(),
              hours: temp.getHours(),
              minutes: temp.getMinutes(),
            };
            return (index > 0 && // never show first set
              ((set[0] === now.hours &&
                set[1] > now.minutes + props.selectedInterval) ||
                (set[0] === now.hours + 1 &&
                  set[1] > props.selectedInterval - (60 - now.minutes)) ||
                set[0] > now.hours + 1)) ||
              set[3] > now.date ? (
              <Set
                key={index}
                set={set}
                index={index}
                displayMargin={
                  index === props.allSets.length - 1 ? false : true
                }
              />
            ) : null;
          })}
        </div>
      </Grid>
    </Grid>
  );
}

export default AllSets;
