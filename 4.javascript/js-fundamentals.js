
// var firstName;
// firstName=null; //undefined.
// var username, pincode, active; // all is undefined
// username= "thilyta"; //String
// pincode= 123445; //number
// active= true; //boolean

// console.log(firstName);
// console.log(username);
// console.log(pincode);
// console.log(active);

// console.log(username+ " " + pincode);

// //Backtics
// console.log(`Username ${username} pincode ${pincode}`);


// //JavaScript Object

// var testPerson= {id:0, firstName: "", lastName: ""};
// var ly= {};
// ly.id= 100;
// ly.firstName= "Ly";
// ly.lastName="Ta";

// console.log(ly);
// console.log(testPerson);

// ly.title= "student";
// console.log(ly);

// delete ly.title;
// console.log(ly);

//JavScript function
//Syntax function functionName(){}

// Operators in JS

var n1 =100;
var n2= "100";
console.log(n1==n2) //true : compares content/value
console.log(n1===n2) //false : compares content of variable + type

//If Statement
if(n1===n2){
    console.log("Numbers are same")
}else{
    console.log("Numbers are not same")
}

//Ternary Operator -> condition?expression_1 :expression 2

var resultOfOperator = (n1===n2) ?"Numbers are same": "Numbers are not same";

console.log(resultOfOperator);
