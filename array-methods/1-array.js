// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers

var maxNum = Math.max(...numbers);
console.log(maxNum);

// Find longest string in strings

var lengthArray = [];
var num = 0;
var longestString = "";
strings.forEach(function(element) {
  if (element.length > num) {
    num = element.length;
    longestString = element;
  }
});

// Find all the even numbers

var evenArray = numbers.filter(element => element % 2 == 0);
console.log(evenArray); // [12, 4, 18, 6]

// Find all the odd numbers

var oddArray = numbers.filter(element => element % 2);
console.log(oddArray); // [1, 9, 7, 11, 3, 101, 5]

// Find all the words that contain 'is' use string method 'includes'

var containsIs = strings.filter(element => element.includes("is"));
console.log(containsIs);

// Find all the words that contain 'is' use string method 'indexOf'

var arr = [];
var containsIsss = strings.forEach(function(element) {
	if (element.indexOf("is") != -1) {arr.push(element);}
});
arr; // ["this", is]

// Check if all the numbers in numbers array are divisible by three use array method (every)

var divisibleByThree = numbers.every(function(element) {element % 3 == 0});
divisibleByThree // false

//  Sort Array from smallest to largest

var sortStr = strings.sort();
var numArray = numbers.sort(function (a, b) {return a-b;});

sortStr; // ["a", "collection", "is", "of", "swastik"]
numArray; // [1, 3, 4, 5, 6, 7, 9, 11, 12, 18, 101]

// Remove the last word in strings

strings.pop();
strings // ["this", "is", "a", "collection", "of"]

// Add a new word in the array

strings.push("newWord");
strings // ["this", "is", "a", "collection", "of", "newWord"]

// Remove the first word in the array

strings.shift();
strings // ["is", "a", "collection", "of", "newWord"]

// Place a new word at the start of the array use (upshift)

strings.unshift("Hello");
strings // ["Hello", "is", "a", "collection", "of", "newWord"]

// Make a subset of numbers array [18,9,7,11]

var subSet = numbers.slice(3, 7);
subSet; // [18, 9, 7, 11];

// Make a subset of strings array ['a','collection']

var subStr = strings.slice(3, 7);
subStr; // ["a", "collection"]

// Replace 12 & 18 with 1221 and 1881

numbers.splice(3, 1, 1881);
numbers.splice(1, 1, 1221);

numbers; // [1, 1221, 4, 1881, 9, 7, 11, 3, 101, 5, 6]

// Replace words with string in strings array

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'

var startWithJ = customers.filter(element => element.firstname.startsWith('J'));
startWithJ;

// Create new array with firstname and lastname

var nameArray = [];
var name = customers.forEach(function(element) {
  nameArray.push(`${element.firstname} + ${element.lastname}`);
});
nameArray; // ["Joe Blogs", "John Smith", "Dave Jones", "Jack White"]

// Sort the array created above alphabetically

nameArray.sort(); // ["Dave Jones", "Jack White", "Joe Blogs", "John Smith"]