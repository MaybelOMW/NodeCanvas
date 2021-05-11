const constants = require('./constants');
const errorLog = require('./errorLog');

// Check Validity
function commandValidity(args_obj){
    if (args_obj === undefined){
        errorLog('ERR: Invalid command passed. Type "help" for more information.');
        return false;
    }
    return true;
}

// Check Canvas Availability Before Drawing
function canvasAvailability(command_key, isCanvasCreated){
    if (!isCanvasCreated){
        if (command_key !== "C"){
            let error = 'ERR: Canvas has not been created. Type "help" for more information.';
            errorLog(error);
            return false;
        }
    }
    return true;
}

// Check Argument Availability
function commandArgumentAvailability(args_obj, args_size){
    let expected_count = parseInt(args_obj["count"]);
    let expected_arg = args_obj["arg"];

    if ((args_size-1) !== expected_count){
        let error = 'ERR: The '+ expected_arg +' command expected '+ expected_count +' arguments. Type "help" for more information.';
        errorLog(error);
        return false;
    }
    return true;
}

function checkCommand(args, isCanvasCreated){
    let args_obj = constants.COMMANDS[args[0]];
    let args_size = args.length;

    if (!commandValidity(args_obj)) return false;
    if (!canvasAvailability(args[0], isCanvasCreated)) return false;
    if (!commandArgumentAvailability(args_obj, args_size)) return false;

    return true;
}

module.exports = checkCommand;