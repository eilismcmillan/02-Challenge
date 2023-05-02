const inquirer = require("inquirer");
const fs = require("fs");

const Logo = require("./lib/shapes.js");

const init = () => {
  const questions = inquirer
    .prompt([
      {
        type: "input",
        name: "logoText",
        message:
          "Please enter the text you want to appear on your logo (no more than three characters)",
        validate: (logoText) => logoText.length <= 3,
      },
      {
        type: "input",
        name: "textColor",
        message: "Please enter your desired text color:",
      },
      {
        type: "list",
        name: "shape",
        message: "Please select a shape for your logo:",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Please enter your desired background color:",
      },
    ])
    .then((response) => {
      const logo = new Logo()
      const generateLogo = logo.createLogo(response);
      fs.writeFile("logo.svg", generateLogo, (err) => {
        err
          ? console.log(err)
          : console.log("You have successfully created a logo");
      });
    });
};

init();

module.exports = init;
