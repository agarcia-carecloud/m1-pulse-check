// Write a function that returns the product of 2 numbers
function product(x, y) {
  if(x === null || x === undefined || y === null || y == undefined) return false;
  return (x * y); //multiplies both parameters to return product.
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if(num%2 === 0){ //if remainder of num is 0 after modulo operator, return true.
    return true;
  }
  else return false;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if ( a > b){ //return either parameter if it is larger than the other. 
    return a;
  }
  else return b;
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if(typeof a !== "number" || typeof b !== "number" || typeof c !== "number"){
    return false;
  } 
  else if(a > b && a > c){ //conditional to check which number is larger than the others. 
    return a;
  }
  else if(b > a && b > c){
    return b;
  }
  else return c;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  if (!numbers.length){ //checks for empty array before beginning loop.
    return 0;
  }  
  else if (typeof numbers !== "object"){
    return false;
  }
  for (i = 0; i < numbers.length; i++) { 
    if(typeof numbers[i] !== "number"){
      return false;
    }
    else sum += numbers[i]; //for each element in the array, add the value to the current value of sum.
  }
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let largestNumber = 0;
  if (!numbers.length) {
    return false; //checks for empty array before beginning loop.
  }
  else if (typeof numbers !== "object"){
    return false;
  }
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > largestNumber) { //iterate through the array and update largestNumber to the value of the current largest number.
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

// Return the longest string in an array
function longestString(strings) {
  let largestString = "";
  for(let i = 0; i < strings.length; i++){
    if (strings[i].length > largestString.length){
      largestString = strings[i]; //checks if the length of the current string in the array is longer than longestString and updates the value of the variable if true.
    }
  }
  return largestString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for(let i = 0; i < wordsArr.length; i++){
    if(wordsArr.includes(word) === true){
      return true;
    } 
    else return false;
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  let uniqueWord = "";
  if(!wordsArr.length) return false;
  for(let i = 0; i < wordsArr.length; i++){
    if (i === wordsArr.indexOf(wordsArr[i]) && i === wordsArr.lastIndexOf(wordsArr[i])){
      uniqueWord = wordsArr[i];
      break;
    }
  }
  return uniqueWord;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName } ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let largestNum = 0;
  for(let i = 0; i < matrix.length; i++){
    if(matrix[0][i] > largestNum && matrix[1][i] > largestNum && matrix[2][i] > largestNum){
    largestNum = matrix[i][i];
    }
  }
  return largestNum;
}
