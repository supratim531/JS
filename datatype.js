console.log("All data types:");
let a = 34;
let b = 34.12;
let c = false;
let d = "Supratim";
let e = [12, 56, 78, "UI"];
let f = { name: "Adil", age: 19 };
let g = null;
let h = undefined;

console.log(`Data type of ${a} is ${typeof a}`);
console.log(`Data type of ${b} is ${typeof b}`);
console.log(`Data type of ${c} is ${typeof c}`);
console.log(`Data type of ${d} is ${typeof d}`);
console.log(`Data type of ${e} is ${typeof e}`);
console.log(`Data type of ${f} is ${typeof f}`);
console.log(`Data type of ${g} is ${typeof g}`);
console.log(`Data type of ${h} is ${typeof h}`);

let arr = [43, false, undefined, "String", null, { an: 90, bn: 90 }];
let ob = { harry: 89, rohan: 90, shubham: 78 };
function emptyFunction() { }
let date = new Date();

console.log(`Data type of ${arr} is ${typeof arr}`);
console.log(`Data type of ${ob} is ${typeof ob}`);
console.log(`Data type of ${emptyFunction} is ${typeof emptyFunction}`);
console.log(`Data type of ${date} is ${typeof date}`);

let number = "3245.65";
console.log(`Number is ${parseInt(number)}`);
console.log(`Number is ${parseFloat(number)}`);

let number2 = 65.12345;
console.log("toFixed:", number2.toFixed());
console.log("toPrecision:", number2.toPrecision());
console.log("toExponential:", number2.toExponential());
console.log("toFixed:", number2.toFixed(1));
console.log("toPrecision:", number2.toPrecision(3));
console.log("toExponential:", number2.toExponential(4));