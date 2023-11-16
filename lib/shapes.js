// base Shape class - has common color, xVal, and yVal properties
class Shape {
    constructor(color) {
        // color of shape
        this.color = color;
        // x and y coords for the text - read-only
        this.xVal = 150;
        this.yVal = 125;
    }
    // change color of the shape
    setColor(color) {
        this.color = color;
    }
};

class Circle extends Shape{
    constructor(color) {
        super(color);
    };

    // returns the text string for the circle for the svg file
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    };
};

class Triangle extends Shape{
    constructor(color) {
        super(color);
        // y location of text needs to change from default for Triangle
        this.yVal=150;
    }

    // returns the text string for the triangle for the svg file
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    };
};

class Square extends Shape{
    constructor(color) {
        super(color);

    };

    // returns the text string for the square for the svg file
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    };
};

exports.Triangle = Triangle;
exports.Circle = Circle;
exports.Square = Square;