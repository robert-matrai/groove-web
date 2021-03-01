import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function CustomButton(props) {
  return (
    <Grid item className={props.width}>
      <Button
        variant="contained"
        color={"primary"}
        onClick={props.onClick}
        className="full_width"
        size="large"
      >
        {props.name}
      </Button>
    </Grid>
  );
}

export default CustomButton;
