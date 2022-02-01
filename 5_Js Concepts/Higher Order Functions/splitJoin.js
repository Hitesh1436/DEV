
//Split

let str = 'pepcoder';

let partsOfString = str.split('c');
// Split function will split a string according to the passed parameter
// and will return the left and right part in an array.

console.log(partsOfString);  // Array split ['pep','oder']

//Join

let joinedStr = partsOfString.join('c');
// Join function will take an array and it will fill the parameter after each element 
//of the array with the passed parameter
// and will return the complete str
console.log(joinedStr);  // joined Str  pepcoder 