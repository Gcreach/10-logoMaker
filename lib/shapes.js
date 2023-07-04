// Main shape class
class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<polygon points=" 150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }

}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<circle cx="50%" cy="50%" r="90" fill="${this.color}"/>`
    }

}

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<rect x="90" y"45" width="300" height="200" fill="${this.color}"/>`
    }
    
}

module.exports = {Circle, Triangle, Square};