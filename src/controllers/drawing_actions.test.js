const { it, expect } = require('@jest/globals');
let drawing_actions = require('./drawing_actions');
const constants = require('../components/constants');
const chalk = require('chalk');

let canvas_arg = ["C", "3", "3"];
let canvas_arr = [
    ["-", "-", "-", "-", "-"],
    ["|", " ", " ", " ", "|"],
    ["|", " ", " ", " ", "|"],
    ["|", " ", " ", " ", "|"],
    ["-", "-", "-", "-", "-"]];

let horizontal_pt_arg = ["L", "1", "2", "3", "2"];
let horizontal_line = [
    ["-", "-", "-", "-", "-"],
    ["|", " ", " ", " ", "|"],
    ["|", "x", "x", "x", "|"],
    ["|", " ", " ", " ", "|"],
    ["-", "-", "-", "-", "-"]];

let vertical_pt_arg = ["L", "2", "1", "2", "3"];
let vertical_line = [
    ["-", "-", "-", "-", "-"],
    ["|", " ", "x", " ", "|"],
    ["|", "x", "x", "x", "|"],
    ["|", " ", "x", " ", "|"],
    ["-", "-", "-", "-", "-"]];

let diagonal_pt_arg = ["L", "1", "1", "3", "3"];

describe('Check all drawing functions', () => {
    it('check if drawing_actions are exported as an object', () => {
        expect(typeof drawing_actions).toBe('object');
    });

    // Canvas
    describe('Check drawing_actions.canvas functions', () => {
        it('check if drawing_actions.canvas return the correct canvas object', () => {
            expect(drawing_actions.canvas(canvas_arg)).toEqual(canvas_arr);
        });
    });

    // Line
    describe('Check drawing_actions.line functions', () => {
        // horizontal line
        it('check if drawing_actions.line able to create horizontal line', () => {
            expect(drawing_actions.line(horizontal_pt_arg, canvas_arr)).toEqual(horizontal_line);
        });
        // vertical line
        it('check if drawing_actions.line able to create vertical line', () => {
            expect(drawing_actions.line(vertical_pt_arg, canvas_arr)).toEqual(vertical_line);
        });
        // diagonal line
        it('check if drawing_actions.line console.log error when given diagonal points', () => {
            console.log = jest.fn();
            drawing_actions.line(diagonal_pt_arg, canvas_arr);
            expect(console.log).toHaveBeenCalledWith(chalk.red(constants.INVALID_LINE));
        });
    });

    // Rectangle
    describe('Check drawing_actions.rectangle functions', () => {
        it('check if drawing_actions.rectangle is function', () => {
            expect(typeof drawing_actions.rectangle).toBe('function');
        });
        it('check if drawing_actions.rectangle return object', () => {
            expect(typeof drawing_actions.rectangle(["R", "1", "1", "3", "3"], canvas_arr)).toBe('object');
        });
    });

    // Change Same Color
    describe('Check drawing_actions.changeSameColor functions', () => {
        it('check if drawing_actions.changeSameColor is function', () => {
            expect(typeof drawing_actions.changeSameColor).toBe('function');
        });
        it('check if drawing_actions.changeSameColor return object', () => {
            expect(typeof drawing_actions.changeSameColor(canvas_arr, " ", "o", "1", "1", 3+2-1, 3+2-1)).toBe('object');
        });
    });

    // Bucket Fill
    describe('Check drawing_actions.bucketFill functions', () => {
        it('check if drawing_actions.bucketFill is function', () => {
            expect(typeof drawing_actions.bucketFill).toBe('function');
        });
        it('check if drawing_actions.bucketFill return object', () => {
            expect(typeof drawing_actions.bucketFill(["B", "1", "1", "o"], canvas_arr)).toBe('object');
        });
    });
});
