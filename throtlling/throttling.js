// let loggerFunction = () => {
//   console.log("throttled function");
// };

// let throttle = (fn, limit) => {
//   let flag = true;
//   return function () {
//     let context = this;
//     let args = arguments;
//     if (flag) {
//       fn.apply(context, args);
//       flag = false;
//       setTimeout(() => {
//         flag = true;
//       }, limit);
//     }
//   };
// };

// const betterLoggerFunction = throttle(loggerFunction, 2000);
// window.addEventListener("resize", betterLoggerFunction);

// Teachnical Suneja:-

let count = 0;
const throttle_fun = () => {
  console.log("throttled", count++);
};

const throttle = (fn, delay) => {
  let prev = 0;
  return function () {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return fn();
    }
  };
};

const handleThrottle = throttle(throttle_fun, 1500);
