const fizzbuzz = require('./fizzbuzz');

describe("fizzbuzz", () => {
    test("should print 1 if they recieve 1", () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);       
    })

    test("should print fizz if they recieve 2", () => {
        const expected = "fizz";
        const result = fizzbuzz(2);
        expect(expected).toBe(result);
    });

    test("should print fizz if they reciebe a multiple of 2", () => {
        const expected = "fizz"
        const result = fizzbuzz(4);
        expect(expected).toBe(result);
    });

    test("should print buzz if they receive a multiple of 3", () => {
        const expected = "buzz";
        const result = fizzbuzz(3);
        expect(expected).toBe(result);
    });

    test ("should print buzz if they receive a multiple of 3", () => {
        const expected = "buzz";
        const result = fizzbuzz(9);
        expect(expected).toBe(result);
    });

    test ("should print buzz if they receive a multiple of 2 and 3", () => {
        const expected = "fizzbuzz";
        const result = fizzbuzz(12);
        expect(expected).toBe(result);
    });

})