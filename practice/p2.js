const url = "https://api.github.com/users";
const init = { method: "GET" };

async function getData(url, init) {
  const response = await fetch(url, init);
  console.log("After await", response, typeof response);
  return response.json();
  return response;
  return response.text();
}

getData(url, init).then(data => {
  console.log("This is my data", data);
});

console.log("EOF");
