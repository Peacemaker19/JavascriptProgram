// Array in javascript works on call by reference 
const hobbies = ['Cricket', 'Football', 'Soccer', 'Basketball'];
console.log(hobbies);
hobbies.push('Tennis');
console.log(hobbies);
hobbies.pop();
console.log(hobbies);
console.log(hobbies.map((hobby) => 'Hobbies: ' + hobby));
