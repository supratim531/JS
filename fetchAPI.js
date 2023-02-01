const API_KEY = "ac4ae97415ac4d7a9884a172ae77d1e7";
const NEWS_API = `https://newsapi.orgs/v2/everything?q=tesla&from=2022-12-30&sortBy=publishedAt&apiKey=${API_KEY}`;

// const fetchNewsAPI = () => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", NEWS_API, true);
//     xhr.onprogress = function () {
//       console.log("XML object is trying to fetch all of the news from the API");
//     }
//     xhr.onload = function () {
//       const status = this.status;
//       console.log(`The response status is ${status}`);

//       if (status === 200) {
//         const response = JSON.parse(this.responseText);
//         resolve(response);
//       } else {
//         console.error(`Cannot make get request from ${NEWS_API} self:404`);
//         reject(this.responseText);
//       }
//     }
//     xhr.send();
//   });
// }

// fetchNewsAPI().
//   then(response => {
//     console.log(response);
//   }).
//   catch(error => {
//     console.log(error);
//   });

// const getNewsAPI = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", NEWS_API, true);
//   xhr.send();
//   xhr.onprogress = function () {
//     console.log("News API is trying fetch news for you");
//   }
//   xhr.onload = function () {
//     const status = this.status;
//     console.log(`The response status is ${status}`);

//     if (status === 200) {
//       const response = JSON.parse(this.responseText);
//       console.log(response);
//     } else {
//       const response = this.responseText;
//       console.log(response);
//     }
//   }
//   console.log("Processing...");
// }

// getNewsAPI();

console.log("This is the tutorial of fetchAPI");

function getNewsFromFetchAPI() {
  const url = NEWS_API;
  console.log("The main progress will start");
  fetch(url).
    then(response => {
      console.log("About to get data");
      return response.json();
      // return response.text();
    }).
    then(data => {
      console.log("API calling done");
      console.log(data);
    });
}

// console.log("Before calling fetch API");
// getNewsFromFetchAPI();
// console.log("After calling fetch API");

function postSomeData() {
  const url = "https://dummy.restapiexample.com/api/v1/create";
  const params = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: `{ "name": "test", "salary": "123", "age": "23" }`
  };
  fetch(url, params).then(response => {
    console.log("The response is:", response);
    return (response.status === 200) ? response.json() : response.text();
  }).
    then(data => {
      console.log("The received data is:", data);
    });
}

postSomeData();
