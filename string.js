console.log("This is on String");

let origin = "This is original string";
origin = origin + " extra1" + " extra2";
console.log(origin);

let origin2 = "This is 2nd original string";
origin2 = origin2.concat(" extra1", " extra2", " extra3", "...");
console.log(origin2);

origin = "ThIs iS aN ORigiNAl StriNG";
console.log(origin.toLowerCase());
console.log(origin.toUpperCase());
console.log(origin[1], origin[2], origin[23]);
console.log(origin.indexOf("an"));
console.log(origin.indexOf("aN"));
console.log(`Length is ${origin.length}`);
console.log("Index of i: " + origin.indexOf("i"));
console.log("Index of last i: " + origin.lastIndexOf("i"));
origin[3] = '^';
console.log(`The original string has not been changed though DA: ${origin}`);
console.log("Char at 12 " + origin.charAt(12));
console.log(`The original string is ${origin}`);
console.log(`origin endsWith 'string' is ${origin.endsWith("string")}`);
console.log(`origin includes 'aN' is ${origin.includes("aN")}`);
console.log(`Substring 0-4 is ${origin.substring(0, 4)}`);
console.log(`Slicing last 6 letters: ${origin.slice(-6)}`);
splitedString = origin.split(' ');
console.log(splitedString);

heading = "This is Heading";
paragraph = "This is a lorem paragraph";
html =
`<h1>${heading}</h1>
<hr />
<p>${paragraph}</p>`;
console.log(html);
// document.body.innerHTML = html; // -> It changes the HTML of the current page