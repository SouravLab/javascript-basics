// condition? expresssion if true: expressionFalse

let age = 20;
let result = age > 18 ? 'Adult' : 'Minor';
console.log(result);

let a = 10;
a > 5 ? console.log('hi') : console.log('bye');

let browser = ' chrome';
// dificult to debug so not recomended
browser === 'chrome' ? console.log('chrome') : console.log('ie') ? console.log('run firefox') : console.log('no browser found');

// used for function
let isLoggedIn = true;


isLoggedIn ? showDashboard() : redirectToLogin();

function showDashboard() {
    console.log('go to showdashBoard page');
}


function redirectToLogin() {
    console.log('go to login page');
}




