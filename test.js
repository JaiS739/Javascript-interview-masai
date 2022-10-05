let obj = {
  name: "jai",
  gender: "male",
  age: 28,
};

let clonedObj = {};

for (let key in obj) {
  clonedObj[key] = obj[key];
}

clonedObj.name = "john";

console.log(clonedObj, obj);
