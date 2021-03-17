import { Grid } from "@material-ui/core";
import React from "react";
import Title from "./exercises_page/Title";
import SubTitle from "./exercises_page/SubTitle";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    width: "350px",
    height: "100%",
    padding: "10px 0 40px",
  },
  subTitle: {
    paddingLeft: "2px",
  },
  button: {
    "&:hover": {
      backgroundColor: theme.palette.button.hover,
    },
    backgroundColor: theme.palette.button.active,
    width: "100%",
    fontFamily: theme.typography.fontFamily,
  },
  link: {
    color: theme.palette.text.primary,
    textDecorationLine: "none",
  },
  finish: {
    width: "100%",
    padding: "20px 0 100px",
    color: theme.palette.text.primary,
  },
}));

const title = "Congrats!";
const subTitle =
  "Workout completed successfully";

export default function Finish() {
  const classes = useStyles();
  return (
    <div className={classes.finish}>
      <Grid
        container
        direction="column"
        justify={"flex-end"}
        alignItems={"flex-start"}
      >
        <Grid item className={classes.titleWrapper}>
          <Title title={title}/>
          <SubTitle subTitle={subTitle} classes={classes} />
        </Grid>
      </Grid>
    </div>
  );
}
