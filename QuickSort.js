function quickSort(values, left, right) {
    var index;
    if (values.length > 1) {
        index = partvalues(values, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(values, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(values, index, right);
        }
    }
    return values;
}

//Creating a function that will shift elements
function shuffle(values, leftIndex, rightIndex){
    var temp = values[leftIndex];
    values[leftIndex] = values[rightIndex];
    values[rightIndex] = temp;
}

//This Function will part the array into two parts left and right
function partvalues(values, left, right) {
    var pivot   = values[Math.floor((right + left) / 2)], //middle element
        j       = right, i       = left;
      
    while (i <= j) {
        while (values[i] < pivot) {
            i++;
        }
        while (values[j] > pivot) {
            j--;
        }
        if (i <= j) {
          //Interchange i and j
            shuffle(values, i, j); 
            i++;
            j--;
        }
    }
    return i;
}

//Calling QuickSortFunction on the array of values
let values = [50,30,70,20,90,10];
var sortedArray = quickSort(values, 0, values.length - 1);
console.log(sortedArray);