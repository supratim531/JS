console.log("This is about DOM (Document Object Model)");

// window.alert("This comes from alert");
// promptResult = window.prompt("This comes from prompt");
// confirmResult = window.confirm("This comes from confirm");
// console.log(`Prompt gives us ${promptResult}`);
// console.log(`Confirm gives us ${confirmResult}`);

let windowObject = window;
console.log(windowObject);
let documentObject = window.document;
console.log(documentObject);

let chromeInnerWidth = window.innerWidth;
let chromeInnerHeight = window.innerHeight;
console.log(chromeInnerHeight, chromeInnerWidth);

let residence = window.location;
console.log(residence, residence.toString());

let windowHistory = window.history;
console.log(windowHistory);

// windowHistory.go(-1); // -> Provide a number in param to go that exact location
// windowHistory.back(); // -> Acts like back button on top
// windowHistory.forward(); // -> Acts like forward button on top