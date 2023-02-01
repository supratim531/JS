let arr = [432, 65, 8];
for (let i in arr) console.log(i);
for (let i in arr) console.log(arr[i]);
for (let i = 0; i < arr.length; ++i) console.log(arr[i]);

arr.forEach(function (element) {
  console.log(`The array element is ${element}`);
});

arr.forEach(function (element, index, array) {
  console.log(element, index, array);
});

let ob = {
  firstName: "Supratim",
  lastName: "Das",
  age: 21,
  college: "HETC"
};
for (const key in ob) {
  console.log("The key is " + key);
  let value = ob[key];
  console.log(`The ${key} of ob is ${value}`);
}