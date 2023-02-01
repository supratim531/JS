let doc = window.document;
let a = doc.all;
console.log(a);
a = doc.body;
console.log(a);
a = doc.forms[0];
console.log(a);

let documentHTMLAllCollection = window.document.all;
Array.from(documentHTMLAllCollection).forEach(element => {
  console.log(element);
});

let allLinks = window.document.links[0];
console.log("Here is link 1:", allLinks);

console.log(window.document.images);
console.log(window.document.scripts[0]);
let allScripts = window.document.scripts;
Array.from(allScripts).forEach(element => {
  console.log(element);
});

let jkasdas = () => {
  console.log("This");
};

function jkasdas() {
  console.log("This");
}