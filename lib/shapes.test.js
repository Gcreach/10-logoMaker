const {Circle, Triangle, Square} = require('../lib/shapes.js');
const SVG = require('./svg.js');


 describe('isCircle', () => {
    it('should return a circle', () => {
            const circle = new Circle("blue");
            expect(circle.render()).toEqual('<circle cx="50%" cy="50%" r="90" fill="blue"/>');
    });
});

describe('isTriangle', () => {
    it('should return a Triangle', () => {
        const triangle = new Triangle("purple");
        expect(triangle.render()).toEqual('<polygon points=" 150, 18 244, 182 56, 182" fill="purple"/>')
    });
});

describe('isSquare', () => {
    it('should return a square', () => {
        const square = new Square("red");
        expect(square.render()).toEqual('<rect x="90" y"45" width="300" height="200" fill="red"/>')
    });
});

describe('isPrinting', () => {
    it('should return an svg file', () => {
        const circle = new Circle("blue");
        const svg = new SVG("txt", "white", circle);
        expect(svg.render()).toEqual(`<svg width="300" height="200"> 
        <circle cx="50%" cy="50%" r="90" fill="blue"/>
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="white"> txt</text>
        </svg>`)
    });
});


