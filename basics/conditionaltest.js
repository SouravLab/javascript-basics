console.log(10 == 10);//true
let a = 30;
let b = 20;

if (a > b) {
    console.log('pass');
}
else {
    console.log('fail');
}
// deadcode
if (false) {
    console.log('bye!');
} else {
    console.log('hello!');//Unreachable code detected.//deadcode
}

let iselementDisplayed = false;
if (iselementDisplayed) {
    console.log('click on the element');
} else {
    console.log('wait for the element');
}


// compare : == vs ===
// == loose equality -- only check value
// === strict equality -- it will check value and type
let n1 = 10;
let n2 = '10';
console.log(n1 == n2);//true
console.log(n1 === n2);//false

console.log(false == 0);
console.log(false === 0);

console.log(true == 1);//true
console.log(true === 1);//false

console.log("" == 0);//true
console.log("" === 0);//false

console.log([] == 0);//
//console.log([]===0);////comile error 

//special case : interview question:
console.log(null == undefined);// true
console.log(typeof(null));//object
console.log(typeof(undefined));//undefined
console.log(null === undefined);// false---// object === undefined


if (null ===undefined){
console.log('element clicked');
}else {
    console.log('element is not clicked');
}

// alwyas go with === not ==
