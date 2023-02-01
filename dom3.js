let a = window.document.getElementById("firstChild");
console.log(a);
console.log(a.className);
console.log(a.classList);
console.log(a.classList.value);
console.log(a.classList.values().next());
console.log("There are " + a.classList.length + " classes");

let firstChildDiv = window.document.getElementById("firstChild");
firstChildDiv.innerHTML = `
<b>Harry is a good boy</b>
<br /><br />
`;
firstChildDiv.style.color = "red";
firstChildDiv.style.fontFamily = "cascadia code";

let link1 = window.document.links[0];
console.log(link1);
link1.style.color = "blue";
link1.style.fontFamily = "fira code";

let form = window.document.querySelector("form");
console.log(form);
console.log(form.textContent);
console.log(form.innerHTML);

let allChildclasses = window.document.getElementsByClassName("child");
console.log(allChildclasses);
console.log(allChildclasses[0]);
console.log(window.document.querySelectorAll("#firstChild")[0]);
let only1Form = window.document.querySelectorAll("form")[0];
let input = only1Form.querySelector("input");
input.value = "This is given by JS";
// only1Form.submit();
let button = window.document.querySelector("button");
button.style.background = "yellow";
button.style.borderColor = "red";
button.style.color = "red";