const { Triangle, Circle, Square } = require('./shapes');

describe('Shape classes', () => {
    describe('Triangle class', () => {
        it('should render a triangle with the given color', () => {
            const triangle = new Triangle('red');
            const expected = '<polygon points="150,18 244,182 56,182" fill="red" />';
            expect(triangle.render()).toEqual(expected);
        });
    });

    describe('Circle class', () => {
        it('should render a circle with the given color', () => {
            const circle = new Circle('blue');
            const expected = '<circle cx="150" cy="100" r="80" fill="blue" />';
            expect(circle.render()).toEqual(expected);
        });
    });

    describe('Square class', () => {
        it('should render a square with the given color', () => {
            const square = new Square('green');
            const expected = '<rect x="60" y="60" width="180" height="180" fill="green" />';
            expect(square.render()).toEqual(expected);
        });
    });
});