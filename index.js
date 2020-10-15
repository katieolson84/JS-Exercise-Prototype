/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(nameArr, ageArr) {
  this.name = nameArr;
  this.age = ageArr;
  this.stomach = [];
}
Person.prototype.toString = function (){
  return (`${this.name}, ${this.age}`);
}

Person.prototype.eat = function(someFood){
  this.food = someFood;
  if(this.stomach.length <= 9){
    this.stomach.push(this.food);
    return this.stomach;
  }
  else{
     return `${this.name} is full.`;
  };
}
Person.prototype.poop = function(){
  if(this.stomach.length >=10){
    this.stomach = [];
    return `Stomach is empty`;
  }
}

let neo = new
Person("Neo", 20);
console.log(neo.name, neo.age);
console.log(neo.toString());
console.log(neo.eat("banana"));
console.log(neo.eat("apple"));
console.log(neo.eat("apple"));
console.log(neo.eat("apple"));
console.log(neo.eat("apple"));
console.log(neo.eat("apple"));
console.log(neo.eat("apple"));
console.log(neo.eat("apple"));
console.log(neo.eat("apple"));
console.log(neo.eat("apple"));
console.log(neo.eat("apple"));
console.log(neo.eat("apple"));
console.log(neo.poop());
console.log(neo.toString());


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(modelArr, milesPerGallonArr) {
  this.model = modelArr;
  this.milesPerGallon = milesPerGallonArr;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  this.tank = this.tank + (gallons);
  return `Tank: ${this.tank}`;
}

Car.prototype.drive = function(distance){
    this.odometer = this.odometer + (distance);
    this.miles = (distance) / (this.milesPerGallon);
    this.tank = (this.tank) - (this.miles);
    if(this.miles >= ((this.tank) * (this.milesPerGallon))){
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer}`;
    }
}

let batmobile = new
Car("batmobile", 20);
console.log(batmobile.milesPerGallon);
console.log(batmobile.fill(10));
console.log(batmobile.drive(50));
console.log(batmobile.drive(50));
console.log(batmobile.drive(100));


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/


function Baby(favoriteToy) {
  Person.call(this, "Lucy", 5);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype)

Baby.prototype.play = function (){
  console.log(`Playing with ${this.favoriteToy}.`);
}
let baby = new
Baby('trains');
console.log(baby.toString());
console.log(baby.favoriteToy);
console.log(baby.play());

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Refers to global object. 
  2. To set this to a certain value, you need to use call or apply.
  3. You can use bind to bound the first argument to this.
  4. You can use this and new in a constructor, new tells it what this is. 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
