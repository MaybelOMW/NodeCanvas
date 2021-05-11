const chalk = require('chalk');
const constants = require('./constants');
const args = process.argv;
const command_size = args.length;

// Usage for the help guide
const usage = ()=> {
    const usageText = chalk.cyan(constants.USAGE_TEXT);
    console.log(usageText);
};

// Log errors to the console in red color
function errorLog(error){
    const eLog = chalk.red(error);
    console.log(eLog);
};

function checkCommand(key){
    let key_obj = constants.COMMANDS[key];

    if (key_obj === undefined){
        errorLog('invalid command passed');
        usage();
        return;
    }

    let expected_count = parseInt(key_obj["count"]);
    let expected_arg = key_obj["arg"];

    if (command_size !== (3 + expected_count)){
        let error = 'ERR: The '+ expected_arg +' command expected '+ expected_count +' arguments. Type "help" for more information.';
        errorLog(error);
    }
    return;
}

if (command_size < 3){
    usage();
}
else {
    checkCommand(args[2]);
    
    switch(args[2]){
        case 'help':
            usage();
            break;
        
        case 'C':
            break;
        
        case 'L':
            break;
        
        case 'R':
            break;
        
        case 'B':
            break;
        
        case 'Q':
            break;
        
        default:
    }
}


