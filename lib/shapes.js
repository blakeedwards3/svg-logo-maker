// Make shape class for common functionality for child classes
class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

// Child class for Triangle
class Triangle extends Shape {
    render() {
        const points = "150,18 244,182 56,182";
        return `<polygon points="${points}" fill="${this.color}" />`;
    }
}

// Child class for Circle
class Circle extends Shape {
    render() {
        const cx = 150;
        const cy = 100;
        const r = 80;
        return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${this.color}" />`;
    }
}

// Child class for Square
class Square extends Shape {
    render() {
        const x = 60;
        const y = 60;
        const width = 180;
        return `<rect x="${x}" y="${y}" width="${width}" height="${width}" fill="${this.color}" />`;
    }
}

export default { Shape, Triangle, Circle, Square };