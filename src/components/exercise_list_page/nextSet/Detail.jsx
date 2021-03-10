import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    // border: "0.1rem solid white",
    // borderRadius: "8px",
    padding: "10% 5%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#bbe1fa",
  },
});

function Detail(props) {
  const classes = useStyles();
  return (
    <Grid item id={"detail"} className={classes.wrapper}>
      <Grid
        container
        direction="column"
        className={classes.container}
      >
        <Grid item>
          <Typography variant="h6" className={classes.title}>
            {" "}
            {props.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4"> {props.content}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Detail;
