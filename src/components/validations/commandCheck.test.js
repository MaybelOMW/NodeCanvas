const commandCheck = require("./commandCheck");
const constants = require('../constants');
const chalk = require('chalk');

let valid_command_obj = {arg: "C <w> <h>", count: 2};
let canvas_command = ["C", "3", "3"];

let invalid_command = ["W", "3", "3"];
let drawing_command = ["R", "1", "1", "3", "3"];
let lack_argument_command = ["C", "3"];
let lack_argument_err = `ERR: The ${valid_command_obj.arg} command expected ${valid_command_obj.count} arguments. Type "help" for more information.`;

describe('Check all commandCheck functions', () => {
    describe('Check commandValidity function', () => {
        it('check if commandValidity return false and console.log error when command is invalid', () => {
            console.log = jest.fn();
            expect(commandCheck.commandValidity(undefined)).toEqual(false);
            expect(console.log).toHaveBeenCalledWith(chalk.red(constants.INVALID_COMMAND));
        });
        it('check if commandValidity return true when command is valid', () => {
            expect(commandCheck.commandValidity(valid_command_obj)).toEqual(true);
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
    describe('Check commandArgumentAvailability function', () => {
        it('check if commandArgumentAvailability return false and console.log error when command has not enough argument', () => {
            console.log = jest.fn();
            expect(commandCheck.commandArgumentAvailability(valid_command_obj, lack_argument_command.length)).toEqual(false);
            expect(console.log).toHaveBeenCalledWith(chalk.red(lack_argument_err));
        });
        it('check if commandArgumentAvailability return true when command has enough argument', () => {
            expect(commandCheck.commandArgumentAvailability(valid_command_obj, canvas_command.length)).toEqual(true);
        });
    });
    describe('Check runAllCheck function', () => {
        it('check if runAllCheck return false when command is invalid regardless of canvas creation status', () => {
            expect(commandCheck.runAllCheck(invalid_command, false)).toEqual(false);
            expect(commandCheck.runAllCheck(invalid_command, true)).toEqual(false);
        });
        it('check if runAllCheck return false when drawing with the canvas not created', () => {
            expect(commandCheck.runAllCheck(drawing_command, false)).toEqual(false);
        });
        it('check if runAllCheck return false when command has not enough argument', () => {
            expect(commandCheck.runAllCheck(lack_argument_command, false)).toEqual(false);
        });
        
        it('check if runAllCheck return true when creating canvas', () => {
            expect(commandCheck.runAllCheck(canvas_command, false)).toEqual(true);
            expect(commandCheck.runAllCheck(canvas_command, true)).toEqual(true);
        });
        it('check if runAllCheck return true when drawing with canvas created', () => {
            expect(commandCheck.runAllCheck(drawing_command, true)).toEqual(true);
        });
    });
});
