import React from "react";
import Title from "../exercises_page/Title";
import SubTitle from "../exercises_page/SubTitle";
import CustomButton from "./CustomButton";
import TimeList from "./TimeList";
import Grid from "@material-ui/core/Grid";
import "date-fns";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  titleWrapper: {
    width: "50%",
    height: "100%",
    paddingTop: "1%",
  },
  subTitle: {
    paddingLeft: "1%",
  },
  buttonWrapper: {
    padding: "5% 15% 2%",
  },
});

const title = "Time Settings";
const subTitle = "What time settings would you like for your workout?";

function Time(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify={"flex-start"}
      alignItems={"center"}
    >
      <Grid item className={classes.titleWrapper}>
        <Title title={title} />
        <SubTitle subTitle={subTitle} classes={classes} />
      </Grid>
      <Grid item className={"input_page"}>
        <Grid container direction="column">
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
            className={classes.buttonWrapper}
          >
            <CustomButton
              name="Back"
              onClick={props.handleShowPrevPage}
              width="half_width"
            />
            <CustomButton
              name="Start"
              onClick={props.onStart}
              width="half_width"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Time;
