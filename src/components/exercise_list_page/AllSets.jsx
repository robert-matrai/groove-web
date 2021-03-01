import React from "react";
import Grid from "@material-ui/core/Grid";
import Set from "./allSets/Set";

function AllSets(props) {
  return (
    <Grid item>
      <Grid container direction="column">
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
