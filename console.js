console.time("flag1");
console.log("This is log");
console.log(54 + 79);
console.log(true);
console.log({ a: 12, b: 56 });
console.table({ name: "Supratim", age: 21 });
console.warn("This is warning");
console.error("This is error");
console.timeEnd("flag1");

console.time("flag2");
let sum = 0;
for (let i = 0; i < 200; ++i) sum += i;
console.log(`The sum is ${sum}`);
console.timeEnd("flag2");

console.time("assertion test takes");
let age = 566;
console.assert(age < 110, "AGE BUG");
console.timeEnd("assertion test takes");