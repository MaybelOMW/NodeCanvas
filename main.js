const chalk = require('chalk');
const args = process.argv;
const command_size = args.length;
const commands = {
    'C': {arg: "C <w> <h>", count: 2}, 
    'L': {arg: "L <x1> <y1> <x2> <y2>", count: 4}, 
    'R': {arg: "R <x1> <y1> <x2> <y2>", count: 4}, 
    'B': {arg: "B <x> <y> <c>", count: 3}, 
    'Q': {arg: "Q", count: 0}
};

// Usage for the help guide
const usage = ()=> {
    const usageText = chalk.cyan(`
    NodeCanvas program should work as follows:
    ------------------------------------------
    1. Create a new canvas.
    2. Start drawing on the canvas by issuing various commands.
    3. Quit.
    
    Usage:
    ------
    $ node main.js <command>
        
    Commands can be:
    -----------------
    C <w> <h>                   Create a new canvas of width w and height h.
    L <x1> <y1> <x2> <y2>       Create a new line from (x1, y1) to (x2, y2) either horizontally or vertically. 
                                Lines will be drawn using the 'x' character.
    R <x1> <y1> <x2> <y2>       Create a new rectangle, whose upper left corner is (x1, y1) and lower right corner is (x2, y2). 
                                Horizontal and vertical lines will be drawn using the 'x' character. 
    B <x> <y> <c>               Cill the entire area connected to (x, y) with "colour" c. 
                                The behavior of this is the same as that of the "bucket fill" tool in paint programs.
    Q                           Quit the program.
    `);
    console.log(usageText);
};

// Log errors to the console in red color
function errorLog(error){
    const eLog = chalk.red(error);
    console.log(eLog);
};

function checkCommand(key){
    let expected_count = parseInt(commands[key]["count"]);
    let expected_arg = commands[key]["arg"];

    if (command_size !== (3 + expected_count)){
        let error = 'ERR: The '+ expected_arg +' command expected '+ expected_count +' arguments. Type "help" for more information.';
        errorLog(error);
    }
    else return;
}

if (command_size < 3){
    usage();
}
else {
    switch(args[2]){
        case 'help':
            usage();
            break;
        
        case 'C':
            checkCommand(args[2]);
            break;
        
        case 'L':
            checkCommand(args[2]);
            break;
        
        case 'R':
            checkCommand(args[2]);
            break;
        
        case 'B':
            checkCommand(args[2]);
            break;
        
        case 'Q':
            checkCommand(args[2]);
            break;
        
        default:
            errorLog('invalid command passed');
            usage();
    }
}


