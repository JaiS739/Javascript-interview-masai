// let count = 0;

// let getData = () => {
//   console.log("fetching data", count++);
// };

// // debounce method will return a function just like in throttling:-
// let debounce = (fn, delay) => {
//   let timer;

//   return function () {
//     let context = this;
//     args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, arguments);
//     }, delay);
//   };
// };

// const betterFunction = debounce(getData, 500);

let count = 0;

let getData = () => {
  console.log("request to the api", count++);
};

let debounce = (fn, delay) => {
  let timer;

  return function () {
    clearTimeout(timer); // it is stopping the settimeout to execute before the delay.
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

const betterFunction = debounce(getData, 2000);
