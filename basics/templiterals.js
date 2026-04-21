// template literals -- backtick:

let mesg = `hi this is my java code
   i amlearning jasvascript
          then 
             i will learn playwright`;
console.log(mesg);

// using escape --backword slash
//let m1 ='it's my code`;// compile error
let m2 = `it\'s my code`
console.log(m2);
// with the placeholder:${}
let empname = 'Tom';
let age = 30;
console.log(`hey the ${empname} and your age is ${age}`);//hey the Tom and your age is 30
let a = 100;
let b = 200;
console.log(`the sum is ${a+b}`);
console.log(`${a},${b}`);