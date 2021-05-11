const chalk = require('chalk');
const constants = require('./constants');

// Usage for the help guide
const usage = () => {
    const usageText = chalk.cyan(constants.USAGE_TEXT);
    console.log(usageText);
};

module.exports = usage;