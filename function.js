let greetFunction = function (personName) {
  console.log(`Happy Birthday ${personName}. Wish u a very very nice HBD`);
}

let person1 = "Rohan Das";
let person2 = "Shubham Mallik";

greetFunction(person1);
greetFunction(person2);

function multipleReturns() {
  return 1, 2, 4, 65, true, null, { a: 89, b: 90 }, "Sayan Dhar";
}
console.log(multipleReturns);
console.log("This function definition is: " + multipleReturns);
console.log(multipleReturns()); // -> It can't returns like python

let func = function (name) {
  console.log(`The name ${name} will be processed further`);
}
func("Rohan");

let ob = {
  num: 90,
  str: "String",
  game: function () { return "GTA"; }
}
console.log(ob, ob["game"](), ob.game());

let stuff = ["fruit", "flower", "vagetable"];
stuff.forEach(function (element, index) {
  console.log(index, element);
});


// Arrow function syntax
let sumFunction = (n1, n2) => {
  return n1 + n2;
};
console.log(`The sum of 6 and 9 is ${sumFunction(6, 9)}`);

let array = [1, 'A', true];
array.forEach((element, idx, arr) => {
  console.log(element, idx, arr);
});
console.log(`The size of array is ${array.length}`);

let testFunction = num => {
  console.log(`The number is ${parseInt(num)}`);
  console.log("Bracket will be forgived when param count is 1");
};
testFunction(21.56346);