import React, { useState } from "react";
import Time from "./time_page/Time";
import Exercises from "./exercises_page/Exercises";
import ExerciseList from "./exercise_list_page/ExerciseList";
import "date-fns";
import Grid from "@material-ui/core/Grid";

function Body() {
  // ***** PAGE NAVIGATION *****
  const [whatToShow, setWhatToShow] = useState("Exercises");

  function showPage(toPage) {
    if (toPage === "Time") {
      const now = new Date();
      const start = {
        hours: now.getHours().toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }),
        minutes: now.getMinutes().toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }),
      };
      setSelectedStartTime(start.hours + ":" + start.minutes);
    }
    setWhatToShow(toPage);
  }

  // ***** EXERCISE PAGE *****
  const [exercises, setExercises] = useState([
    "Swing",
    "Snatch",
    "Press",
    "Getup",
  ]);

  function handleAddNewExercise(newExercise) {
    setExercises(() => [...exercises, newExercise]);
  }

  function handleRemoveExercise(exerciseToDelete, id) {
    setExercises(exercises.filter((exercise) => exercise !== exerciseToDelete));
  }

  function onNext() {
    if (exercises.length <= 0) {
      alert("You need to select at least one exercise!");
    } else {
      showPage("Time");
    }
  }

  // ***** TIME PAGE *****
  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [selectedInterval, setSelectedInterval] = useState(15);
  const [selectedRounds, setSelectedRounds] = useState(2);

  function handleSelectedStartTimeChange(event) {
    setSelectedStartTime(event.target.value);
  }

  function handleIntervalChange(event) {
    const newInterval =
      event.target.value === "" ? "" : parseInt(event.target.value);
    if ((newInterval >= 0 || newInterval === null) && newInterval < 31)
      setSelectedInterval(newInterval);
  }

  function handleRoundsChange(event) {
    const newRounds =
      event.target.value === "" ? "" : parseInt(event.target.value);
    if (newRounds >= 0 || newRounds === null) setSelectedRounds(newRounds);
  }

  // ***** EXERCISELIST PAGE *****
  const [allSets, setAllSets] = useState([]);

  function getAllSets(howManySets) {
    let date = new Date().getDate();
    let sets = [
      [
        parseInt(selectedStartTime.substring(0, 2)),
        parseInt(selectedStartTime.substring(3, 5)),
        exercises[0],
        date,
      ],
    ];
    for (let i = 1; i < howManySets; i++) {
      const prevSet = [sets[i - 1][0], sets[i - 1][1]];
      let nextSet = [];
      //   00:00 - selectedInterval or later
      if (prevSet[1] > 59 - selectedInterval) {
        if (prevSet[0] === 23) date = date + 1;
        //   (00:00 - selectedInterval or later) or not xx != 23
        nextSet = [
          prevSet[0] === 23 ? 0 : prevSet[0] + 1,
          prevSet[1] - (60 - selectedInterval),
        ];
      } else {
        nextSet = [prevSet[0], prevSet[1] + selectedInterval];
      }
      i < exercises.length
        ? nextSet.push(exercises[i])
        : nextSet.push(exercises[i % exercises.length]);
      nextSet.push(date);
      sets.push(nextSet);
    }
    return sets;
  }

  async function onStart() {
    const [shouldStart, problem] = getShouldStart(new Date());
    const rounds = exercises.length * selectedRounds;

    if (!shouldStart) {
      alert(problem);
    } else {
      setAllSets(getAllSets(rounds));
      showPage("ExerciseList");
    }
  }

  function getShouldStart(startClickTime) {
    const now = {
      hours: startClickTime.getHours(),
      minutes: startClickTime.getMinutes(),
      seconds: startClickTime.getSeconds(),
    };
    const start =
      selectedStartTime == null
        ? null
        : {
            hours: parseInt(selectedStartTime.substring(0, 2)),
            minutes: parseInt(selectedStartTime.substring(3, 5)),
          };
    const [shouldStart, problem] =
      start === null ||
      start.hours - now.hours < 0 ||
      (start.hours - now.hours === 0 && start.minutes - now.minutes <= 0)
        ? [false, "Select valid starting time!"]
        : selectedInterval === ""
        ? [false, "Select valid interval"]
        : selectedRounds === ""
        ? [false, "Select valid amount of rounds!"]
        : [true, null];

    return [shouldStart, problem];
  }

  return (
    <div className="Body">
      <Grid container justify="space-around">
        {whatToShow === "Exercises" ? (
          <Exercises
            exercises={exercises}
            handleAddNewExercise={handleAddNewExercise}
            handleRemoveExercise={handleRemoveExercise}
            handleShowNextPage={onNext}
          />
        ) : whatToShow === "Time" ? (
          <Time
            selectedStartTime={selectedStartTime}
            handleSelectedStartTimeChange={handleSelectedStartTimeChange}
            selectedInterval={selectedInterval}
            handleIntervalChange={handleIntervalChange}
            selectedRounds={selectedRounds}
            handleRoundsChange={handleRoundsChange}
            handleShowPrevPage={() => showPage("Exercises")}
            onStart={onStart}
          />
        ) : (
          <ExerciseList
            allSets={allSets}
            numOfSets={exercises.length * selectedRounds}
            selectedInterval={selectedInterval}
          />
        )}
      </Grid>
    </div>
  );
}

export default Body;
