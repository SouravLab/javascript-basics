// Ascii table 
// a -z:  97 to 122
//  A-Z: 65 to 95
// 0-9: 48 t0 57

let a = 'A';
console.log('A'.charCodeAt(0));//65
console.log('C'.charCodeAt(1));//NaN
console.log('AC'.charCodeAt(1));//67
console.log('C'.charCodeAt(0));//67
console.log('AC'.charCodeAt(0));//65 start from zero and 1 and 2...

console.log('A'.charCodeAt(0) + 'C'.charCodeAt(0));//132

console.log('$'.charCodeAt(0));//36
// we can not ask the ascii value for  string like abc orhhjhhg
