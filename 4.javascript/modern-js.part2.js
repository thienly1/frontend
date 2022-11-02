//String Methods

let firstName= "Ly";

console.log(firstName.startsWith('l')); //False
console.log(firstName.endsWith('y')); //true

console.log(firstName.toLocaleLowerCase());
console.log(firstName.toUpperCase());

//DATE
const currentDate= new Date();
console.log(currentDate);
console.log(currentDate.getDate());
console.log(currentDate.getMonth()); //start with 0, month is array
console.log(currentDate.getTime());

console.log(currentDate.toString());
console.log(currentDate.toISOString());
console.log(currentDate.toLocaleTimeString());
console.log(currentDate.toLocaleDateString());






