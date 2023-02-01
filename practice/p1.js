let func1 = () => "Supratim";
console.log(func1(), typeof func1());

let func2 = async () => "Supratim";
console.log(func2(), typeof func2());

const url = "https://api.github.com/users";

function getData(url) {
  console.log("INSIDE GET DATA FUNCTION");
  const init = { method: "GET" };

  // fetch(url, init).then(function (response) {
  //   console.log("INSIDE FETCH CALL");
  //   return response;
  // }).then(data => console.log("INSIDE THEN", data)).catch(error => console.log("INSIDE CATCH", error));

  // fetch(url, init).then(function (response) {
  //   console.log("INSIDE FETCH CALL");
  //   console.log(response);
  // }).catch(function (error) {
  //   console.log("INSIDE FETCH CALL CATCH");
  //   console.log(error);
  // });

  fetch(url, init).then(response => {
    console.log("INSIDE FETCH-THEN");
    return response.json();
  }).then(data => console.log(data, typeof data))
}

getData(url);
