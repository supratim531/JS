window.localStorage.setItem("name", "Sayan");
console.log(window.localStorage.length);
// console.log(window.localStorage.getItem("ccc"));
window.localStorage.clear();

let arr = ["Sabzi", 56, { Alu: 12, Vindi: 10 }];
window.localStorage.setItem("list", JSON.stringify(arr));
console.log(JSON.parse(window.localStorage.getItem("list")));

let testArr = [432, "Sayan", { a: 12, u: 90 }, true, undefined];
window.localStorage.setItem("testArr", testArr);
window.sessionStorage.setItem("testArr", testArr);
console.log(window.localStorage.getItem("testArr"));
console.log(window.sessionStorage.getItem("testArr"));
window.localStorage.clear();
window.sessionStorage.clear();

// JSON
console.log("JSON1:", JSON.parse('[5432, 7568, "Sayan", {"op":980,"uk":908}]'));
console.log("JSON2:", JSON.stringify([5432, 7568, "Sayan", { op: 980, uk: 908 }]));