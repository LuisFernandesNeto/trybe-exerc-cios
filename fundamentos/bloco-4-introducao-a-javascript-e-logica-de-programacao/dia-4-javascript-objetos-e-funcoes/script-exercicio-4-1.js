let a = 10;
let b = 2;

function somatoria(a,b) {
    return a + b;
}

console.log(somatoria(a,b));

//

function minus(a,b) {
    return a - b;
}

console.log(minus(a,b));

//

function times(a,b) {
    return a * b;
}

console.log(times(a,b));

//

function divide(a,b) {
    return a / b;
}

console.log(divide(a,b));

function rest(a,b) {
    return a % b;
}

console.log(rest(a,b));

//

function greaterValue(a,b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        console.log('Os valores são iguais.');
    }
}

console.log(greaterValue(a,b));

//

let c = 8;

function greaterValue2(a,b,c) {
if (a > b && a > c) {
    return a;
} else if (b > a && b > c) {
    return b;
} else if (c > a && c > b) {
    return c;
} else {
    console.log('Os valores são iguais');
}
}

console.log(greaterValue2(a,b,c));