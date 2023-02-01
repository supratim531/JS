console.log("Fake API Example");
console.log("-----------------------------------------------------------------");

let showData = window.document.getElementById("show-data");
let getDataButton = window.document.getElementById("get-data");
let setDataButton = window.document.getElementById("set-data");
let setDataBar = window.document.getElementById("set-data-bar");

// console.log(showData);
// console.log(getDataButton);
// console.log(setDataButton);
// console.log(setDataBar);

const getDataOnClick = () => {
  const xhr = new XMLHttpRequest();
  const url = `http://dummy.restapiexample.com/api/v1/create`;

  xhr.open("GET", url, true);
  // xhr.onprogress = function () {
  //   console.log("Processing...");
  // }
  xhr.onload = function () {
    let statusCode = this.status;
    console.log(`statusCode is ${statusCode}`);
    console.log(`Header is ${this.getAllResponseHeaders()}`);

    if (statusCode === 200) {
      let result = JSON.parse(this.responseText);
      console.log(result);
      let showDataInnerHTML = '';
      let employees = result.data;

      for (const employee of employees) {
        showDataInnerHTML += `<li>${employee.employee_name}, ${employee.employee_salary}, ${employee.employee_age}</li>`;
      }

      showData.innerHTML = showDataInnerHTML;
    } else {
      showData.innerText = "DABBA";
      console.log("Some Error Occurred");
    }
  }
  xhr.send();

  console.log("Processing...");
};

const setDataOnClick = () => {
  const xhr = new XMLHttpRequest();
  const url = "https://dummy.restapiexample.com/api/v1/create";

  xhr.open("POST", url, true);
  // xhr.setRequestHeader("Content-type", "application/json");
  let data = { "name": "test", "salary": "123", "age": "23" };
  xhr.onload = function () {
    let statusCode = this.status;
    console.log(`statusCode is ${statusCode}`);
    console.log(`Header is ${this.getAllResponseHeaders()}`);

    if (statusCode === 200) {
      let result = JSON.parse(this.responseText);
      console.log(result);
    } else {
      console.log(this.responseText);
      console.log("Some Error Occurred");
    }
  }
  xhr.send(data);

  console.log("Processing...");
};

setDataButton.addEventListener("click", setDataOnClick);
getDataButton.addEventListener("click", getDataOnClick);
