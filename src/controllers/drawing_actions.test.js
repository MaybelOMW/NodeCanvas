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

let line_horizontal_pt = ["L", "1", "2", "3", "2"];
let horizontal_line_outcome = [
    ["-", "-", "-", "-", "-"],
    ["|", " ", " ", " ", "|"],
    ["|", "x", "x", "x", "|"],
    ["|", " ", " ", " ", "|"],
    ["-", "-", "-", "-", "-"]];

let line_vertical_pt = ["L", "2", "1", "2", "3"];
let vertical_line_outcome = [
    ["-", "-", "-", "-", "-"],
    ["|", " ", "x", " ", "|"],
    ["|", "x", "x", "x", "|"],
    ["|", " ", "x", " ", "|"],
    ["-", "-", "-", "-", "-"]];

let line_diagonal_pt = ["L", "1", "1", "3", "3"];

let rectangle_horizontal_pt = ["R", "1", "2", "3", "2"];
let rectangle_diagonal_pt = ["R", "1", "1", "3", "3"];
let rectangle_outcome = [
    ["-", "-", "-", "-", "-"],
    ["|", "x", "x", "x", "|"],
    ["|", "x", "x", "x", "|"],
    ["|", "x", "x", "x", "|"],
    ["-", "-", "-", "-", "-"]];

let bucket_fill_pt = ["B", "1", "1", "o"];
let bucket_fill_outcome1 = [
    ["-", "-", "-", "-", "-"],
    ["|", "c", "c", "c", "|"],
    ["|", "c", "c", "c", "|"],
    ["|", "c", "c", "c", "|"],
    ["-", "-", "-", "-", "-"]];
let bucket_fill_outcome2 = [
    ["-", "-", "-", "-", "-"],
    ["|", "o", "o", "o", "|"],
    ["|", "o", "o", "o", "|"],
    ["|", "o", "o", "o", "|"],
    ["-", "-", "-", "-", "-"]];

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
            expect(drawing_actions.line(line_horizontal_pt, canvas_arr)).toEqual(horizontal_line_outcome);
        });
        // vertical line
        it('check if drawing_actions.line able to create vertical line', () => {
            expect(drawing_actions.line(line_vertical_pt, canvas_arr)).toEqual(vertical_line_outcome);
        });
        // diagonal line
        it('check if drawing_actions.line console.log error when given diagonal points', () => {
            console.log = jest.fn();
            drawing_actions.line(line_diagonal_pt, canvas_arr);
            expect(console.log).toHaveBeenCalledWith(chalk.red(constants.INVALID_LINE));
        });
    });

    // Rectangle
    describe('Check drawing_actions.rectangle functions', () => {
        // Diagonal points
        it('check if drawing_actions.rectangle able to create rectangle', () => {
            expect(drawing_actions.rectangle(rectangle_diagonal_pt, canvas_arr)).toEqual(rectangle_outcome);
        });
        // Non-diagonal points
        it('check if drawing_actions.line console.log error when given diagonal points', () => {
            console.log = jest.fn();
            drawing_actions.rectangle(rectangle_horizontal_pt, canvas_arr);
            expect(console.log).toHaveBeenCalledWith(chalk.red(constants.INVALID_RECTANGLE));
        });
    });

    // Change Same Color
    describe('Check drawing_actions.changeSameColor functions', () => {
        it('check if drawing_actions.changeSameColor change the same color points correctly', () => {
            expect(drawing_actions.changeSameColor(canvas_arr, "x", "c", 1, 1, 3+2-1, 3+2-1)).toEqual(bucket_fill_outcome1);
        });
    });

    // Bucket Fill
    describe('Check drawing_actions.bucketFill functions', () => {
        it('check if drawing_actions.bucketFill fill the color correctly', () => {
            expect(drawing_actions.bucketFill(bucket_fill_pt, canvas_arr)).toEqual(bucket_fill_outcome2);
        });
    });
});
