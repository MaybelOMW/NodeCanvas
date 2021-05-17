const { it, expect } = require('@jest/globals');
let draw = require('./draw');
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
    it('check if draw are exported as an object', () => {
        expect(typeof draw).toBe('object');
    });

    // Canvas
    describe('Check draw.canvas function', () => {
        it('check if draw.canvas return the correct canvas object', () => {
            expect(draw.canvas(canvas_arg)).toEqual(canvas_arr);
        });
    });

    // Line
    describe('Check draw.line function', () => {
        // horizontal line
        it('check if draw.line able to create horizontal line', () => {
            expect(draw.line(line_horizontal_pt, canvas_arr)).toEqual(horizontal_line_outcome);
        });
        // vertical line
        it('check if draw.line able to create vertical line', () => {
            expect(draw.line(line_vertical_pt, canvas_arr)).toEqual(vertical_line_outcome);
        });
        // diagonal line
        it('check if draw.line console.log error when given diagonal points', () => {
            console.log = jest.fn();
            draw.line(line_diagonal_pt, canvas_arr);
            expect(console.log).toHaveBeenCalledWith(chalk.red(constants.INVALID_LINE));
        });
    });

    // Rectangle
    describe('Check draw.rectangle function', () => {
        // Diagonal points
        it('check if draw.rectangle able to create rectangle', () => {
            expect(draw.rectangle(rectangle_diagonal_pt, canvas_arr)).toEqual(rectangle_outcome);
        });
        // Non-diagonal points
        it('check if draw.line console.log error when given diagonal points', () => {
            console.log = jest.fn();
            draw.rectangle(rectangle_horizontal_pt, canvas_arr);
            expect(console.log).toHaveBeenCalledWith(chalk.red(constants.INVALID_RECTANGLE));
        });
    });

    // Change Same Color
    describe('Check draw.changeSameColor function', () => {
        it('check if draw.changeSameColor change the same color points correctly', () => {
            expect(draw.changeSameColor(canvas_arr, "x", "c", 1, 1, 3+2-1, 3+2-1)).toEqual(bucket_fill_outcome1);
        });
    });

    // Bucket Fill
    describe('Check draw.bucketFill function', () => {
        it('check if draw.bucketFill fill the color correctly', () => {
            expect(draw.bucketFill(bucket_fill_pt, canvas_arr)).toEqual(bucket_fill_outcome2);
        });
    });
});
