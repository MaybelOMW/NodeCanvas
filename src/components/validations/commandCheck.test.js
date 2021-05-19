const commandCheck = require("./commandCheck");
const constants = require('../constants');
const chalk = require('chalk');

let valid_cmd_obj = constants.COMMANDS["C"];
let canvas_cmd = [["C", "3", "3"], "C 3 3"];

let invalid_cmd = [["W", "3", "3"], "W 3 3"];
let drawing_cmd = [["R", "1", "1", "3", "3"], "R 1 1 3 3"];

let lack_arg_cmd = [["C", "3"], "C 3"];
let lack_arg_err = `ERR: The ${valid_cmd_obj.arg} command expected ${valid_cmd_obj.count} arguments. Type "help" for more information.`;

let arg_type_err_cmd = [["C", "3", "Q"], "C 3 Q"];
let arg_type_err = `ERR: The ${valid_cmd_obj.arg} command expected ${valid_cmd_obj.arg_type}. Type "help" for more information.`;

describe('Check all commandCheck functions', () => {
    describe('Check commandValidity function', () => {
        it('check if commandValidity return false and console.log error when command is invalid', () => {
            console.log = jest.fn();
            expect(commandCheck.commandValidity(undefined)).toEqual(false);
            expect(console.log).toHaveBeenCalledWith(chalk.red(constants.INVALID_COMMAND));
        });
        it('check if commandValidity return true when command is valid', () => {
            expect(commandCheck.commandValidity(valid_cmd_obj)).toEqual(true);
        });
    });
    describe('Check canvasAvailability function', () => {
        it('check if canvasAvailability return false and console.log error when drawing without canvas created', () => {
            console.log = jest.fn();
            expect(commandCheck.canvasAvailability("L", false)).toEqual(false);
            expect(console.log).toHaveBeenCalledWith(chalk.red(constants.CANVAS_UNAVAILABLE));
        });
        it('check if canvasAvailability return true when drawing with canvas created', () => {
            expect(commandCheck.canvasAvailability("L", true)).toEqual(true);
        });
        it('check if canvasAvailability return true whenever creating canvas', () => {
            expect(commandCheck.canvasAvailability("C", false)).toEqual(true);
            expect(commandCheck.canvasAvailability("C", true)).toEqual(true);
        });
        it('check if canvasAvailability return true whenever requesting for help', () => {
            expect(commandCheck.canvasAvailability("help", false)).toEqual(true);
            expect(commandCheck.canvasAvailability("help", true)).toEqual(true);
        });
    });
    describe('Check argumentAvailability function', () => {
        it('check if argumentAvailability return false and console.log error when command has not enough argument', () => {
            console.log = jest.fn();
            expect(commandCheck.argumentAvailability(valid_cmd_obj, lack_arg_cmd[0].length)).toEqual(false);
            expect(console.log).toHaveBeenCalledWith(chalk.red(lack_arg_err));
        });
        it('check if argumentAvailability return true when command has enough argument', () => {
            expect(commandCheck.argumentAvailability(valid_cmd_obj, canvas_cmd[0].length)).toEqual(true);
        });
    });
    describe('Check argumentTypeCorrectness function', () => {
        it('check if argumentTypeCorrectness return false and console.log error when command has wrong argument type', () => {
            console.log = jest.fn();
            expect(commandCheck.argumentTypeCorrectness(valid_cmd_obj, arg_type_err_cmd[1])).toEqual(false);
            expect(console.log).toHaveBeenCalledWith(chalk.red(arg_type_err));
        });
        it('check if argumentTypeCorrectness return true when command has correct argument type', () => {
            expect(commandCheck.argumentTypeCorrectness(valid_cmd_obj, canvas_cmd[1])).toEqual(true);
        });
    });
    describe('Check runAllCheck function', () => {
        it('check if runAllCheck return false when command is invalid regardless of canvas creation status', () => {
            expect(commandCheck.runAllCheck(invalid_cmd[0], false, invalid_cmd[1])).toEqual(false);
            expect(commandCheck.runAllCheck(invalid_cmd[0], true, invalid_cmd[1])).toEqual(false);
        });
        it('check if runAllCheck return false when drawing with the canvas not created', () => {
            expect(commandCheck.runAllCheck(drawing_cmd[0], false, drawing_cmd[1])).toEqual(false);
        });
        it('check if runAllCheck return false when command has not enough argument', () => {
            expect(commandCheck.runAllCheck(lack_arg_cmd[0], false, lack_arg_cmd[1])).toEqual(false);
        });
        it('check if runAllCheck return false when command has wrong argument type', () => {
            expect(commandCheck.runAllCheck(arg_type_err_cmd[0], false, arg_type_err_cmd[1])).toEqual(false);
        });
        
        it('check if runAllCheck return true whenever creating canvas', () => {
            expect(commandCheck.runAllCheck(canvas_cmd[0], false, canvas_cmd[1])).toEqual(true);
            expect(commandCheck.runAllCheck(canvas_cmd[0], true, canvas_cmd[1])).toEqual(true);
        });
        it('check if runAllCheck return true when drawing with canvas created', () => {
            expect(commandCheck.runAllCheck(drawing_cmd[0], true, drawing_cmd[1])).toEqual(true);
        });
    });
});
