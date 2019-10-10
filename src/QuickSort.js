/**
 * @link www.github.com
 * @param { values- Array of Numbers} - Is the Array of Elements that are to be sorted.
 * @param {left - Integer} - Is the variable for the Left Pointer.
 * @param {right - Integer} - Is the Variable for the Right Pointer.
 * @returns {*} - It Returns the sorted values.
 * @see - github.com
 */
function quickSort(values, left, right) {
    let index;
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

/**
 * @external
 * @param values - Is the Array of Elements that are to be sorted.
 * @param {leftIndex - Integer} - Current Position of the left pointer.
 * @param {rightIndex - Integer} - Current Position of the Right pointer.
 */
//Creating a function that will shift elements
function shuffle(values, leftIndex, rightIndex){
    let temp = values[leftIndex];
    values[leftIndex] = values[rightIndex];
    values[rightIndex] = temp;
}

/**
 *@external
 * @param {values - Integer Array} - Is the Array of Elements that are to be sorted.
 * @param {left - Integer} - Is the variable for the Left Pointer.
 * @param {right - Integer} - Is the Variable for the Right Pointer.
 * @returns {*} - It Returns the sorted values.
 */

//This Function will part the array into two parts left and right
function partvalues(values, left, right) {
    let pivot   = values[Math.floor((right + left) / 2)], //middle element
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

/**
 *
 * @type {number[]} - Original Values inserted for Sorting
 */
//Calling QuickSortFunction on the array of values
let values = [50,30,70,20,90,10];

/**
 *
 * @type {*} - It the Array used for containing Finally Sorted Elements.
 */
let sortedArray = quickSort(values, 0, values.length - 1);
console.log(sortedArray);