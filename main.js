// Libraries or Import
const chalk = require('chalk');
const constants = require('./constants');
const checkCommand = require('./checkCommand');
const usage = require('./usage');
const draw = require('./draw');

// Readline and Data Storing
const readline = require('readline');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

// Instantiation 
let args = [];
let isValidCommand = false;
let isCanvasCreated = false;
var instruction = chalk.blue('Input your canvas CLI: ');

db.defaults({ canvas: "", drawing: []}).write();

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
    terminal: false
});

// Listen to user input
function recursiveAsyncReadLine(question){
    rl.question(question, answer => {
        if(answer == 'Q')
            return rl.close();

        args = answer.trim().split(" ");
        isValidCommand = checkCommand(args, isCanvasCreated);
        
        if (isValidCommand){
            switch(args[0]){
                case 'help':
                    usage();
                    break;
                
                case 'C':
                    draw.canvas(args);
                    isCanvasCreated = true;
                    break;
                
                case 'L':
                    break;
                
                case 'R':
                    break;
                
                case 'B':
                    break;
                
                default:
            }
            instruction = chalk.green('Input your drawing CLI: ');
        }

        recursiveAsyncReadLine(instruction);
    });
}

// Begin the ReadLine
recursiveAsyncReadLine(instruction);