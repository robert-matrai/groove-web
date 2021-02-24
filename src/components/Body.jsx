import React, { useState } from "react";
import Time from "./time_page/Time";
import Exercises from "./exercises_page/Exercises";
import ExerciseList from "./exercise_list_page/ExerciseList";
import "date-fns";
import Grid from "@material-ui/core/Grid";

function Body() {
  // ***** Page navigation *****
  const [whatToShow, setWhatToShow] = useState("Exercises");

  // ***** Exercise page *****
  const [exercises, setExercises] = useState([
    "Swing",
    "Snatch",
    "Press",
    "Getup",
  ]);
  const [newExercise, setNewExercise] = useState("");

  // ***** Time page *****
  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [selectedInterval, setSelectedInterval] = useState(15);
  const [selectedRounds, setSelectedRounds] = useState(2);

  // ***** ExerciseList page *****
  const [allSets, setAllSets] = useState([]);
  const [remainingSets, setRemainingSets] = useState([]);
  const [timeTillNextSet, setTimeTillNextSet] = useState(0);
  const [numOfSets, setNumOfSets] = useState(0);
  const [currentSetNum, setCurrentSetNum] = useState(0);

  // ***** Handle state changes *****
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

  function handleChangeNewExercise(event) {
    setNewExercise(event.target.value);
  }

  function handleAddNewExercise() {
    if (newExercise !== "") {
      setExercises(() => [...exercises, newExercise]);
      setNewExercise("");
    }
  }

  function handleRemoveExercise(exerciseToDelete, id) {
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

  async function onStart() {
    const delay = selectedInterval * 60000;
    const startClickTime = new Date();
    const [startDelay, shouldStart, relay] = getStartDelay(startClickTime);
    const rounds = exercises.length * selectedRounds - 1;
    let counter = 0;
    const allSetsTemp = getTimeOfSets(rounds + 1);
    let localTimeTillNextSet = relay;

    if (!shouldStart) {
      alert("Select valid starting time!");
    } else {
      console.log("click: " + startClickTime);
      console.log("start: " + selectedStartTime);
      console.log("startdelay: " + startDelay);
      showNextPage();
      setAllSets(allSetsTemp);
      setRemainingSets(allSetsTemp);
      setNumOfSets(exercises.length * selectedRounds);
      setCurrentSetNum(currentSetNum + 1);
      // setTimeTillNextSet(localTimeTillNextSet);
      // await countDown();

      await setTimeout(() => showAlert(delay, rounds, counter), startDelay);
    }
  }

  // ***** Logic *****
  async function showAlert(delay, rounds, counter) {
    console.log(new Date());
    await setTimeout(() => {
      if (rounds > 0) {
        setCurrentSetNum(currentSetNum + 1);
        showAlert(
          delay,
          rounds - 1,
          counter >= exercises.length - 1 ? 0 : counter + 1
        );
      }
    }, delay);
    // setTimeTillNextSet(delay);
    // await countDownTillStart(delay);
    console.log("all:");
    console.log(allSets);
    setRemainingSets(remainingSets.slice(1));
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
    const relay =
      selectedStartTime == null
        ? null
        : {
            hours: start.hours - now.hours,
            minutes: start.minutes - now.minutes - 1,
            seconds: 60 - now.seconds,
          };
    return [startDelay, shouldStart, relay];
  }

  // async function countDown(delay) {
  //   const temp = new Date();
  //   const now = {
  //     hours: temp.getHours(),
  //     minutes: temp.getMinutes(),
  //     seconds: temp.getSeconds(),
  //   };
  //   let localTimeTillNextSet = delay;
  //   await setTimeout(() => {
  //     if (localTimeTillNextSet > 0) {
  //       localTimeTillNextSet = localTimeTillNextSet - 1000;
  //       setTimeTillNextSet(localTimeTillNextSet);
  //       countDownTillStart(localTimeTillNextSet);
  //     }
  //   }, 1000);
  //   // setTimeTillNextSet(delay);
  // }

  function getTimeOfSets(howManySets) {
    let sets = [
      [
        parseInt(selectedStartTime.substring(0, 2)),
        parseInt(selectedStartTime.substring(3, 5)),
        exercises[0],
      ],
    ];
    for (let i = 1; i < howManySets; i++) {
      const prevSet = [sets[i - 1][0], sets[i - 1][1]];
      let nextSet = [];
      //   xx:45 or later
      if (prevSet[1] > 59 - parseInt(selectedInterval)) {
        //   (23:45 or later) or not xx != 23
        nextSet = [
          prevSet[0] === 23 ? 0 : prevSet[0] + 1,
          prevSet[1] - (60 - parseInt(selectedInterval)),
        ];
      } else {
        nextSet = [prevSet[0], prevSet[1] + parseInt(selectedInterval)];
      }
      i < exercises.length
        ? nextSet.push(exercises[i])
        : nextSet.push(exercises[i % exercises.length]);
      sets.push(nextSet);
    }
    return sets;
  }

  return (
    <div className="Body">
      <Grid container justify="space-around">
        {whatToShow === "Exercises" ? (
          <Exercises
            newExercise={newExercise}
            handleChangeNewExercise={handleChangeNewExercise}
            handleAddNewExercise={handleAddNewExercise}
            exercises={exercises}
            handleRemoveExercise={handleRemoveExercise}
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
          <ExerciseList
            allSets={allSets}
            timeTillNextSet={timeTillNextSet}
            numOfSets={numOfSets}
            currentSetNum={currentSetNum}
          />
        )}
      </Grid>
    </div>
  );
}

export default Body;
