let a = window.document.querySelector(".container");
console.log(a);
console.log(a.childNodes);
console.log(a.children);
console.log(a.children[1].nodeType, a.children[1].nodeName);

let lastChildDiv = window.document.querySelectorAll("div.child")[3];
let fullHTML = lastChildDiv.parentElement.parentElement.parentElement;
console.log(fullHTML);

// EventListener
// window.document.querySelector("h1").addEventListener("click", () => {
//   console.log("This is a click event");
//   window.location.href = "https://codewithharry.com";
// });

window.document.querySelector("h1").addEventListener("click", e => {
  let element = e.target;
  console.log(e);
  console.log("This is a click event");
  console.log(element.id);
  console.log(element.classList);
  // window.location.href = "https://codewithharry.com";
});

let btnDiv = window.document.querySelector("div.btn");
let btn1 = btnDiv.firstElementChild;
btn1.addEventListener("dblclick", (e) => {
  console.log("Dbl Clicked");
});

let changeBGRed = e => {
  window.document.body.style.backgroundColor = "red";
};
let changeBGBlue = e => {
  window.document.body.style.backgroundColor = "aqua";
};

let heading = window.document.getElementById("id");
let testBtn = window.document.getElementById("btn1");
testBtn.addEventListener("click", changeBGBlue);
heading.addEventListener("mouseenter", changeBGRed);