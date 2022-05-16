let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

console.log(numbers);
  
// Exercício 2

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

console.log(numbers);

// Exercício 3

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = [];

for (let index = 0; index < numbers2.length; index += 1) {
      if (index == numbers2.length -1) {
        resultado.push(numbers2[index] * 2);
    } 
    else {
      resultado.push(numbers2[index] * numbers2[index + 1]);
      } 
}
console.log(resultado);