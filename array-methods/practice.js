// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics
// reduce
// etc ..

// Write atleast 10 different question for every method.

var pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];
//for each
pizzas.forEach(function(element) {
  console.log(element);
});
//map
const map1 = pizzas.map(element => element + " spicy");
  console.log(map1);
//filter
const result = pizzas.filter(element => element.length > 9);
  console.log(result);

var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];

//for each
cuts.forEach(function(element) {
  console.log(element);
});

//map
const map1 = cuts.map(element => element + " sweet");


//filter
const result = cuts.filter(element => element.length > 9);


var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];

//for each
numbers.forEach(function(element) {
  console.log(element);
});

//map
const map1 = numbers.map(element => element * 2);


//filter 
const result = numbers.filter(element => element % 2==0);



var pokemon = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Sandshrew"
] 
//for each
pokemon.forEach(function(element) {
  console.log(element);
}); 

//map
const map1 = pokemon.map(element => element + " fiery");
  
//filter
const result = pokemon.filter(element => element.length > 9);
  


var bondMovies [
  "Dr. No",
  "From Russia with love",
  "Goldfinger",
  "Thunderball",
  "Skyfall",
  "Diamonds are Forever"
]

//for each
bondMovies.forEach(function(element) {
  console.log(element);
}); 

//map
const map1 = bondMovies.map(element => element + " awesome");
 

//filter
const result = bondMovies.filter(element => {
  return element.length > 9;
});
 

  var pizzas = [
    "Deep Dish",
    "Spicy Mama",
    "Peperoni",
    "Hawaiian",
    "Meatzza",
    "Margherita"
  ];
//foreach
pizzas.forEach(function(element){
  alert (element);
});

//map
var map1 = pizzas.map(element=> element + " fire and ice");

//filter
var result = pizzas.filter (element => element.length>6);




var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 347, 365, 23, 12, 436, 642, 66, 26];

//foreach
numbers.forEach(function(element){
    console.log(element);
})

//map
var map1 = numbers.map(element => element + 7)

//filter 
var result = numbers.filter(element => element % 2 == 0)


var mcu = [
  "Avengers:Endgame",
  "Guardians of Galaxy",
  "Iron Man",
  "Captain Marvel",
  "Thor",
  "Captain America",
  "Ant Man",
  "Spider Man"
]

//foreach
mcu.forEach(function(element){
  console.log(element);
})

//map
var map1 = mcu.map(element => element = " Each of them is awesome")

//filter 
var result = mcu.filter(element => element.length>8)


var nolanMovies = [
  "The Dark Knight",
  "TENET",
  "Interstellar",
  "Memento",
  "Dunkirk",
  "Batman Begins",
  "Insomnia"
]

//foreach
nolanMovies.forEach(function(element){
  console.log(element);
})

//map
var map1 = nolanMovies.map(element => element = " Nolan is a genius")

//filter 
var result = nolanMovies.filter(element => element.length>8)

var rushdie = [
  "The Ground Beneath Her Feet",
  "Imaginary Homelands",
  "The Golden House",
  "Quichotte",
  "Midnights Children",
  "The Satanic Verses"
]

//foreach
rushdie.forEach(function(element){
  console.log(element);
})

//map
var map1 = rushdie.map(element => element = " You have to read every one")


//filter 
var result = rushdie.filter(element => element.length>16)



var fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946]

//foreach
fibonacci.forEach(function(element){
  console.log(element);
})

//map
var map1 = fibonacci.map(element => element + 2)

//filter
var result = fibonacci.filter(element => element% 3==0)

var fruits = [
  "Apple",
  "Cherimoya",
  "Date",
  "Blueberry",
  "Blackberry",
  "Banana",
  "Apricot"
]

//foreach
fruits.forEach(function(element){
  console.log(element);
})

//map
var map1 = fruits.map(element => element + " its so sweet")

//filter 
var result = fruits.filter(element => element.length>16)

var queenAlbums = [
  "Made in Heaven",
  "News of the World",
  "Hot Space",
  "Sheer Heart Attack",
  "Innuendo",
  "A Night at the Opera"
]

//foreach
queenAlbums.forEach(function(element){
  console.log(element);
})

//map
var map1 = queenAlbums.map(element => element + " is greatest of all times")

//filter 
var result = queenAlbums.filter(element => element.length>9)

var numberSeries = [16, 47, 64, 72, 76, 78, 79]

//foreach
numberSeries.forEach(function(element){
  console.log(element);
})

//map
var map1 = numberSeries.map(element => element + 7)

//filter 
var result = numberSeries.filter(element => element % 2 == 0)


var radioHead = [
  "Pablo Honey",
  "Amnesiac",
  "In Rainbows",
  "The Bends",
  "Kid A",
  "OK Computer"
]

//foreach
radioHead.forEach(function(element){
  console.log(element);
})

//map
var map1 = radioHead.map(element => element + " is greatest of all times")

//filter 
var result = radioHead.filter(element => element.length>9)