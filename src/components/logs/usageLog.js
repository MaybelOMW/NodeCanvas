const chalk = require('chalk');
const constants = require('../constants');

// Usage for the help guide
const usageLog = () => {
    const usageText = chalk.cyan(constants.USAGE_TEXT);
    console.log(usageText);
};

module.exports = usageLog;