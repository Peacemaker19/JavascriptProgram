const person = { name: 'Peace', age: '21', greet: () => { return "Hi " + person.name } }
console.log(person);
console.log(person.greet());
//Object destructuring
let { name, age } = person;
console.log(name, age);

//Array destructuring
const hobbies = ['Cricket', 'Football', 'Baseball']
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

//Object destructuring while using function
const detail = ({ name }) => { console.log(name) }
detail(person);