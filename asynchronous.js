console.log("Asynchronous programming in Java");

/*
3 ways to do async programming

1. async / await
2. callback
3. Promise
*/

/* callback */
// function logic() {
//   for (let index = 1; index < 5000 + 1; index++) {
//     console.log(`Printing ${index}`);
//   }
//   console.log("Done Printing");
// }

// // logic(); // -> Normal call
// setTimeout(logic, 1);
// console.log("Other DOM related stuffs");

// let users = [
//   { id: 10, name: "Karim" },
//   { id: 12, name: "Sayan" }
// ];

// function getUsers() {
//   setTimeout(() => {
//     let list = '';

//     for (const user of users) {
//       list += `<li>${user.id}, ${user.name}</li>`;
//     }

//     let resultSet = window.document.getElementById("show-data");
//     resultSet.innerHTML = list;
//   }, 1000);
// }

// function setUser(callbackfn) {
//   setTimeout(() => {
//     users.push({ id: 14, name: "Tapas" });
//     console.log("User Inserted");
//     callbackfn();
//   }, 3000);
// }

// setUser(getUsers);
// getUsers();

/* Promise */
// const customFetch = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const error = false;

//       if (error) {
//         console.error("customFetch: Your promise has not been resolved");
//         reject("The original usable error response which is actually came from server side");
//       } else {
//         console.log("customFetch: Your promise has been resolved");
//         resolve("The original usable response which is actually came from server side");
//       }
//     }, 2000);
//   });
// }

// customFetch().
//   then(res => {
//     console.log(res);
//   }).
//   catch(err => {
//     console.log(err);
//   });

let employees = [
  { empId: 10, empName: "Akash", sal: 9000 },
  { empId: 11, empName: "Tapas", sal: 6000 },
  { empId: 12, empName: "Saikat", sal: 12000 },
  { empId: 13, empName: "Manab", sal: 8000 },
  { empId: 14, empName: "Sashi", sal: 25000 }
];

function getAllEmployees() {
  return employees;
}

function setAnEmployee(employee) {
  employees.push(employee);
  return employee;
}

const customFetchGET = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;

      if (error) {
        console.error("Cannot make a GET request: 404");
        reject({ status: "not found", statusCode: 400, message: "No employee found" });
      } else {
        resolve(getAllEmployees());
      }
    }, 1000);
  });
}

const customFetchPOST = (employee) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;

      if (error) {
        console.error("Cannot make a POST request: 403");
        reject({ status: "forbidden", statusCode: 403, message: "You are not allowed to send request" });
        // resolve(setAnEmployee(employee));
      } else {
        resolve(setAnEmployee(employee));
        // reject({ status: "forbidden", statusCode: 403, message: "You are not allowed to send request" });
      }
    }, 3000);
  });
}

let emp1 = { empId: 15, empName: "Srestha", sal: 6700 };
customFetchPOST(emp1).then(res => { console.log(res) }).catch(err => { console.log(err) });
customFetchGET().then(res => { console.log(res) }).catch(err => { console.log(err) });
