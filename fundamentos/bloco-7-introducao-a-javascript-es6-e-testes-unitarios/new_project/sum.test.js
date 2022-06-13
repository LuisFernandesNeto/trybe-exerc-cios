const sum = require('./sum');

test('add 4 + 5 equals 9', () => {
    expect(sum(4,5)).toBe(9);
})

test('add 0 + 0 equals 0', () => {
    expect(sum(0,0)).toBe(0);
})

test('throw error when 4 + "5"', () => {
    expect( () => sum('')).toThrow('parameters must be numbers');
})