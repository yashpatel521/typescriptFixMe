// add the type annotation to explicitly specify the type of the variable:
var isDone = false;
var lines = 42;
var name = "Anders";

// annotate the type as when it's not known
let unknownTypeVariable;

//annotate this array
var list = [1, 2, 3];

// implement color in typescript
var Color = { Red: 0, Green: 1, Blue: 2 };
var c = Color.Green;
console.log(Object.keys(Color)[c]); // "Green"

function littleHorribleAlert() {
  alert("I am a little annoying box!!");
}

var f1 = function (i) {
  return i * i;
};
// as f1 just don't specify the return type here
var f2 = function (i) {
  return i * i;
};

var f3 = (i) => {
  return i * i;
};

//change f4 to accept a string or a number as a parameter
function f4(i) {
  console.log("The value was " + i);
}

// Annotate the person objects with an interface. Some properties are optional
var person1 = { name: "Bobby", move: function () {} };
var person2 = { name: "Bobby", age: 42, move: function () {} };

// Annotate mySearch to describe a function that accepts two string parameters
var mySearch = function (src, sub) {
  return src.search(sub) != -1;
};

//annotate the constructor arguments and properties
class Point {
  x = 0;
  constructor(x, y = 0) {
    this.x = x;
    this.y = y;
  }
  dist() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

// annotate `PointPerson` to use all properties of `Person` and then add the missing required property
class PointPerson {
  constructor(name) {
    this.name = name;
  }
}

// Inheritance
// Make `Point3D` inherit from `Point`
// Don't forget to call the parent constructor
class Point3D {
  constructor(x, y, z = 0) {
    this.z = z;
  }
  dist() {
    var d = super.dist();
    return Math.sqrt(d * d + this.z * this.z);
  }
}

// Make `Tuple` Generic that it accepts to generic types as arguments

class Tuple {
  constructor(item1, item2) {
    this.item1 = item1;
    this.item2 = item2;
  }
}

// create a generic interface called Pair that accepts one generic type for two properties named item1 and item2

// create a function that will take a pair with a generic argument and return a `Tuple`
function pairToTuple(pair) {
  return new Tuple(pair.item1, pair.item2);
}

var tuple = pairToTuple({ item1: "hello", item2: "world" });

// annotate `make`, `model`, and `year` to be not mutable (read only) outside the constructor
class Car {
  make;
  model;
  year = 2018;

  constructor() {
    this.make = "Unknown Make";
    this.model = "Unknown Model";
  }
}

// annotate this array
var arrayOfAnyType = [1, "string", false];

// fix the foo object so bar and baz can be added
let foo = {};
foo.bar = 123;
foo.baz = "hello world";
