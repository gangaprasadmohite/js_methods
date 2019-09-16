var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.

var lengthArray = [];
var num = 0;
var longestString = "";
words.forEach(function(element) {
  if (element.length > num) {
    num = element.length;
    longestString = element;
  }
});
// This will return the first occurence of longest word.



var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.

var reducer = (accumulator, currentValue) => accumulator + currentValue;
var sum1 = numbers1.reduce(reducer);

var avg1 = sum / numbers1.length;
avg1; // 8.7

var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers


var sum2 = 0;
function averageNumbers(numArray) {
  numArray.forEach(function(element) {
    sum2 += element;
  });
  return sum2 / numArray.length;
}
averageNumbers(numbers2); // 48 / 8 = 6.

var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

var word2len = 0;
function avgWords(words2) {
  words2.forEach(function(element) {
    word2len += element.length;
  });
  var wordAvg = word2len / words2.length;
  return wordAvg;
}
avgWords(words2); // 5.3