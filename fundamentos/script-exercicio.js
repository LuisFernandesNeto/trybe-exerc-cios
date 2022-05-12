// Exercício 1
const a = 12;
const b = 5;

console.log(a + b);

console.log(a - b);

console.log(a * b);

console.log(a / b);

console.log(a % b);

// Exercício 2

const c = 15;
const d = 12;

if (c > d) {
    console.log(c);
}
else {
    console.log(d);
}

// Exercício 3

const e = 15;
const f = 12;
const g = 9;

if (e > f && e > g) {
    console.log(e);
}
else if (f > e && f > g) {
    console.log(f);
}
else {
    console.log(g);
}

// Exercício 4

const valor = 2;

switch (valor) {
    case true:
    console.log("positive");
    break;

    case false:
    console.log("negative");
    break;

    default:
    console.log("zero");
}

//Exercício 5

const angulo1 = "carlos";
const angulo2 = 80;
const angulo3 = 50;

if ((angulo1 + angulo2 + angulo3) == 180) {
    console.log(true);
}
else if ((angulo1 + angulo2 + angulo3) < 180 || (angulo1 + angulo2 + angulo3) > 180) {
    console.log(false);
}
else {
    console.log("Erro, ângulo não é válido");
}

// Exercício 6

let peça = "BOI";

switch (peça.toLowerCase()) {
    case "bispo":
    console.log("diagonais");
    break;

    case "rei":
    console.log("uma casa, qualquer direção");
    break;

    case "rainha":
    console.log("qualquer posição, qualquer direção, desde que esteja livre");
    break;

    case "torre":
    console.log("linha reta, horizontal ou vertical, quantas casas quiser");
    break;

    case "cavalo":
    console.log("movimentos em L");
    break;

    case "peão":
    console.log("sempre uma casa pra frente, exceto no primeiro movimento onde pode mover duas casas para frente");
    break;

    default:
    console.log ("erro, não é uma peça de xadrez");
}

// Exercício 7

const nota = -12;

if (nota >= 90 && nota <= 100) {
    console.log("A");
}
else if (nota >= 80 && nota < 90) {
    console.log("B");
}
else if (nota >= 70 && nota < 80) {
    console.log("C");
}
else if (nota >= 60 && nota < 70) {
    console.log("D");
}
else if (nota >= 50 && nota < 60) {
    console.log("E");
}
else if (nota >= 0 && nota <= 50) {
    console.log("F");
}
else {
    console.log("Erro, programa encerrado");
}

// Exercício 8

const numero1 = 3;
const numero2 = 5;
const numero3 = 1;

if (numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0) {
    console.log(true);
}
else {
    console.log(false);
}

// Exercício 9

const numero4 = 4;
const numero5 = 2;
const numero6 = 2;

if (numero4 % 2 != 0 || numero5 % 2 != 0 || numero6 % 2 != 0) {
    console.log(true);
}
else {
    console.log(false);
}

// Exercício 10

let valorCusto = 20;
let impostoSobreCusto = (valorCusto / 100) * 20;

let valorCustoTotal = valorCusto + impostoSobreCusto;

let valorVenda = 39;
let lucro = valorVenda - valorCustoTotal;

console.log(lucro * 1000);

// Exercício 11

let salario = 3000;

let inss;

let ir;

if (salario <= 1556.94) {
    inss = (salario / 100) * 8;
}
else if (salario >= 1556.95 && salario < 2594.92) {
    inss = (salario / 100) * 9;
}
else if (salario >= 2595.93 && salario < 5189.82) {
    inss = (salario / 100) * 11;
}
else {
    inss = 570.88;
}

let salarioBase = salario - inss;

if (salarioBase <= 1903.98) {
    ir = 0;
}
else if (salarioBase >= 1903.99 && salarioBase < 2826.65) {
    ir = ((salarioBase / 100) * 7.5) - 142,80;
}
else if (salarioBase >= 2826.66 && salarioBase < 3751.05) {
    ir = ((salarioBase / 100) * 15) - 354,80;
}
else if (salarioBase >= 3751.06 && salarioBase < 4664.68) {
    ir = ((salarioBase / 100) * 22.5) - 636.13;
}
else {
    ir = ((salarioBase / 100) * 27.5) - 869.36;
}

let salarioLiquido = salarioBase - ir;

console.log(salarioBase);
console.log(salarioLiquido);