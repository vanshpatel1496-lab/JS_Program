/*console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);*/

// console.log("2" > 1) ;
// console.log("02">1);

console.log(null>0);// false
console.log(null==0);// false
console.log(null>=0);// True

// the reason is that an equality check == and comparisons >,<,>=,<= work differently .
// Comparisions convert null to a number ,treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false .


