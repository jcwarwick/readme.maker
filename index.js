// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'Enter the name of your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can someone install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Specify the project license:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeContent = `
# ${data.projectName}

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## License
This project is licensed under the ${data.license} License.
`;

    fs.writeFileSync(fileName, readmeContent);
    console.log(`${fileName} file generated successfully.`);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            writeToFile('README.md', answers);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Function call to initialize app
init();