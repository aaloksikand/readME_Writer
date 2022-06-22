// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// Use writeFileSync method to use promises instead of a callback function
const fs = require('fs');

//
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is your project title?',  //See Acceptance Criteria: "WHEN I enter my project title..."
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a short description of your project.',  //See Acceptance Criteria: "// WHEN I enter a description . . ."
    },
    {
      type: 'input',
      name: 'installationInstructions', //See Acceptance Criteria: ". . . WHEN I enter installation instructions . . .""
      message: 'Please enter your project installation instructions here.',
    },
    {
      type: 'input',
      name: 'usageInformation',  // WHEN I enter . . . usage information . . .""
      message: 'Please enter your project usage information here.',
    },
    {
      type: 'input',
      name: 'contributionGuidelines', // WHEN I enter . . .contribution guidelines . . .
      message: 'Please enter your project contribution guidelines here.',  // WHEN I enter . . . contribution guidelines 
    },
    {
      type: 'input',
      name: 'testInstructions',  // WHEN I enter . . . test instructions
      message: 'Please enter your project test instructions here.',
    },
    {
      type: 'checkbox',
      name: 'licenseChoice',
      message: 'Please choose a license for your application from the following list of options.',  // WHEN I choose a license for my application from a list of options
    },
    {
      type: 'input',
      name: 'githubUrl',
      message: "Please enter your Github username."
    },  
    {
      type: 'input',
      name: 'emailAddress',
      message: 'Please enter your email address.',
    }
  ]);

//TODO: Create a function to write README file
const generateReadme = ({projectTitle, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions }) => // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  `<!DOCTYPE MD>
#${projectTitle}
##Project Description
${description}
##Table of Contents
##Installation
${installationInstructions}
##Usage
${usageInformation}
##License
${licenseChoice}
##Contributing
${contributionGuidelines}
##Tests
${testInstructions}
##Questions
For additional questions, please contact ${githubURL} or ${emailAddress}.  Thank you.`

//TODO: Create a function to initialize app
//function init() {}
const init() => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((data) => {
      const filename = `${data.projectTitle.toLowerCase().split('').join('')}.MD`; //Bonus using writeFileSync as a promise
    })
    .then((data) => fs.writeFileSync(filename, generateReadme(data)))
    .then(() => console.log('Successfully wrote to filename))
    .catch((err) => console.error(err));
  generateReadme()
};

//Function call to initialize app
init();


//TODO: Create an array of questions for user input
//const questions = [];






