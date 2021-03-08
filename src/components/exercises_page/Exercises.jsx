import React from "react";
import Title from "./Title";
import SubTitle from "./SubTitle";
import List from "./List";
import CustomNavButton from "./CustomNavButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {},
  titleWrapper: {
    width: "50%",
    height: "100%",
    paddingTop: "1%",
  },
  subTitle: {
    paddingLeft: "1%"
  }
});

const title = "Exercises";
const subTitle = "Create a list of the exercises you want to include in your workout!";

function Exercises(props) {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify={"flex-start"} alignItems={"center"}>
      <Grid item className={classes.titleWrapper}>
        <Title title={title} />
        <SubTitle subTitle={subTitle} classes={classes}/>
      </Grid>
      <Grid item className={"input_page"}>
        <Grid container direction="column">
          <List
            exercises={props.exercises}
            handleAddNewExercise={props.handleAddNewExercise}
            handleRemoveExercise={props.handleRemoveExercise}
          />
          <CustomNavButton
            name="Next"
            onClick={props.handleShowNextPage}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Exercises;
