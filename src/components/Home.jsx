import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Title from "./exercises_page/Title";
import SubTitle from "./exercises_page/SubTitle";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  titleWrapper: {
    width: "50%",
    height: "100%",
    padding: "1% 0 5%",
  },
  subTitle: {
    paddingLeft: "1%",
  },
  button: {
    "&:hover": {
      backgroundColor: "#3282b8",
    },
    backgroundColor: "#0f4c75",
    width: "100%",
  },
  link: {
    color: "#efecec",
    textDecorationLine: "none",
  },
  home: {
    padding: "20px 0 100px",
    color: "#efecec",
  },
});

const title = "Welcome to Groove";
const subTitle =
  "For optimal experience, open this app in a separate window and do not minimize it";

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Grid
        container
        direction="column"
        justify={"flex-end"}
        alignItems={"flex-start"}
      >
        <Grid item className={classes.titleWrapper}>
          <Title title={title} />
          <SubTitle subTitle={subTitle} classes={classes} />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color={"primary"}
            className={classes.button}
            size="large"
          >
            <Link to="/workout" className={classes.link}>
              Start workout
            </Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}