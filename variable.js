var a;
console.log(a);

var age = 89;
var dollar = 45.78;
var firstName = "Supratim";
var person = { name: "Sayan Dhar", college: "IEM" };

console.table(person);
console.log(age, dollar, firstName, person);

// Variables can starts with letter, _ or $
var city = "Kolkata";
var _city = "Pune";
var $city = "Bengaluru";
console.log(city, _city, $city);

const ownerName = "Rajesh";
// ownerName = "Raju"; // -> This will throws an error
console.log(`The owner is ${ownerName}`);
// const empty; // -> const variable must be initialized

// var vs let
var fruit = "Apple";
{
  var fruit;
  console.log(`Inside the block ${fruit}`);
  fruit = "Mango";
}
console.log(`Outside the block ${fruit}`);

var flower = "Lily";
{
  let flower;
  console.log(`Inside the block ${flower}`);
  flower = "Rose";
}
console.log(`Outside the block ${flower}`);

const arr = [4325, 6757, 90];
arr.pop();
console.log(arr);
arr.push(78);
console.log(arr);

const ob = { name: "Sayan", age: 20, hobby: "MEAN" };
console.log("The object will be printed is const in nature");
console.table(ob);
ob.name = "Arijit";
console.table(ob);