const myRemove = require('./myRemove');

test('Retorna o array esperado', () => {
    expect( () => myRemove([1, 2, 3, 4], 3).toBe([1, 2, 4]));
}) 

test('Não retorna o array esperado', () => {
    expect( () => myRemove([1, 2, 3, 4], 3).Not.toBe([1, 2, 3, 4]));
})

test('Retorna o array esperado', () => {
    expect( () => myRemove([1, 2, 3, 4], 5).toBe([1, 2, 3, 4, 5]));
}) 