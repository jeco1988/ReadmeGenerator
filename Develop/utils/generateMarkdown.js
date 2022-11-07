// Function to return a message if user doesn't accept contributors
function renderContributionSection(confirmContributers, data) {
  if (!confirmContributers) {
    return `
  Thank you for your interest, we will not be accepting contributions at this time however.
    `;
  } else {
    return `
  ${data}
    `;
  }
}

// Function that returns appropriate license badge, if none, return empty string
function renderLicenseBadge(license) { 
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// Function that returns license link, otherwise empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// Function that returns license section of README, if none, return empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
  return `
  ## [License](#table-of-contents)
  The application uses the following license:
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
 }

 // Function that returns license in table of contents, otherwise empty string
function renderLicenseTOC(license) {
  if (license !== 'no license') {
  return `
  * [License](#license)
    `;
  } else {
    return ' ';
  }
 }

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)
  ${data.what}
  ${data.why}
  ${data.how}
  ## [Installation](#table-of-contents)
  ${data.installation}
  ## [Usage](#table-of-contents)
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  ## [Contribution](#table-of-contents)
  
  ${renderContributionSection(data.confirmContributers, data.contribute)}
  ## [Tests](#table-of-contents)
  ${data.test}
  ## [Questions](#table-of-contents)
  Please contact me using the following links:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;