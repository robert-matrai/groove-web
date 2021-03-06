import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import CustomNotification from "../CustomNotification";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    height: "62%",
  },
  container: {
    fontSize: "4.5rem",
    fontFamily: theme.typography.fontFamily,
    borderBottom: "0.1rem solid",
    borderBottomColor: theme.palette.textField.outline,
    padding: "10% 5% 2%",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function TimeTillNextSet(props) {
  const history = useHistory();
  const classes = useStyles();
  const temp = new Date();
  const now = {
    hours: temp.getHours(),
    minutes: temp.getMinutes(),
    seconds: temp.getSeconds(),
    milliseconds: temp.getMilliseconds(),
  };
  const currentSet = {
    hours: props.allSets[props.currentSetNum][0],
    minutes: props.allSets[props.currentSetNum][1],
  };
  const countDown = {
    hours:
      // if set.hour === now.hour
      currentSet.hours === now.hours
        ? 0
        : // else if set.hour > now.hour and also set.minutes > now.minutes
        currentSet.minutes > now.minutes
        ? currentSet.hours - now.hours
        : // else if set.hour > now and also set.minutes <= now.minutes
          currentSet.hours - now.hours - 1,
    minutes:
      // if less than interval until next hour
      60 - now.minutes < props.selectedInterval && currentSet.hours > now.hours
        ? currentSet.minutes + (59 - now.minutes)
        : // else if set.minutes <= now.minutes (implying it's the next hour)
        currentSet.minutes <= now.minutes
        ? 60 - now.minutes - 1 + currentSet.minutes
        : currentSet.minutes - now.minutes - 1,
    seconds: 59 - now.seconds,
  };
  let shouldAlert = true;
  const [localRerender, doLocalRerender] = useState(true);

  setTimeout(() => {
    // if 00:00
    if (
      countDown.hours === 0 &&
      countDown.minutes === 0 &&
      countDown.seconds === 0 &&
      shouldAlert
    ) {
      // prevent re-alert
      shouldAlert = false;
      //alert
      showAlert(props.currentSetNum);
      if ((parseInt(props.currentSetNum) + 1) === parseInt(props.numOfSets)) {
        history.push('/finish')
      } else {
        // higher level rerender by state change callback
        props.enforceRerender();
      }
    } else {
      // otherwise only rerender locally
      doLocalRerender(!localRerender);
    }
  }, 1000 - now.milliseconds);

  async function showAlert(currentSetNum) {
    try {
      await setTimeout(() => {
        showNotification(props.allSets[currentSetNum][2]);
        shouldAlert = true;
      }, 40);
    } catch (err) {
      console.log(err);
    }
  }

  function showNotification(message) {
    const params = {
      title: message,
      body: `Set ${(parseInt(props.currentSetNum) + 1)}/${props.numOfSets}`,
      tag: currentSet,
    }
    props.notificationsAllowed ? CustomNotification(params) : alert(message);
  }

  return (
    <Grid item id={"time_till_next_set"} className={classes.wrapper}>
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        className={"full_height full_width"}
      >
        <Typography variant="h1" className={classes.container}>
          {countDown.hours === 0
            ? null
            : countDown.hours.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              }) + ":"}
          {countDown.minutes.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}
          :
          {countDown.seconds.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TimeTillNextSet;
