
let functions = require('./functions');

test('Return Two test', () => {
    expect(functions.returnTwo()).toBe(2);
});

test('Greeting test', () => {
    expect(functions.greeting('James')).toBe('Hello, James');
    expect(functions.greeting('Jill')).toBe('Hello, Jill');
});

test('Add test', () => {
    expect(functions.add(1, 2)).toBe(3);
    expect(functions.add(5, 9)).toBe(14);
});

describe('Math functions', () => {
    test('Subtract test', () => {
        expect(functions.subtract(2, 1)).toBe(1);
        expect(functions.subtract(1, 2)).toBe(-1);
    })

    test('Multiply test', () => {
        expect(functions.multiply(5, 8)).toBe(40);
        expect(functions.multiply(5, 5)).toBe(25);
    })

    test('Divide test', () => {
        expect(functions.divide(40, 5)).toBe(8);
        expect(functions.divide(25, 5)).toBe(5);
    })
})
