class SVG {
    constructor(text, textColor, shape) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
    }
    // Renders the shape with specific components
    render() {
        return `<svg width="300" height="200"> 
        ${this.shape.render()}
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}"> ${this.text}</text>
        </svg>`
    }
}

module.exports = SVG;