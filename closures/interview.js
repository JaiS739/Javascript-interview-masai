// namaste javascript:-

// NOTE :- Closure has the reference of it lexical variable NOT THE VALUE:-

// (function timeout() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// })(); // 6 6 6 6 6 (every one second)

// Explaination:- that call back function which is forming a closure inside setTimeout will have the reference of i (memory) so after for loop the value of i is 6 then setTimeout from the callback queue will be executed and the arrow function is taking the reference of i memory location which is now 6.

// to overcome this problem use let:

(function letTimeout() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
})();

// explaination:  Let is block scope variable and every time the loop will run it will have a new value and and arrow function will have the new reference every time so it will print 1 2 3 4 5;
