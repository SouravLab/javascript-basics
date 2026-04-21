//nested if condition

let marks = 97;

if (marks >= 90) {
    console.log('grade A');
    if (marks >= 95) {
        console.log('grade A++');

        if (marks === 100) {
            console.log('eligible for scholaship');
        }
        else {
            console.log('not eligible for scholaship');
        }
    }
}
else {
    if (marks >= 80) {
        console.log('grade B');
    }


    else {
        if (marks >= 70) {
            console.log('grade d');
        }
    }
}
