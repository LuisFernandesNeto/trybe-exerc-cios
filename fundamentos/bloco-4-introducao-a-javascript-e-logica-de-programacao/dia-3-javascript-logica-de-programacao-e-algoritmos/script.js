// Exercício 1

let fatorial = 10;

let resultado = fatorial;

for (let n = 1; n < fatorial; n += 1) {
    resultado *= n;
}

console.log(resultado);


// Exercício 2

let word = 'tryber';

let newWord = "";

for (let i = word.length - 1; i >= 0; i -= 1) {
    newWord += word[i];
}   

console.log(newWord);

// Exercício 3

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = '';

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maior.length) {
        maior = array[i];
    }
}

console.log(maior);


// Exercício 4

let numero = 50;
let maiorNumero = 0;

for (n = 2; n <= numero; n += 1) {
    let primo = true;
    for (let divisor = 2; divisor < n; divisor += 1) {
        if (n % divisor === 0) {
            primo = false;
            break;
        }
        if (primo) {
            maiorNumero = n;
        }
    }
}
console.log(maiorNumero);