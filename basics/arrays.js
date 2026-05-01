// collection of different or similar data in js
// Array: []

let num = [10, 20, 30, 40];// 0-3; length =4
console.log(num);
console.log(num[-1]);// undefined
console.log(num[0]);
console.log(num[3]);
console.log(num[4]);// undefined

// lowest index =0;
// highest index = length -1;
// length = highest indexx +1

console.log(num.length);// 4
console.log("li  = " + 0);
console.log("hi=  " + (num.length - 1));

//add something
num[4] = 50;
console.log(num);
console.log(num.length);

num[10] = 100;
// number array
console.log(num);//[ 10, 20, 30, 40, 50, <5 empty items>, 100 ]
console.log(num[8]);// undefined
console.log(num[9]);// undefined
console.log(num[10]);

num[8] = 900;
console.log(num);//[ 10, 20, 30, 40, 50, <3 empty items>, 900, <1 empty item>, 100 ]

console.log('--------------------');
let stName = ['Sourav', 'Mishra'];
console.log(stName);
stName[0] = 'Hello';
console.log(stName);
stName[5] = 'testing';
console.log(stName);

console.log('--------------------');
// hetrogeniuous array
let empData = ['pratik', 30, 'SDET1', 12.53, true];
console.log(empData);
console.log(typeof empData);// object non-primitive-it will not fix type of data or size

console.log('--------------------');
const p = [10, 20, 30];
p[0] = 500;// even constant we can change the value but not allow when we reassign the p value
console.log(p);
p =[12,13,15];//TypeError: Assignment to constant variable.
console.log('--------------------');
// string array

let products =['macbook pro','imac','samsung galaxy'];
console.log(typeof products);// object--not string
console.log('--------------------');
let nm = Array.of(1,2,3);
console.log(nm);
console.log('--------------------');
let pro = Array.from('playwright');
console.log(pro);
 let ab = Array.from('1234');//[ '1', '2', '3', '4' ]
 console.log(ab);

  let lk = Array.from(1234);//[]--Creates an array from an iterable object. so not applicable for integer
 console.log(lk);


 








