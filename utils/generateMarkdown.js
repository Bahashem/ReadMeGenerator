// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return "[![License:MIT](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    case "GNU General Public":
      return "[![License: GNU](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/gpl-3.0)";

    case "MIT Lisense":
      return "[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case "Mozilla Public License 2.0":
      return "[![License:MIT](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    default:
      return "";
  }
}

//![Static Badge](https://img.shields.io/badge/:badgeContent)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenses = {
    "Apache License 2.0": "https://opensource.org/licenses/Apache-2.0",
    "GNU General Public": "https://opensource.org/licenses/GPL-3.0",
    "MIT Lisense": "https://opensource.org/licenses/MIT",
    "Mozilla Public License 2.0": "https://opensource.org/licenses/MPL-2.0",
  };
  return licenses[license] || "";
}
//
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return "";
  return `## License\n This project is licensed under the ${license}.`;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
  
  # ${data.project} README

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Content
  1.[Installation Instructions](#installation-instructions)
  2.[Usage Information](#usage-information)
  3.[Contribution](#contribution)
  4.[Tests](#tests)
  5.[Questions](#questions)

  ## Installation Instructions

  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## Contribution 
  ${data.contribution}

  ${renderLicenseSection(data.license)}

  ## Tests 
  ${data.tests}

  ## Questions
If you have any questions, feel free to contact me at:

-GitHub [${data.github}](https://github.com/${data.github})

-Email [${data.email}](mailto:${data.email})

`;
}

export default generateMarkdown;
