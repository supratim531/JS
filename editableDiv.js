let ul = window.document.getElementById("ul1");
let allLists = ul.children;

Array.from(allLists).forEach((element, index) => {
  let liNo = index + 1;
  console.log(element);
  element.addEventListener("dblclick", (event) => {
    element.innerHTML = `
    <input type="text"><button id="subBtn${liNo}">change</button>
    `;
  });
});