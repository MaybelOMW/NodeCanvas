const errorLog = require('./errorLog');

// Drawing Canvas
function canvas(args){
    let width = parseInt(args[1]);
    let height = parseInt(args[2]);
    let canvas_arr = new Array(height+2);

    for(let h = 0; h < height+2; h++){
        canvas_arr[h] = new Array(width+2);

        for(let w = 0; w < width+2; w++){
            if (h === 0 || h === height+1){
                canvas_arr[h][w] = "-";
            }
            else{
                if(w === 0 || w === width+1){
                    canvas_arr[h][w] = "|";
                }
                else canvas_arr[h][w] = " ";
            }
        }
        // console.log(canvas_arr[h].join(''));
    }
    return canvas_arr;
}

// Drawing Line
function line(args, canvas_arr){
    let x1 = parseInt(args[1]);
    let y1 = parseInt(args[2]);
    let x2 = parseInt(args[3]);
    let y2 = parseInt(args[4]);
    let start;
    let end;

    // Horizontal Line: y1 = y2
    if (y1 === y2){
        if(x1 < x2) {
            start = x1;
            end = x2;
        }
        else {
            start = x2;
            end = x1;
        }

        for(let w = start; w <= end; w++){
            canvas_arr[y1][w] = "x";
        }
    }

    // Vertical Line: x1 = x2
    else if (x1 === x2){
        if(y1 < y2) {
            start = y1;
            end = y2;
        }
        else {
            start = y2;
            end = y1;
        }

        for(let h = start; h <= end; h++){
            canvas_arr[h][x1] = "x";
        }
    }

    else {
        let error = 'ERR: Only horizontal and vertical lines are accepted. Type "help" for more information.';
        errorLog(error);
    }

    // canvas_arr.map(row => console.log(row.join('')));
    return canvas_arr;
}

// Drawing Rectangle
function rectangle(args, canvas_arr){
    let x1 = parseInt(args[1]);
    let y1 = parseInt(args[2]);
    let x2 = parseInt(args[3]);
    let y2 = parseInt(args[4]);
    let gradient;

    // Calculate gradient for 2 points: gradient = |(y2-y1)/(x2-x1)|
    gradient = (y2-y1)/(x2-x1);
    gradient *= -1;

    if (gradient){
        // Draw horizontal border
        canvas_arr = line(['', x1, y1, x2, y1], canvas_arr);
        canvas_arr = line(['', x2, y2, x1, y2], canvas_arr);

        // Draw vertical border
        canvas_arr = line(['', x1, y1, x1, y2], canvas_arr);
        canvas_arr = line(['', x2, y2, x2, y1], canvas_arr);
    }
    else {
        let error = 'ERR: Only upper left corner (x1, y1) and lower right corner (x2, y2) points are accepted. Type "help" for more information.';
        errorLog(error);
    }
    // canvas_arr.map(row => console.log(row.join('')));
    return canvas_arr;
}

// Recursion to change the same color neighbour to new color
function changeSameColor(canvas_arr, old_color, new_color, x, y, width, height){
    // Return at boundary, different color, already changed color
    if(x <= 0 || x >= width || y <= 0 || y >= height || canvas_arr[y][x] !== old_color || canvas_arr[y][x] === new_color)
        return;

    canvas_arr[y][x] = new_color;
    
    // top
    changeSameColor(canvas_arr, old_color, new_color, x, y - 1, width, height);
    
    // right
    changeSameColor(canvas_arr, old_color, new_color, x + 1, y, width, height);

    // down
    changeSameColor(canvas_arr, old_color, new_color, x, y + 1, width, height);

    // left
    changeSameColor(canvas_arr, old_color, new_color, x - 1, y, width, height);
    
    return canvas_arr;
}

// Bucket Fill
function bucketFill(args, canvas_arr){
    let x = parseInt(args[1]);
    let y = parseInt(args[2]);
    let new_color = args[3];
    let old_color = canvas_arr[y][x];
    let width = canvas_arr[0].length - 1;
    let height = canvas_arr.length - 1;

    canvas_arr = changeSameColor(canvas_arr, old_color, new_color, x, y, width, height);
    
    return canvas_arr;
}

module.exports = {
    canvas,
    line, 
    rectangle, 
    bucketFill
};