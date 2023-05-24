const inquirer = require('inquirer');
const fs = require('fs');
const {Shape, Triangle, Circle, Square} = require('./lib/shapes.js')


function getLogoSVG(text, textColor, shape, shapeColor) {
    const ShapeClass = eval(shape);
    const shapeObject = new ShapeClass(shapeColor);
    return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeObject.render()}
        <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="70">${text}</text>
        </svg>
    `;
}

// Questions for logo details
async function askQuestions() {
const questions = await inquirer.prompt([
    {
    type: 'input',
    name: 'text',
    message: 'Enter up to 3 characters for your logo:',
    validate: async (input) => {
        if (input.length > 3) {
            return "Error: Too many characters. Please enter 3 characters";
        } else {
            return true;
        }
    }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for your text:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for your logo:',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for your shape:'
    }
]);
    writeToFile(questions);
}

// Write the logo file
function writeToFile(response) {
    const logoSVG = getLogoSVG(response.text, response.textColor, response.shape, response.shapeColor);
    fs.writeFile('logo.svg', logoSVG, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Logo file saved!');
        }
    });
}

askQuestions();