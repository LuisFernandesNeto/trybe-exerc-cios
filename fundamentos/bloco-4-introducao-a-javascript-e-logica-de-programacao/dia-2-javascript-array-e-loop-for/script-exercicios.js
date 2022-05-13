let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1

for(let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

// Exercício 2

let sum = 0;

for(let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}

console.log(sum);

// Exercício 3

let media = 0;

for(let indice = 0; indice < numbers.length; indice += 1) {
    media += numbers[indice];
}

mediaAritmetica = media / numbers.length

console.log(mediaAritmetica);

// Exercício 4

if (mediaAritmetica > 20) {
    console.log("valor maior que 20");
}
else {
    console.log("valor menor ou igual a 20");
}

// Exercício 5

let maior = 0;

for(let n = 0; n < numbers.length; n += 1) {
    if(numbers[n] > maior) {
        maior = numbers[n];
    }
}

console.log(maior);

// Exercício 6

let impar = 0;

for(let a = 0; a < numbers.length; a += 1) {
    if(numbers[a] % 2 != 0) {
        impar += 1;
    }
}

if(impar > 0) {
    console.log(impar);
}
else {
    console.log("nenhum valor ímpar encontrado");
}

// Exercício 7

let menor = maior;

for(let b = 0; b < numbers.length; b += 1) {
    if(numbers[b] < menor) {
        menor = numbers[b];
    }
}

console.log(menor);

// Exercício 8

let array = [];

for(let c = 1; c <= 25; c += 1) {
    array.push(c);
}

console.log(array);

// Exercício 9


for(let conta = 0; conta < array.length; conta += 1) {
    console.log((array[conta])/2);
}