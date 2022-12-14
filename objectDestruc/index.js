let obj = {
  name: "Jai",
  city: "Indore",
  role: "FSD",
};

// let { name } = obj;

// console.log(name); // "Jai"

let { ...jai } = obj; // it will return the whole object, NOTE:- you can give any name
console.log(jai); // {name: "Jai",city: "Indore", role: "FSD",}

// to exclude some key :-
let { name, ...rjaiole } = obj; //name will be excluded

console.log(rjaiole); // {city :"Indore", role:"FSD"}
