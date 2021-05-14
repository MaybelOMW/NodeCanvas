const { it, expect } = require('@jest/globals');
let drawing_actions = require('./drawing_actions');

describe('Exports all drawing functions', () => {
    it('check if drawing_actions is object', () => {
        expect(typeof drawing_actions).toBe('object');
    });

    // Canvas
    it('check if drawing_actions.canvas is function', () => {
        expect(typeof drawing_actions.canvas).toBe('function');
    });
    it('check if drawing_actions.canvas return object', () => {
        expect(typeof drawing_actions.canvas()).toBe('object');
    });

    // Line
    it('check if drawing_actions.line is function', () => {
        expect(typeof drawing_actions.line).toBe('function');
    });
    it('check if drawing_actions.line return object', () => {
        expect(typeof drawing_actions.line()).toBe('object');
    });

    // Rectangle
    it('check if drawing_actions.rectangle is function', () => {
        expect(typeof drawing_actions.rectangle).toBe('function');
    });
    it('check if drawing_actions.rectangle return object', () => {
        expect(typeof drawing_actions.rectangle()).toBe('object');
    });

    // Change Same Color
    it('check if drawing_actions.changeSameColor is function', () => {
        expect(typeof drawing_actions.changeSameColor).toBe('function');
    });
    it('check if drawing_actions.changeSameColor return object', () => {
        expect(typeof drawing_actions.changeSameColor()).toBe('object');
    });

    // Bucket Fill
    it('check if drawing_actions.bucketFill is function', () => {
        expect(typeof drawing_actions.bucketFill).toBe('function');
    });
    it('check if drawing_actions.bucketFill return object', () => {
        expect(typeof drawing_actions.bucketFill()).toBe('object');
    });
});
