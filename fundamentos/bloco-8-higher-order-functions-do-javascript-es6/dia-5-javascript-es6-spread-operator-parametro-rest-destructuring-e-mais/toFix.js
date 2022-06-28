// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Banana', 'Pêra'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Uva', 'Morango', 'Kiwi'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];


console.log(fruitSalad(specialFruit, additionalItens)); 