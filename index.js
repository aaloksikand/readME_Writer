
import inquirer from 'inquirer'; //Importing inquirer according to updated version of inquirer requirements

import fs from 'fs'; //Importing fs

function init() //creating the init function
{
inquirer  //using the inqurer prompt
  .prompt([
    {
      type: 'input',  //user input for Project Title
      message: 'What is your project title?',
      name: 'projectTitle',  //See Acceptance Criteria: "WHEN I enter my project title..."
    },
    {
      type: 'input', //user input for Description
      message: 'Please enter a short description of your project.',  //See Acceptance Criteria: "// WHEN I enter a description . . ."
      name: 'description',
    },
    {
      type: 'input',  //user input for Installation Instructions
      message: 'Please enter your project installation instructions here.',
      name: 'installationInstructions', //See Acceptance Criteria: ". . . WHEN I enter installation instructions . . .""
      },
    {
      type: 'input',  //user input for project usage
      message: 'Please enter your project usage information here.',
      name: 'usageInformation',  // WHEN I enter . . . usage information . . .""
      },
    {
      type: 'input',  //user input for contribution guidelines
      message: 'Please enter your project contribution guidelines here.',  // WHEN I enter . . . contribution guidelines 
      name: 'contributionGuidelines', // WHEN I enter . . .contribution guidelines . . .
      },
    {
      type: 'input',  //user input for project test instructions
      message: 'Please enter your project test instructions here.',
      name: 'testInstructions',  // WHEN I enter . . . test instructions
      },
    {
      type: 'checkbox',  //checkbox input for different license choices
      message: 'Please choose a license for your application from the following list of options.',  // WHEN I choose a license for my application from a list of options
      name: 'licenseChoice',
      choices: ['Apache', 'The MIT License', 'Mozilla'],
    },
    {
      type: 'input',  //github username
      message: 'Please enter your Github username.',
      name: 'githubUrl',
      
    },  
    {
      type: 'input',  //email address
      message: 'Please enter your email address.',
      name: 'emailAddress',
    }
  ])

.then((data) => {
  const filename = `${data.projectTitle.toLowerCase().split('').join('')}.md`; //Generates readme.md file using project title as a name
  const readMe = generateReadme(data);
  fs.writeFileSync(filename, readMe, (err) =>
err ? console.log(err) : console.log('Success!')
)
})
}

function displayBadge(licenseChoice){  //displaybadge function depending on user choice of Apache, MIT or Mozilla
  let licenseBadge;
  if (licenseChoice = 'Apache') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]' //paste Apache here
  }
  else if (licenseChoice = 'The MIT License') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]' //paste MIT here
  }
  else if (licenseChoice = 'Mozilla') {
    licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)]' //paste Mozilla here
  }
  return licenseBadge;
}
function generateReadme(data)
{
 return `# ${data.projectTitle} ${displayBadge(data.licenseChoice)}

## Project Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installationInstructions}

## Usage
${data.usageInformation}

## License
${data.licenseChoice} 

## Contributing
${data.contributionGuidelines}

## Tests
${data.testInstructions}

## Questions
For additional questions, please contact https://www.github.com/${data.githubUrl} or ${data.emailAddress}.  Thank you.`;
}

init();






