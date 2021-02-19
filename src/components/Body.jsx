import React, { useState } from "react";
import Time from "./time_page/Time";
import Exercises from "./exercises_page/Exercises";
import ExerciseList from "./exercise_list_page/ExerciseList";
import "date-fns";
import Grid from "@material-ui/core/Grid";

function Body() {
  const [whatToShow, setWhatToShow] = useState("Exercises");
  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [selectedInterval, setSelectedInterval] = useState(15);
  const [selectedRounds, setSelectedRounds] = useState(2);
  const [exercises, setExercises] = useState([
    "Swing",
    "Snatch",
    "Press",
    "Getup",
  ]);
  const [newExercise, setNewExercise] = useState("");
  const [timeOfSets, setTimeOfSets] = useState([]);

  function handleDateChange(event) {
    setSelectedStartTime(event.target.value);
  }

  function handleIntervalChange(event) {
    const newInterval = event.target.value;
    if ((newInterval >= 0 || newInterval === null) && newInterval < 31)
      setSelectedInterval(newInterval);
  }

  function handleRoundsChange(event) {
    if (event.target.value >= 0 || event.target.value === null)
      setSelectedRounds(event.target.value);
  }

  async function showAlert(delay, rounds, counter) {
    console.log(new Date());
    await setTimeout(() => {
      if (rounds > 0)
        showAlert(
          delay,
          rounds - 1,
          counter >= exercises.length - 1 ? 0 : counter + 1
        );
    }, delay);
    console.log(counter);
    alert(exercises[counter]);
  }

  function getStartDelay(startClickTime) {
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
    const startDelay =
      selectedStartTime == null
        ? null
        : (start.hours - now.hours) * 3600000 +
          (start.minutes - now.minutes - 1) * 60000 +
          (60 - now.seconds) * 1000;
    const shouldStart =
      start === null ||
      start.hours - now.hours < 0 ||
      (start.hours - now.hours === 0 && start.minutes - now.minutes <= 0)
        ? false
        : true;
    return [startDelay, shouldStart];
  }

  function onStart() {
    const delay = selectedInterval * 60000;
    const startClickTime = new Date();
    const [startDelay, shouldStart] = getStartDelay(startClickTime);
    const rounds = exercises.length * selectedRounds - 1;
    let counter = 0;

    if (!shouldStart) {
      alert("Select valid starting time!");
    } else {
      console.log("click: " + startClickTime);
      console.log("start: " + selectedStartTime);
      console.log("startdelay: " + startDelay);
      showNextPage();
      setTimeOfSets(getTimeOfSets(rounds + 1));
      setTimeout(() => showAlert(delay, rounds, counter), startDelay);
    }
  }

  function getTimeOfSets(rounds) {
    let sets = [
      [
        parseInt(selectedStartTime.substring(0, 2)),
        parseInt(selectedStartTime.substring(3, 5)),
      ],
    ];
    for (let i = 1; i < rounds; i++) {
      const prevSet = [sets[i - 1][0], sets[i - 1][1]];
      let nextSet = [];
      //   xx:45 or later
      if (prevSet[1] > 44) {
        //   (23:45 or later) or not xx != 23
        nextSet = [
          prevSet[0] === 23 ? 0 : prevSet[0] + 1,
          prevSet[1] - (60 - parseInt(selectedInterval)),
        ];
      } else {
        nextSet = [prevSet[0], prevSet[1] + parseInt(selectedInterval)];
      }
      sets.push(nextSet);
    }
    return sets;
  }

  function handleChangeNewExercise(event) {
    setNewExercise(event.target.value);
  }

  function onAddNewExercise() {
    if (newExercise !== "") {
      setExercises(() => [...exercises, newExercise]);
      setNewExercise("");
    }
  }

  function onRemoveExercise(exerciseToDelete, id) {
    setExercises(exercises.filter((exercise) => exercise !== exerciseToDelete));
  }

  function showNextPage(arg) {
    if (arg === "back") setWhatToShow("Exercises");
    else if (whatToShow === "Exercises") {
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
      setWhatToShow("Time");
    } else if (whatToShow === "Time") setWhatToShow("ExerciseList");
  }

  return (
    <div className="Body">
      <Grid container justify="space-around">
        {whatToShow === "Exercises" ? (
          <Exercises
            newExercise={newExercise}
            handleChangeNewExercise={handleChangeNewExercise}
            onAddNewExercise={onAddNewExercise}
            exercises={exercises}
            onRemoveExercise={onRemoveExercise}
            handleShowNextPage={showNextPage}
          />
        ) : whatToShow === "Time" ? (
          <Time
            selectedStartTime={selectedStartTime}
            handleDateChange={handleDateChange}
            selectedInterval={selectedInterval}
            handleIntervalChange={handleIntervalChange}
            selectedRounds={selectedRounds}
            handleRoundsChange={handleRoundsChange}
            handleShowPrevPage={() => showNextPage("back")}
            onStart={onStart}
          />
        ) : (
          <ExerciseList timeOfSets={timeOfSets} exercises={exercises} />
        )}
      </Grid>
    </div>
  );
}

export default Body;
