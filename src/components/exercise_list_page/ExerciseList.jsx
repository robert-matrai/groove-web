import React from "react";
import Title from "../exercises_page/Title";
import Grid from "@material-ui/core/Grid";

function ExerciseList(props) {
  return (
    // <div className="page"></div>
    <React.Fragment>
      <Grid container direction="column">
        <Title title={"All sets: "} />
      </Grid>
      <ul>
        {props.timeOfSets.map((set, index) => {
          return (
            <li key={index}>
              {set[0].toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}
              :
              {set[1].toLocaleString("en-US", {
                minimumIntegerDigits: 2,
              })}{" "}
              {index >= props.exercises.length
                ? props.exercises[index % props.exercises.length]
                : props.exercises[index]}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default ExerciseList;
