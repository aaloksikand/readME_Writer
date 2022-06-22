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
      message: 'What is your project title?',
      name: 'projectTitle',  //See Acceptance Criteria: "WHEN I enter my project title..."
    },
    {
      type: 'input',
      message: 'Please enter a short description of your project.',  //See Acceptance Criteria: "// WHEN I enter a description . . ."
      name: 'description',
      
    },
    {
      type: 'input',
      message: 'Please enter your project installation instructions here.',
      name: 'installationInstructions', //See Acceptance Criteria: ". . . WHEN I enter installation instructions . . .""
      },
    {
      type: 'input',
      message: 'Please enter your project usage information here.',
      name: 'usageInformation',  // WHEN I enter . . . usage information . . .""
      },
    {
      type: 'input',
      message: 'Please enter your project contribution guidelines here.',  // WHEN I enter . . . contribution guidelines 
      name: 'contributionGuidelines', // WHEN I enter . . .contribution guidelines . . .
      },
    {
      type: 'input',
      message: 'Please enter your project test instructions here.',
      name: 'testInstructions',  // WHEN I enter . . . test instructions
      },
    {
      type: 'checkbox',
      message: 'Please choose a license for your application from the following list of options.',  // WHEN I choose a license for my application from a list of options
      name: 'licenseChoice',
    },
    {
      type: 'input',
      message: 'Please enter your Github username.',
      name: 'githubUrl',
      
    },  
    {
      type: 'input',
      message: 'Please enter your email address.',
      name: 'emailAddress',
    }
  ])

//TODO: Create a function to write README file

.then((data) => {
  const filename = `${data.projectTitle.toLowerCase().split('').join('')}.MD`; //Bonus using writeFileSync as a promise
})

const generateReadme = 
  `<!DOCTYPE MD>
#${data.projectTitle}
##Project Description
${data.description}
##Table of Contents
##Installation
${data.installationInstructions}
##Usage
${data.usageInformation}
##License
${data.licenseChoice}
##Contributing
${data.contributionGuidelines}
##Tests
${data.testInstructions}
##Questions
For additional questions, please contact ${data.githubURL} or ${data.emailAddress}.  Thank you.`;

console.log(generateReadme)

fs.writeFileSync(filename, generateReadme, (err) =>
err ? console.log(err) : console.log('Success!')
);

//Function call to initialize app
//init();


//TODO: Create an array of questions for user input
//const questions = [];






