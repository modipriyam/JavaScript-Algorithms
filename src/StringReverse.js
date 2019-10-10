/**
 *
 * @param value - Contains the String that is to be Reversed.
 */
function reverseString(value){

  const stringarr = [...value];
  let reversevalue = "";

  while(stringarr.length){
     reversevalue = reversevalue + stringarr.pop()
  }
  console.log("The Reverse String of " + value + " is : " + reversevalue);
}

reverseString("JavaScript");