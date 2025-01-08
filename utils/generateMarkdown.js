// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
    switch (license) {
      case 'None':
      return 'No license selected';
      case 'Apache License 2.0':
        return ; 
      case 'GNU General Public License':
        return;
      case 'MIT Lisense':
        return; 
      case 'Mozilla Public License 2.0':
        return;
    }
  }
  }
}
if ()// if license ! None then or switch
  ![Static Badge](https://img.shields.io/badge/:badgeContent)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
//
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ####${data.project} README

My project is licensed under: ![GitHub License]https://img.shields.io/github/license/:username/:project)].

  ## Description

  ${data.description}

  ##Table of Content
  -[Installation Instructions](#installation)
  -[Usage Information](#usage)
  -[Contribution Guidelines](#contribution)
  -[License](#contribution)

  ##Installation Instructions

  ${data.installation}

  ##Usage Information

  ${data.usage}

  ##Contribution Guidelines

  ${data.contribution}

  ##Test Instructions

  ${data.tests}

  ##Questions
If you have questions, contact me at:
${username}
${github}
${email}





`;
}

export default generateMarkdown;
