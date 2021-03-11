import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

function Title(props) {
    return (
        <Grid item container justify="flex-start">
          <Typography variant="h2" gutterBottom style={{ textAlign: "start" }}>
            {props.title}
          </Typography>
        </Grid>
    )
}

export default Title;