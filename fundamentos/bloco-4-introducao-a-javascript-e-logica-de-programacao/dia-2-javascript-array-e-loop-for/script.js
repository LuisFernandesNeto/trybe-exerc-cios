// Exercício 1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1] ;

console.log(menuServices);

// Exercício 2

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf('Portfólio');

console.log(indexOfPortfolio);

// Exercício 3

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu3.push('Contato');

console.log(menu3);

// Exercício 4

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let indice = 0; indice < groceryList.length; indice += 1) {
    console.log(groceryList[indice])
}
