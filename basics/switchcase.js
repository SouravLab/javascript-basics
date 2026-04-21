let browser = '   SaFAri     ';

switch (browser.toLowerCase().trim()) {
    case 'chrome':
        console.log('chrome launched');
        break;
    case 'firefox':
        console.log('firefox launched');
        break;
    case 'edge':
        console.log('edge launched');
        break;
    case 'safari':
        console.log('safari launched');
        break;
    default:
        console.log('plz provide correct : ' + browser);
        break;

}

console.log('======================================');
let isActive = 11;
switch (isActive) {
    case 1:
        console.log('pass');
        break;
    case 0:
        console.log('fail');
        break;

    default:
        console.log('no resuly  : ' + isActive);
        break;
}