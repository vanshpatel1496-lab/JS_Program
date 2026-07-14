// Primitive
// 7 types : String , Number , Boolearn , null , undefined , Symbol  , BigInt 

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id===anotherId);


// Reference (Non-primitive)
// Array , Objects , Function 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory Summary 
// Stack (Primitive),Heap (Non-Primitive)

let myYoutubename = "VanshPateldotcom"

let anothername = myYoutubename
anothername = "VanshTheDon"

console.log(myYoutubename);
console.log(anothername);


let user1 = {
    email : "user@google.com",
    upi : "user@hdb"
}

let user2 = user1

user2.email = "vansh@google.com"


console.log(user1.email);
console.log(user2.email);

