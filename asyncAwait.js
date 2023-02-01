console.log("This is async and await");

/*
// By using async a function's return value get converted into a Promise type from general type

let me = async () => {
  console.log("I am inside me");
  return "Supratim Majumder";
};

console.log("Before calling me");
console.log(me());
console.log("After calling me");

let you = async yourName => {
  console.log("I am inside you");
  return yourName;
};

console.log("Before calling you");
console.log(you("Rashmika Mandanda"));
console.log("After calling you");
*/

/*
async function normal() {
  let a = 90;
  // let a = await 90;
  console.log("Resolved");
  return a;
}

console.log("The value of normal is:", normal());
normal().then(data => console.log("The value of a is:", data));
console.log("JS");
console.log("File");
console.log("Ends");
console.log("Here");

for (let i = 1; i <= 10; ++i) {
  console.log("i is", i);
}
*/

url = "https://api.github.com/users123";
init = { method: "GET" };

/*
let getAllGithubUsers = async () => {
  console.log("Inside API call");
  const response = await fetch(url, init);
  console.log(response);
  return response.json();
}

getAllGithubUsers().then(data => console.log(data));
console.log("EOF");
// */

// fetch(url, init).then(response => response.json()).then(data => console.log(data));
fetch(url, init).
  then(response => console.log("ALL OK", response)).
  catch(error => console.log("ALL NOT OK", error));
