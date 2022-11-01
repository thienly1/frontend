
var firstName;
firstName=null; //undefined.
var username, pincode, active; // all is undefined
username= "thilyta"; //String
pincode= 123445; //number
active= true; //boolean

console.log(firstName);
console.log(username);
console.log(pincode);
console.log(active);

console.log(username+ " " + pincode);

//Backtics
console.log(`Username ${username} pincode ${pincode}`);


//JavaScript Object

var testPerson= {id:0, firstName: "", lastName: ""};
var ly= {};
ly.id= 100;
ly.firstName= "Ly";
ly.lastName="Ta";

console.log(ly);
console.log(testPerson);

ly.title= "student";
console.log(ly);

delete ly.title;
console.log(ly);

