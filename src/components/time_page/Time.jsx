import React from "react";
import Title from "../exercises_page/Title";
import CustomButton from "./CustomButton";
import TimeList from "./TimeList";
import Grid from "@material-ui/core/Grid";
import "date-fns";

const title = "Select Time Settings";

function Time(props) {
  return (
    <div>
      <Grid container direction="column">
        <Title title={title} />

        <TimeList
          selectedStartTime={props.selectedStartTime}
          handleSelectedStartTimeChange={props.handleSelectedStartTimeChange}
          selectedInterval={props.selectedInterval}
          handleIntervalChange={props.handleIntervalChange}
          selectedRounds={props.selectedRounds}
          handleRoundsChange={props.handleRoundsChange}
        />

        <Grid
          item={true}
          container={true}
          direction="row"
          justify="space-between"
          alignItems="center"
          // spacing={1}
          className={"list"}
        >
          <CustomButton name="Back" onClick={props.handleShowPrevPage} width="half_width"/>
          <CustomButton name="Start" onClick={props.onStart}  width="half_width"/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Time;
