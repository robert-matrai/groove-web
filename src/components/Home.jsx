import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Title from "./exercises_page/Title";
import SubTitle from "./exercises_page/SubTitle";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
  home: {
    padding: "20px 0 100px",
    color: theme.palette.text.primary,
  },
}));

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
