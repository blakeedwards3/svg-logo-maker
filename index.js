const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Questions for logo details
const questions = [{
    type: 'input',
    name: 'text',
    message: 'Enter up to 3 characters for your logo:',
    validate: async (input) => {
        if (input.length > 3) {
            return "Error: Too many characters.";
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
];
