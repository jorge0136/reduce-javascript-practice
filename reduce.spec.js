import reduceIt from "./reduce";

describe('Homegrown reduce function', () => {

    describe('Integer manipulation reduction', () => {

    test('reduces an array by sum', () =>
        expect(reduceIt([1, 2, 3, 4, 5], (a, b) => a + b, 0)).toEqual(15))

    test('reduces an array by product', () =>
        expect(reduceIt([1, 2, 3, 4, 5], (a, b) => a * b, 1)).toEqual(120))
    });

    describe('String manipulation reduction', () => {
        // Initial array of people with wrong first names
        let people = [
            { firstName: 'michael', lastName: 'Scott' },
            { firstName: 'jim', lastName: 'Halpert' },
            { firstName: 'dwight', lastName: 'Schrute' }
        ];

        // Callback function which will fix the first name of each person
        let fixFirstNameCallbackFunction = function (accumulator, currentElement) {
        // Generate a correct person object by changing the first letter of the first name
        let fixedPerson = {
            ...currentElement,
            firstName:
                currentElement.firstName.charAt(0).toUpperCase() +
                currentElement.firstName.slice(1)
        };

        // Return the value for the next step by using the array from the previous step and
        // add the new fixed person
        return [...accumulator, fixedPerson];
        };

        test('reduces an object property, upcasing first names', () =>
            expect(reduceIt(people, fixFirstNameCallbackFunction, []))
            .toEqual([
                { firstName: 'Michael', lastName: 'Scott' },
                { firstName: 'Jim', lastName: 'Halpert' },
                { firstName: 'Dwight', lastName: 'Schrute' }
            ])
        );
    });
});
