// 1. Post-increment example
let a = 1;
let b = a++;
// Explanation:
// - Post-increment (a++) means: 
//   1. Assign the current value of `a` to `b` first.
//   2. Then increment `a` by 1.
// So here: 
//   - `b` gets the original value of `a`, which is 1
//   - `a` is then incremented to 2

console.log(a); // 2  (a has been incremented)
console.log(b); // 1  (b got the original value of a)

let m = -99;
let n = m++
console.log(m); // -98
console.log(n);// -99

// 2. Pre-increment example
let c = 1;
let d = ++c;
console.log(c);//2
console.log(d);//2

let x = -999
let y = ++x;
console.log(x);//-998
console.log(y);//-998

//3.  post decrement:--

let p = 2;
let q = p--;
console.log(p);//1
console.log(q);//2

let k = -89;
let h = k--;
console.log(k);//-90
console.log(h);//-89

// pre decreament
let v = 2;
let z = --v;
console.log(v);//1
console.log(z);//1


let total = 100;
console.log(total++);//100 not 101
console.log(total++);//101

let num = 1000;
console.log(++num);//1001

let st = '5';
console.log(++st);//6
let tr = '5';
console.log(tr--);//5

//console.log(++'5');//SyntaxError: Invalid left-hand side expression in prefix operation

console.log(-'5' + 'A');//-5A
console.log('=============================================');

let i = 11;
let j = i++ + ++i;// 
console.log(i);//13
console.log(j);//24
// Initial: i = 11
// i++  → uses 11, then i becomes 12
// ++i  → first makes i = 13, then uses 13
// So:
// j = 11 + 13 = 24
// Final values:
// i = 13
// j = 24

console.log('=============================================');
let a1 = 11;
let b1 = 22;
let c1 = a1 + b1 + a1++ + b1++ + ++a1 + ++b1;// 33

console.log(a1);//13
console.log(b1);//24
console.log(c1);//103

console.log('=============================================');
let s = 0;
let w = s++ - --s + ++s - s--;//
console.log(s);//0
console.log(w);//0
console.log('=============================================');
let m1 = 0;
let n1 = 0;
let p1 = --m1 * --n1 * n1-- * m1--;//1

console.log(m1);//-2
console.log(n1);//-2
console.log(p1); //1

console.log('=============================================');
let d1 =1.5;
let e1 =2.5;
let res = d1++ + ++e1;
console.log(res);


