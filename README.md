# NodeCanvas
This NodeJs console application 
1. Create a new canvas.
2. Start drawing on the canvas by issuing various commands.
3. Quit.

## Installation

1. Download NodeJs from https://nodejs.org/en/download/.
2. Install node_modules with npm.\
``` $ npm i ```
3. Install JEST package for development purpose.\
``` $ npm install --save-dev jest ```

## Usage
1. To start the console application.\
```$ node main```

2. Follow the printed instruction on the terminal to key in the Command Line Input (CLI). Type "help" to check for CLI usage.

| CLI                       | Usage Description                           |
| :------------------------ |:--------------------------------------------|
| C \<w> \<h>               | Create a new canvas of width w and height h.|
| L \<x1> \<y1> \<x2> \<y2> | Create a new line from (x1, y1) to (x2, y2) either horizontally or vertically. <br/> Lines will be drawn using the 'x' character.|
| R \<x1> \<y1> \<x2> \<y2> | Create a new rectangle, whose upper left corner is (x1, y1) and lower right corner is (x2, y2). <br/> Horizontal and vertical lines will be drawn using the 'x' character.|
| B \<x> \<y> \<c>          | Fill the entire area connected to (x, y) with "colour" c. <br/> The behavior of this is the same as that of the "bucket fill" tool in paint programs.|
| Q                         | Quit the program.                           |
| help                      | List informations on CLI usage.             |

3. There 3 unit test being written to test the implemented functions. To run the test, run ``` $ npm run test ``` at the root level of current project folder.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Reference link
How To Build Command Line Applications with Node.js\
https://www.digitalocean.com/community/tutorials/how-to-build-command-line-applications-with-node-js

Getting Started · Jest\
https://jestjs.io/docs/getting-started

Introduction to Test Driven Development in JS/Node.js, Part 1.\
https://medium.com/@pojotorshemi/introduction-to-test-driven-development-in-js-node-js-part-1-2477d9bbd3b5
