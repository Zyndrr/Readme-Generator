function generateMarkdown(data) {
  return `# ${data.title}
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## How to Contribute

${data.contribution}

## License

${data.license}

## Tests

${data.test}

## Questions

- GitHub Username: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;

