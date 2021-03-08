import React from "react";
import Grid from "@material-ui/core/Grid";
import Detail from "./Detail";

function Details(props) {
  return (
    <Grid item id={"details"} className={"full_width"}>
      <Grid
        container
        direction="row"
        className={"full_height"}
        justify={"space-between"}
        alignItems={"flex-end"}
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
          content={props.allSets[props.currentSetNum][2]}
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
