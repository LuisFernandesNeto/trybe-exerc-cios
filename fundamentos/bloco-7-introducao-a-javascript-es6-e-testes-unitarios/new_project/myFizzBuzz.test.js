const myFizzBuzz = require('./myFizzBuzz');

test('Retorna o valor esperado', () => {
    expect( () => myFizzBuzz(15).toBe('fizzbuzz'));
}) 

test('Retorna o valor esperado', () => {
    expect( () => myFizzBuzz(3).toBe('fizz'));
}) 

test('Retorna o valor esperado', () => {
    expect( () => myFizzBuzz(5).toBe('buzz'));
}) 

test('Retorna o valor esperado', () => {
    expect( () => myFizzBuzz(8).toBe(num));
}) 

test('Retorna o valor esperado', () => {
    expect( () => myFizzBuzz('').toBe(false));
}) 
