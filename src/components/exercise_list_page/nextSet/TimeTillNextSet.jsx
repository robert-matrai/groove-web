import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

function TimeTillNextSet(props) {
  const temp = new Date();
  const now = {
    minutes: temp.getMinutes(),
    seconds: temp.getSeconds(),
    milliseconds: temp.getMilliseconds(),
  };
  const [countDown, setCountDown] = useState({
    minutes:
      60 - now.minutes < props.selectedInterval
        ? props.allSets[props.currentSetNum][1] + (60 - now.minutes)
        : props.allSets[props.currentSetNum][1] - now.minutes - 1,
    seconds: 60 - now.seconds,
  });

  setTimeout(() => {
    setCountDown({
      minutes:
        60 - now.minutes < props.selectedInterval
          ? props.allSets[props.currentSetNum][1] + (60 - now.minutes)
          : props.allSets[props.currentSetNum][1] - now.minutes - 1,
      seconds: 59 - now.seconds,
    });
    // if 00:00 
    if (countDown.minutes === 0 && countDown.seconds === 0) {
      // high level state change callback (enforce rerender) 
      props.enforceRerender();
      //alert
      alert(props.allSets[props.currentSetNum][2]);
    }
  }, 1000 - now.milliseconds);

  return (
    <Grid item>
      <Grid container justify="center" alignItems="center">
        <Typography variant="h3">
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
}

export default TimeTillNextSet;
