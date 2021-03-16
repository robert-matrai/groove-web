import React from "react";
import Title from "../exercises_page/Title";
import SubTitle from "../exercises_page/SubTitle";
import CustomButton from "./CustomButton";
import TimeList from "./TimeList";
import Grid from "@material-ui/core/Grid";
import "date-fns";
import { makeStyles } from "@material-ui/core";

const listWrapperWidth = 250;

const useStyles = makeStyles((theme) => ({
  titleWrapperOuter: {
    marginBottom: "30px",
    [theme.breakpoints.up("sm")]: {
      height: "100%",
    },
  },
  titleWrapper: {
    paddingTop: "8px",
    width: "380px",
  },
  subTitle: {
    paddingLeft: "2px",
    width: "280px",
  },
  listWrapper: {
    width: `${listWrapperWidth}px`,
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: `${theme.breakpoints.pageWidth / 2 - listWrapperWidth}px`,
    },
  },
  buttonWrapper: {
    padding: "5% 0 2%",
  },
}));

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
      <Grid item className={classes.titleWrapperOuter} xs={12} sm={6}>
        <Grid container className={classes.titleWrapper}>
          <Title title={title} />
          <SubTitle subTitle={subTitle} classes={classes} />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container direction="column" className={classes.listWrapper}>
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
