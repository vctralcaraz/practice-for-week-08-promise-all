function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done stretching");
      resolve();
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve();
    }, 500);
  });
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights");
      resolve();
    }, 2000);
  });
}

function workout() {
  // refactor this code to use Promise.all
  // stretch()
  //   .then(runOnTreadmill)
  //   .then(liftWeights)
  //   .then(() => console.log("done working out"))
  //   .catch((err) => console.log(err));

  const promises = [
    stretch(),
    runOnTreadmill(),
    liftWeights()
  ]

  const superPromise = Promise.all(promises);

  superPromise
    .then(() => console.log('done working out'))
    .catch(error => console.log(error));
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done running on treadmill
    // done stretching
    // done lifting weights
    // done working out
