// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    message: `What is the title of your project?`,
    type: "input",
  },
  {
    name: "description",
    message: `Please provide a description of your project.`,
    type: "input",
  },
  {
    name: "installation",
    message: `Please provide installation instructions for your project.`,
    type: "input",
  },
  {
    name: "usage",
    message: `Please provide usage information for your project.`,
    type: "input",
  },
  {
    name: "contribution",
    message: `Please provide contribution guidelines for your project.`,
    type: "input",
  },
  {
    name: "test",
    message: `Please provide test instructions for your project.`,
    type: "input",
  },
  {
    name: "license",
    message: `Please provide license information for your project.`,
    type: "list",
    choices: ["Zlib", "ISC", "MIT"],
  },
  {
    name: "github",
    message: `What is your GitHub username?`,
    type: "input",
  },
  {
    name: "email",
    message: `What is your email address?`,
    type: "input",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile("README.md", markdown);
  });
}

// Function call to initialize app
init();
