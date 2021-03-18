import React, { useState } from "react";
import Title from "./Title";
import SubTitle from "./SubTitle";
import List from "./List";
import CustomNavButton from "./CustomNavButton";
import CustomizedDialog from "./NotificationDialog";
import Grid from "@material-ui/core/Grid";
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
    width: "380px",
    paddingTop: "8px",
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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const title = "Exercises";
const subTitle = "What exercises would you like to include in your workout?";

function Exercises(props) {
  const classes = useStyles();
  const [, setNotifsAllowed] = useState(false);

  if(Notification.permission !== "granted"){
    Notification.requestPermission().then((permission) => {
      if(permission === "granted"){
        setNotifsAllowed(true);
      }
    });
  }
  return (
    <>
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
          <Grid container className={classes.listWrapper} direction="column">
            <List
              exercises={props.exercises}
              handleAddNewExercise={props.handleAddNewExercise}
              handleRemoveExercise={props.handleRemoveExercise}
            />
            <CustomNavButton name="Next" onClick={props.handleShowNextPage} />
          </Grid>
        </Grid>
      </Grid>
      <CustomizedDialog />
    </>
  );
}

export default Exercises;
