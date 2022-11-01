//ES6 Modern JavaScript

//let & const

let number= 10; //let is mutable
number=50;
console.log(number);

const pi= 5.1234; //const variable is immutable

//pi= 5.12 // error

const API_URL= "http://localhost:8080/api/v1/recipes";

//Scopes

function display(){
    console.log("display function has been triggered");

    var firstName= "Mai";
    console.log(firstName);
}

display();

function checknumber (input){
    const result = input % 2;

    if(result===0){
        const temp = "Hello";
        console.log("EVEN")
    }else{
        console.log("ODD");
    }
}
checknumber(7);

function sum(n1,n2){
    return n1 + n2;
}
var summarize = function (n1,n2){
    return n1+n2;
}

const modernSum = (n1,n2) =>{
    return n1 +n2;
}

const modernShorterSum = (n1,n2) => n1+n2;

console.log(modernShorterSum(2,5));
console.log(modernShorterSum(3,8));

