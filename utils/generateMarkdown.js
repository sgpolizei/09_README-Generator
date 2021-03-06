// Returns a license badge, if no license return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case '':
      return '';
      break;
    case 'MIT':
      return 'https://img.shields.io/badge/license-MIT-green';
      break;
    case 'Apache':
      return 'https://img.shields.io/badge/license-Apache-blue';
      break;
    case 'GPL':
      return 'https://img.shields.io/badge/license-GPL-blue';
      break;
  }
}

// Returns the license link, if no license return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case '':
      return '';
      break;
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
      break;
    case 'Apache':
      return 'https://www.apache.org/licenses/LICENSE-2.0.txt';
      break;
    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
      break;
  }
}

// Returns the license section of README, if no license, return empty string
function renderLicenseSection(license) {
  if (license === '') {
    return '';
  }
  else {
  return `
  Copyright (c) Sam Gates. All rights reserved. 
  Licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![License badge](${renderLicenseBadge(data.license)})
  
  ## Description

  ${data.description}

  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation

  ${data.install}
  
  ## Usage

  ${data.usage_instructions}
  
  ![Screenshot 1](assets/images/screen1.png)
  ![Screenshot 2](assets/images/screen2.png)
  ![Screenshot 3](assets/images/screen3.png)
  
  ## Contribute

  ${data.contrib}
  
  ## Test

  ${data.test}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  
  Check out my [GitHub Profile](https://github.com/${data.github_user}).
  
  Email with questions! You can reach me at ${data.email}.
  `;
}

// Export function generateMarkdown 
module.exports = {generateMarkdown};