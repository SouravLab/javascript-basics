var a =10;
function test(){
    var a=20;
    console.log(a);//20
    if (true){
var a =30;
console.log(a);//30
    }
    console.log(a);//30
}

test();
console.log(a);// 10 global variable a is not affected by the function test() and its inner block..

console.log("===============================================");     
console.log("===============================================");    
//redclaration is allowed in JavaScript, but it can lead to confusion and bugs. 
// When you redeclare a variable using var, it will overwrite the previous declaration and value.
//  In the example below, we declare a variable number and assign it a value of 10. Then we redeclare the same variable number and assign it a new value of 20. 
// The previous value of 10 is lost, and number now holds the value 20.
var number = 10;// 
var number = 20;// m
console.log(number); 
//reassignment is allowed in JavaScript, and it allows you to change the value of a variable after it has been declared.
var t =10;
t =20;
// hosting: before declaring the var, you are trying to access it, it will return undefined because of hoisting.
console.log(num)// undefined    
var num = 10;
//console .log(num); // 10

console.log("=======================let concept==========================");    

// let is always block scope
let b =20;//global variable
let pop = 60;
function test1(){
    console.log(pop);//60
    //console.log(b);//Cannot access 'b' before initialization--error
    let b =30; // hosting: before declaring the let, you are trying to access it, it will throw a ReferenceError 
    console.log(b);//30
    if (true){
        let b =40;
        console.log(b);//40
    }
 console.log(b);
}
test1();
 console.log(b);

 console.log("==============================================");    
//console.log(age); // Cannot access 'age' before initialization
let age =20;



console.log("==============================================");  

// duplicate declaration is not allowed with let, it will throw a SyntaxError.
//let name = "John";
//let name = "Doe"; // SyntaxError: Identifier 'name' has already been declared 
// reassignment is allowed with let, you can change the value of a variable declared with let.
let city = "New York";
city = "Los Angeles";// string is allowed double quotes or single quotes
console.log(city); // Los Angeles       

console.log("==============================================");  
//undefined vs error 
//console.log(os); //can annot access 'os' before initialization foe let but for var it will return undefined because of hoisting.
//let os ="windows";
//var os ="windows";//undefined

let tes;
//tes = 10;
//console.log(tes); // undefined

console.log("=======================const....values======================="); 
// const t2 =10;
// t2 =20;// TypeError: Assignment to constant variable. reassignment is not allowed with const.
// console.log(t2);





