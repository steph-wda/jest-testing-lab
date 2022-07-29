const myFunctions = require('./functions')



test('should return 2', () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test('should return a greeting with supplied name', () => {
    expect(myFunctions.greeting('Stephanie')).toBe('Hello, Stephanie.')
})


describe('Math Functions', () => {
    test('should return the sum of two numbers', () => {
        expect(myFunctions.add(5,3)).toBe(8);
        expect(myFunctions.add(5,3)).toBeTruthy();
    });

    test('should return the product of two numbers', () => {
        expect(myFunctions.multiply(5,3)).toBe(15);
        expect(myFunctions.multiply(5,3)).toEqual(15);
    });

    test('should return the quotient of two numbers', () => {
        expect(myFunctions.divide(6,3)).toBe(2);
        expect(myFunctions.divide(6,3)).not.toBe(3)
    });

    test('should return the difference of two numbers', () => {
        expect(myFunctions.subtract(5,3)).toBe(2);
        expect(myFunctions.subtract(5,3)).not.toBeNaN()
    })

})








