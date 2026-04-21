// 8 falsy values in js:
// fasle
//0
//-0
//0n --BigInt
//"",'' -- empty string
// undefined
//null

if (NaN) {// if wright false then it will be dead code
    console.log('bye');
} else {

    console.log('hi');
}
console.log('=============================');
if (5) {// coniser all + numeric value greater than 0 as true 
    console.log('hello');
}

if ('sourav') {// inside double code is a string and true
    console.log('hello');
}

if ('0') {// inside double code is a string and true
    console.log('hello');
}

if (Infinity) {// true
    console.log('hello');
}

if (function () { }) {// true
    console.log('hello');
}

if (new Date) {// object also true
    console.log('hello');
}

if ("  ") {// object also true
    console.log('hello');
}

if ('admin') {
    console.log('hello');
}

console.log('=============================');

// but this is not the best practice , we should use === for avoid confusion
let browser = 'chrome';

if (browser) {
    console.log('Pass');
} else {

    console.log('Fail');
}

// use case of switch case
// 1. cross browser testing
// 2.  cross platform os-- win/linux/mac
//3 . cross sytem loacl remote
// 4. cross env : dev/qa/ stage
// 5. RBAC- role base access : login amagon- admin .seller.vendor, distributor, guest
// 6. locator stategy : id, name, role, test,xpath, css
// testing type: sanity, smoke, regression, ui, api, mobile
// uber app: booking type : min,sedan,suv,bike in uber or ola
// payment: upi/paypal/credit card,wire, stripe,cash
// loan type: home loan/carloan/education loan



// when we will use if else
    if (user===admin){

    }
