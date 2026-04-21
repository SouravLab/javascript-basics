//data types in javascript
//1. primitive data types: string, number, boolean, null, undefined, symbol,bigint
//2. non-primitive data types: object, array, function,class,enum

//primitive data types    
//number  
// size: 8 bytes (64 bits) for both integer and floating-point numbers
let a =10;
let b= 12.33;
let c= 100;
console.log(a); //10
console.log(typeof a); //number 
//string
// size: 2 bytes (16 bits) per character
let myname = "sourav";
let city = 'kolkata';
let num ='100'
console.log(myname);
console.log(typeof myname); 
console.log(num); //100
console.log(typeof num); //string
//there is no char type in JavaScript, a single character is also treated as a string.
let username = '';
console.log(username); //empty string
console.log("-------------");
console.log(typeof username); //string
//boolean
// size: 4 bytes (32 bits)
let flag = true;
let isActive = false;
console.log(typeof flag); //boolean
console.log(typeof isActive);
//undefined
// size: not fixed, but typically 4 bytes (32 bits) for the variable itself, and additional memory for the value when assigned
let x;
console.log(x); //undefined
let y= undefined;
console.log(y); //undefined
console.log(typeof x); //undefined

//null 
//null size not fixed, but typically 4 bytes (32 bits) for the variable itself, and additional memory for the value when assigned     
let z = null;
console.log(z); //null
console.log(typeof z); //object (this is a known bug   in JavaScript)



/*
========================================================
                 var vs let vs const
========================================================

+---------------+---------------------------+------------------------------+------------------------------+
| Feature       | var                       | let                          | const                        |
+---------------+---------------------------+------------------------------+------------------------------+
| Scope         | function scope            | block scope                  | block scope                  |
| Hoisting      | yes (undefined)           | yes (ReferenceError - TDZ)   | yes (ReferenceError - TDZ)   |
| Redeclaration | Yes                       | No                           | No                           |
| Reassignment  | Yes                       | Yes                          | No                           |
+---------------+---------------------------+------------------------------+------------------------------+

*/