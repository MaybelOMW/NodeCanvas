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
        console.log(canvas_arr[h].join(''));
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

    canvas_arr.map(row => console.log(row.join('')));
    return canvas_arr;
}

module.exports = {
    canvas,
    line
};