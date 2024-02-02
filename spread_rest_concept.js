const hobbies = ['Cricket', 'Football', 'Baseball'];

//Concept of spread where copying an array one by one using spread operator
const hobby = [...hobbies];
console.log(hobbies);
console.log(hobby);

//Rest operator where we're bundling up values dynamically
const num = (...args) => { return args; }
console.log(num(1,2,3,4));