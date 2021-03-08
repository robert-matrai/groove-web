import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

export default function SubTitle(props) {
    return (
        <Grid item container justify="flex-start" className={props.classes.subTitle}>
          <Typography variant="h7" gutterBottom style={{ textAlign: "center" }}>
            {props.subTitle}
          </Typography>
        </Grid>
    )
}