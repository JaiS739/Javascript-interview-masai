// if you copy one variable into another and if you try to edit the value of cloned variable then it will be updatd in only cloned:-

let x = 5;
let b = x;
b++;

// console.log(x, b); // 5, 6

// now in case of object if you clone like this then it will impact both the objects:-
let user = {
  name: "jai",
  gender: "male",
  age: 27,
};

let clonedUser = user;

// now change the name of clonedUser:-

// clonedUser.name = "john";
// console.log(clonedUser, user);  // it will update the name in both the objects as it is pointing to the same memory location and this is by refernce:-

// now to overcome this we have to loop through the user and assigned keys to the cloned :-

let cloned = {};

for (let key in user) {
  cloned[key] = user[key];
}

cloned.name = "john";
console.log(cloned, user); //{name: 'john', gender: 'male', age: 27} {name: 'jai', gender: 'male', age: 27}  this is by value

console.log(cloned == user);
