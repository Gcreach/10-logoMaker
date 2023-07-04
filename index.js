const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes');
const SVG = require("./lib/svg");
const fs = require("fs");

// Prompts user to go through list 
inquirer.prompt([
    {
        type: 'list',
        message: 'What shape do you want?',
        choices: ['Circle', 'Square', 'Triangle'],
        name: "shape",
    },
    {
        name: "color",
        mesage: "Enter the shape color. Enter a color name or hexadecimal",
        type: "input",
    },
    {
        name: 'text',
        type: 'input',
        message: 'Enter 3 characters.'
    },
    {
        type: 'input',
        message: 'What text color do you want? Enter a color name or hexadecimal',
        name: "textColor",
    },  
])
.then(answers => {
   const shape = createShape(answers); 
   const svg = new SVG(answers.text, answers.textColor, shape);
   console.log(svg.render());
   //Creates the logo in the dist folder
   fs.writeFile("./dist/logo.svg", svg.render(), function(err) {
    if(err) throw err
    console.log("File succesfully written");
   })
})

//Will choose a shape class determined by what the user picks
function createShape({shape, color}) {
if (shape === 'Circle') {
    return new Circle(color);
}
else if (shape === 'Triangle') {
    return new Triangle(color);
}
else if (shape === 'Square') {
    return new Square(color);
}
}