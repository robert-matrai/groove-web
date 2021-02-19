import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

function Title(props) {
    return (
        <Grid item container justify="center">
          <Typography variant="h3" gutterBottom style={{ textAlign: "center" }}>
            {props.title}
          </Typography>
        </Grid>
    )
}

export default Title;