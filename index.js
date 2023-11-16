const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require('./lib/shapes');
const {writeFile} = require("fs").promises;
var shape;

// questions array for inquirer - used to get shape, shape color, initials, and text color
const questions = [
    {
    type: "list",
    name: "shapeType",
    prompt: "Select your background shape : ",
    choices : ["Circle", "Triangle", "Square"]
    },
    {
    type: "input",
    name: "shapeColor",
    prompt: "Color of shape : "},
    {
    type: "input",
    name: "initials",
    prompt: "Enter up to 3 characters : "},
    {
    type: "input",
    name: "textColor",
    prompt: "Color of the text : "}
];

// get logo parameters from user
inquirer.prompt(questions)
    .then( answers => {
        switch(answers.shapeType) {
            case "Circle" : 
                shape = new Circle(answers.shapeColor);
                break;
            case "Square" :
                shape = new Square(answers.shapeColor);
                break;
            case "Triangle" : 
                shape = new Triangle(answers.shapeColor);
                break;
        } 
        let outputStr = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                ${shape.render()}

                <text x="150" y="${shape.yVal}" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.initials.substring(0,3)}</text>

            </svg>`;
        writeFile(`./output/${answers.initials.substring(0,3)}-${answers.shapeType}-${answers.shapeColor}-${answers.textColor}.svg`, outputStr);
    })

