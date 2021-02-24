import React from "react";
import Grid from "@material-ui/core/Grid";
import Set from "./allSets/Set";

function AllSets(props) {
  return (
    <Grid item>
      <Grid container direction="column" >
        <div className={"scroll"}>
          {props.allSets.map((set, index) => {
            return index > 0 ? (
              <Set
                key={index}
                set={set}
                index={index}
              />
            ) : null;
          })}
        </div>
      </Grid>
    </Grid>
  );
}

export default AllSets;
