/* const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [greeting, printGreeting] = saudacoes;

console.log(printGreeting(greeting)); */

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';



[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água