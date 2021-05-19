const COMMANDS = {
    'help': {
        arg: "help", 
        arg_type: "help",
        count: 0, 
        patt: "^\\w{4}$"
    },
    'C': {
        arg: "C <w> <h>", 
        arg_type: "C <int> <int>",
        count: 2, 
        patt: "^\\w(\\s(\\d+)){2}$"
    }, 
    'L': {
        arg: "L <x1> <y1> <x2> <y2>", 
        arg_type: "L <int> <int> <int> <int>",
        count: 4, 
        patt: "^\\w(\\s(\\d+)){4}$"
    }, 
    'R': {
        arg: "R <x1> <y1> <x2> <y2>", 
        arg_type: "R <int> <int> <int> <int>",
        count: 4, 
        patt: "^\\w(\\s(\\d+)){4}$"
    }, 
    'B': {
        arg: "B <x> <y> <c>", 
        arg_type: "B <int> <int> <chr>",
        count: 3, 
        patt: "^\\w(\\s(\\d+)){2}(\\s(.))$"
    }, 
    'Q': {
        arg: "Q", 
        arg_type: "Q",
        count: 0, 
        patt: "^\\w$"
    }
};

const USAGE_TEXT = `
NodeCanvas program should work as follows:
------------------------------------------
1. Create a new canvas.
2. Start drawing on the canvas by issuing various commands.
3. Quit.

Usage:
------
$ node main.js
    
Commands can be:
-----------------
C <w> <h>                   Create a new canvas of width w and height h.
L <x1> <y1> <x2> <y2>       Create a new line from (x1, y1) to (x2, y2) either horizontally or vertically. 
                            Lines will be drawn using the 'x' character.
R <x1> <y1> <x2> <y2>       Create a new rectangle, whose upper left corner is (x1, y1) and lower right corner is (x2, y2). 
                            Horizontal and vertical lines will be drawn using the 'x' character. 
B <x> <y> <c>               Fill the entire area connected to (x, y) with "colour" c. 
                            The behavior of this is the same as that of the "bucket fill" tool in paint programs.
Q                           Quit the program.
`;

const INVALID_LINE = `ERR: Only horizontal and vertical lines are accepted. Type "help" for more information.`;

const INVALID_RECTANGLE = `ERR: Only upper left corner (x1, y1) and lower right corner (x2, y2) points are accepted. Type "help" for more information.`;

const INVALID_COMMAND = `ERR: Invalid command passed. Type "help" for more information.`;

const CANVAS_UNAVAILABLE = `ERR: Canvas has not been created. Type "help" for more information.`;


module.exports = {
    COMMANDS: COMMANDS,
    USAGE_TEXT: USAGE_TEXT,
    INVALID_LINE: INVALID_LINE,
    INVALID_RECTANGLE: INVALID_RECTANGLE,
    INVALID_COMMAND: INVALID_COMMAND,
    CANVAS_UNAVAILABLE: CANVAS_UNAVAILABLE

};