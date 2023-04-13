const inquirer = require('inquirer').createPromptModule();
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Questions for logo details
async function askQuestions() {
const questions = await inquirer.prompt([
    {
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