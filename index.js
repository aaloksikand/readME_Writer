// TODO: Include packages needed for this application
import inquirer from 'inquirer'; //AskBCS said that this version of inquirer requires import
//const inquire =  require('inquirer');
// Use writeFileSync method to use promises instead of a callback function
//const fs = require('fs');
import fs from 'fs';

// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
function init()
{
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
      type: 'input',
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
  const filename = `${data.projectTitle.toLowerCase().split('').join('')}.md`; //Bonus using writeFileSync as a promise
  const readMe = generateReadme(data);
  fs.writeFileSync(filename, readMe, (err) =>
err ? console.log(err) : console.log('Success!')
  //console.log(readMe);
)
})
}
function generateReadme(data)
{ 
function displayBadge(licenseBadge){
  //conditional if else running through different license badges
  //if licenseBadge === display badge
  //else if .....
}
 return `<!DOCTYPE md>
#${data.projectTitle} ${displayBadge(data.licensechoice)}
##Project Description
${data.description}
##Table of Contents
##Installation
${data.installationInstructions}
##Usage
${data.usageInformation}
##License
${displaylienseBadge(data.licenseChoice)} 
##Contributing
${data.contributionGuidelines}
##Tests
${data.testInstructions}
##Questions
For additional questions, please contact ${data.githubURL} or ${data.emailAddress}.  Thank you.`;
}

// console.log(generateReadme)

// fs.writeFileSync(filename, readMe, (err) =>
// err ? console.log(err) : console.log('Success!')
//);

//Function call to initialize app
init();


//TODO: Create an array of questions for user input
//const questions = [];





