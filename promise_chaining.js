function asyncTask1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 1 complete"), 1000);
  });
}

function asyncTask2(prevResult) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(prevResult + " → Step 2 complete"), 1000);
  });
}

function asyncTask3(prevResult) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(prevResult + " → Step 3 complete"), 1000);
  });
}

asyncTask1()
  .then(result => asyncTask2(result))
  .then(result => asyncTask3(result))
  .then(finalResult => console.log("Final Result:", finalResult))
  .catch(err => console.error("Error:", err));