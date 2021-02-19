import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function CustomNavButton(props) {
  return (
    <Grid item={true} container={true} justify="center" className="list">
      <Button
        variant="contained"
        color={"primary"}
        onClick={props.onClick}
        className={props.width}
        size="large"
      >
        {props.name}
      </Button>
    </Grid>
  );
}

export default CustomNavButton;
