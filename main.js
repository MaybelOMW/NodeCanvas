// Libraries or Import
const chalk = require('chalk');
const constants = require('./src/components/constants');
const commandCheck = require('./src/components/validations/commandCheck');
const usage = require('./src/components/logs/usageLog');
const drawing_actions = require('./src/controllers/drawing_actions');

// // Readline and Data Storing
// const readline = require('readline');
// const low = require('lowdb');
// const FileSync = require('lowdb/adapters/FileSync');
// const adapter = new FileSync('db.json');
// const db = low(adapter);

// Instantiation 
let args = [];
let isValidCommand = false;
let isCanvasCreated = false;
var instruction = chalk.green('Starting the program ... \nInput your canvas CLI: ');
let canvas_arr = [];

// db.defaults({ canvas: "", drawing: []}).write();

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
    terminal: false
});

// Listen to user input
function recursiveAsyncReadLine(question){
    rl.question(question, answer => {
        if(answer == 'Q'){
            instruction = chalk.green('Closing the program ...');
            console.log(instruction);
            return rl.close();
        }

        args = answer.trim().split(" ");
        isValidCommand = commandCheck(args, isCanvasCreated);
        
        if (isValidCommand){
            switch(args[0]){
                case 'help':
                    usage();
                    break;
                
                case 'C':
                    canvas_arr = drawing_actions.canvas(args);
                    isCanvasCreated = true;
                    break;
                
                case 'L':
                    canvas_arr = drawing_actions.line(args, canvas_arr);
                    break;
                
                case 'R':
                    canvas_arr = drawing_actions.rectangle(args, canvas_arr);
                    break;
                
                case 'B':
                    canvas_arr = drawing_actions.bucketFill(args, canvas_arr);
                    break;
                
                default:
            }
            canvas_arr.map(row => console.log(row.join('')));
        }

        if(isCanvasCreated){
            instruction = chalk.green('Input your drawing CLI: ');
        }
        else{
            instruction = chalk.green('Input your canvas CLI: ');
        }
        
        recursiveAsyncReadLine(instruction);
    });
}

// Begin the ReadLine
recursiveAsyncReadLine(instruction);