
// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // array methods
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }  //console.log(i);
  }
}
function actionWhenFound(position) {
  console.log(`Found Waldo at index  ${position}!`);
};

console.log(findWaldo(["Alice", "Bob", "Waldo", "Winston", "x"], actionWhenFound)
);



