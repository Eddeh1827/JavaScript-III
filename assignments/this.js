/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global Binding
 * 2. Implicit Binding
 * 3. New binding
 * 4. Explicit binding
 *
 * write out a code example of each explanation above
 */

// Principle 1
// In the global scope 'this' applies to window or global space
// code example for Window Binding

function sayName(name) {
  //console.log(this);
  return name;
}
sayName("Eddie B");

// Principle 2
// Whenever a function is called by a preceding dot 'this' refers to the object
// code example for Implicit Binding
const sayNameFunc = obj => {
  obj.sayName = function() {
   // console.log(`Hello my name is ${this.name}`);
    console.log("implicit this == obj", this);
  };
};
const me = { name: "Ryan" };

sayNameFunc(me);

// Invoke Methods on our objects
me.sayName();

// Principle 3
// 'this' refers to the specific instance when 'new' keyword is used
// code example for New Binding
function CordialPerson(greeter) {
  this.greeting = "Hello ";
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}
const newman = new CordialPerson("Newman");
const jerry = new CordialPerson("Jerry");

jerry.speak();
newman.speak();

// Principle 4
// .call or .apply makes 'this' explicitly defined
// code example for Explicit Binding

function Animal(attributes) {
  this.weight = attributes.weight;
  this.height = attributes.height;
  this.food = attributes.food;
}

Animal.prototype.eat = function() {
  console.log(`This ${this.animalCommonName} eats ${this.food}`);
};
Animal.prototype.speak = function() {
  console.log(`Dr. doggo says ${this.bark}`);
};

function Dog(dogAttributes) {
  // Connect the attributes so we can use the this keyword
  Animal.call(this, dogAttributes);
  this.name = dogAttributes.name;
  this.bark = dogAttributes.bark;
  this.animalCommonName = dogAttributes.animalCommonName;
}
// Set up our __proto__ inheritance to Animal
Dog.prototype = Object.create(Animal.prototype);

const dog = new Dog({
  name: "Dr. Doggo",
  animalCommonName: "dog",
  weight: 40,
  height: 12,
  food: "meat",
  bark: "Woof!"
});

console.log(dog.animalCommonName); // "dog"
dog.eat(); // "The dog eats meat"
dog.speak(); // "Dr. Doggo says: Woof!"
