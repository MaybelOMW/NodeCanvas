const { it, expect } = require('@jest/globals');
let drawing_actions = require('./drawing_actions');
let canvas_arr = [
    ["-", "-", "-", "-", "-"],
    ["|", " ", " ", " ", "|"],
    ["|", " ", " ", " ", "|"],
    ["|", " ", " ", " ", "|"],
    ["-", "-", "-", "-", "-"]];

describe('Check all drawing functions', () => {
    it('check if drawing_actions are exported as an object', () => {
        expect(typeof drawing_actions).toBe('object');
    });

    // Canvas
    describe('Check drawing_actions.canvas functions', () => {
        it('check if drawing_actions.canvas is function', () => {
            expect(typeof drawing_actions.canvas).toBe('function');
        });
        it('check if drawing_actions.canvas return object', () => {
            expect(typeof drawing_actions.canvas(["C", "3", "3"])).toBe('object');
        });
    });

    // Line
    describe('Check drawing_actions.line functions', () => {
        it('check if drawing_actions.line is function', () => {
            expect(typeof drawing_actions.line).toBe('function');
        });
        // horizontal line
        it('check if drawing_actions.line return object', () => {
            expect(typeof drawing_actions.line(["L", "1", "2", "3", "2"], canvas_arr)).toBe('object');
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
