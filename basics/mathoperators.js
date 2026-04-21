
//addition (+)/concat

console.log(1 + 1);
console.log(1 + '1');//11
console.log('1' + 1);//11 concat will happen
console.log('1' + '1');//11
// substarction
console.log(1 - '1');// convert string to number ---> '1' ---->1-1=0 
console.log('5' - 3)//2
console.log('5' - '3')//2
console.log(5 - 'hello');// NaN--not an number
console.log('sourav' - 10)//Nan

//* multplication
console.log(2 * 3)//6
console.log('2' * 3)//2*3=6
console.log('2' * '3')//2*3=6
console.log('sourav' * 'mishra')//2*3=6

let price = '100';
console.log(price * 2);//200
console.log(price - 2);//98

// division

console.log(6 / 2);//3
console.log('6' / 2);//3
console.log('6' / '2');//3
console.log(9 / 2)//4.5
console.log(9.0 / 2)//4.5
console.log(9 / 2.0)//4.5

console.log(9 / 0);//Infinity divide by any number always 0
console.log(0 / 9); 0
console.log(0 / 0);//Nan
console.log("-------------");
console.log(0.0 / 0);//NaN
console.log(0.0 / 0.0);//NaN

// modulus % reminder
console.log(8%2);//0
console.log(9%2);//1
console.log('8'%2);//0
console.log('6' % '2');//0

console.log ('100' +'200');//00200

// power -- exponetial: **

console.log(2**3);//8
console.log(3**2);//8

//+ :unaryPlus operator

console.log (+'42')// it will convert string to number no parse int like java
console.log (+'42' + 5)// 47
console.log(+'800'+ '200')//800200
console.log(+'800'+ +'200')//1000


//+ :unary negation operator

console.log (-'42')//-42
console.log (-'42' +1)//-41
console.log (-'42' +-1)//-43----42 + (-1) = -43
console.log(+100+300);