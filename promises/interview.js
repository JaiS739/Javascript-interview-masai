// The difference is that in an async function, JavaScript will pause the function execution until the promise settles. With then(), the rest of the function will continue to execute but JavaScript won't execute the .then() callback until the promise settles.

const api = "https://reqres.in/api/users/2";

let call_then = () => {
  console.log("before fetch");
  fetch(api)
    .then((res) => res.json())
    .then((data) => console.log(data.data));
  console.log("after fetch");
};

let call_async = async () => {
  console.log("before fetch");
  let res = await fetch(api);
  let data = await res.json();
  console.log(data);
  console.log("after fetch");
};

console.log("before function call");
// call_then();
call_async();
console.log("after function call");

// incase of then():-
// before function call
//  before fetch
// after fetch
// after function call
// data

// incase of await:-
// before function call
// before fetch
// after function call
// data
// after fetch
