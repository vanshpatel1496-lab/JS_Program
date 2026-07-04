/*let score = "33"

console.log(typeof score); //string

let valueInNumber = Number(score) 
console.log(typeof valueInNumber); // number
console.log(valueInNumber);// 33 */

/*let score = "33abc"

console.log(typeof score); //string

let valueInNumber = Number(score) 
console.log(typeof valueInNumber); // number
console.log(valueInNumber);//NaN*/


/*let score = null

console.log(typeof score); //object

let valueInNumber = Number(score) 
console.log(typeof valueInNumber); // number
console.log(valueInNumber);//0*/


/*let score = undefined

console.log(typeof score); //undefined

let valueInNumber = Number(score) 
console.log(typeof valueInNumber); // number
console.log(valueInNumber);//NaN*/


/*let score = true

console.log(typeof score); //boolean

let valueInNumber = Number(score) 
console.log(typeof valueInNumber); // number
console.log(valueInNumber);//1*/

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isloggedIn = 1
let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "vansh" => true

// *************************Operation Conversion*************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " vansh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);