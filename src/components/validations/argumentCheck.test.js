const argumentCheck = require("./argumentCheck");
const chalk = require('chalk');

let valid_pt = [1, 2];
let invalid_pt = [0, 3];
let invalid_pt_err = `ERR: The (${invalid_pt[0]}, ${invalid_pt[1]}) is out of boundary. Type "help" for more information.`;
let canvas_arr = [
    ["-", "-", "-", "-", "-"],
    ["|", " ", " ", " ", "|"],
    ["|", " ", " ", " ", "|"],
    ["|", " ", " ", " ", "|"],
    ["-", "-", "-", "-", "-"]];


describe('Check all argumentCheck functions', () => {
    describe('Check boundaryCheck function', () => {
        it('check if boundaryCheck return false when XY exceed the canvas boundary', () => {
            console.log = jest.fn();
            expect(argumentCheck.boundaryCheck(canvas_arr, invalid_pt[0], invalid_pt[1])).toEqual(false);
            expect(console.log).toHaveBeenCalledWith(chalk.red(invalid_pt_err));
        });
        it('check if boundaryCheck return true on good argument', () => {
            expect(argumentCheck.boundaryCheck(canvas_arr, valid_pt[0], valid_pt[1])).toEqual(true);
        });
    })
});
