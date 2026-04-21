let num = 9007199254740991;
console.log(num + 22);//

console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991


let number = 10n;// any number add n means bignumber
console.log(typeof (number));//bigint
// can i add to max safenumber?

// bigint +bigint
let number1 = 9007199254740991n;//TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(number1 + 1n);// we need to add n for both bigint to n

//console.log(12.3n + 12.33n);// not allowed

console.log(BigInt(10) + 10n);// 20n
// also we can decalre let x = BigInt(123);

//Cannot use with Math methods
//Math.sqrt(16n) // error

console.log(20n + 10n);
