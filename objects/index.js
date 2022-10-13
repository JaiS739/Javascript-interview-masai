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
// console.log(cloned, user); //{name: 'john', gender: 'male', age: 27} {name: 'jai', gender: 'male', age: 27}  this is by value

// console.log(cloned == user);

// -----------------IMPORTANT------------------------
let nameObj = {
  name: "jai",
};

// console.log(delete nameObj.name); // it will print true as it is confirming that property "name" is deleted
// if you try to delete nameObj then it will return false bcoz you can not delete Object

// -------------------merging two objects:--------------------

// merging two objects:-

let object1 = {
  name: "jai",
  age: 28,
};

let object2 = {
  profile: "sde",
  role: "full stack developer",
};

// userData it can be any variable:-

let userData = { ...object1, ...object2 }; //{ name: 'jai', age: 28, profile: 'sde', role: 'full stack developer' }

// console.log(userData);

let userData2 = { object1, ...object2 }; //{object1:{name:"jai", age:28}, profile:"sde", role:"full stack developer"}
// console.log(userData2);

// if suppose we have similar property in two objects then the last object value will be printed but the possition will be of 1st object:-

let person1 = {
  name: "jai",
  age: 28,
  education: "BE",
};

let person1_bio = {
  gender: "male",
  age: 27,
};

person = { ...person1, ...person1_bio };
// console.log(person); //{ name: 'jai', age: 27, education: 'BE', gender: 'male' } position of age is 2 (of first object) and value will be of 2nd object

// -------------------xxxxxxxxxxxxxx-------------------

let sealObject = {
  name: "jai",
};

Object.seal(sealObject); // this wont allow you to add anything. You can change the existing values
sealObject.age = 29;
// console.log(sealObject);

// ---------------------------IMPORTANT--------------------

let data = "size";
let bird = {
  size: "small",
};

// console.log(bird["size"]); // it will give small;
// console.log(bird[data]); // it will give small as data = "size" check above expamle ;
// console.log(bird.data); // it will give undefined
