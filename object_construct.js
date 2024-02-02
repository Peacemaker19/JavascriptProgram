// Object in Javascript works on call by reference
const person = {
    name: "Smith",
    field: "Computer Science and Engineering",
    age: () => { return 2024 - 2000 }

}
console.log(person.age());
person.age = 29;
console.log(person.age);

/* Using function parameter to pass value as per user
 const person={
     name: "Smith",
     field: "Computer Science and Engineering",
     age:(bY)=>{return 2024-bY}
    
 }
 console.log(person.age(2000));*/