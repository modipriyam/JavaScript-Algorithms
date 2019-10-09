
// Binary Searchfunction 
  function binarySearch (data, value) {
  // initial values for start, middle and end
  let start = 0
  let stop = data.length - 1
  let middle = Math.floor((start + stop) / 2)

  //Check if the selected element is the middle element then it will retunr the mid value dirrectly
  while (data[middle] !== value && start < stop) {
    if (value < data[middle]) {
      stop = middle - 1
    } else {
      start = middle + 1
    }

    // recalculate middle on every iteration
    middle = Math.floor((start + stop) / 2)
  }

  //It returns the index of the element that is searched
  return middle;
 }

let data = [10, 50, 8, 9, 13, 45, 67, 99]
console.log("The Element you search for is present at the index : " );
console.log(binarySearch(data,13));