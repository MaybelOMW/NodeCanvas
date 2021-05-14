const errorLog = require('../logs/errorLog');

// Check if XY Within Boundary
function boundaryCheck(canvas_arr, x, y){
    let width = canvas_arr[0].length - 1;
    let height = canvas_arr.length - 1;

    if (x <= 0 || x >= width || y <= 0 || y >= height){
        errorLog(`ERR: The (${x}, ${y}) is out of boundary. Type "help" for more information.`);
        return false;
    }
    return true;
}

module.exports = {
    boundaryCheck
}