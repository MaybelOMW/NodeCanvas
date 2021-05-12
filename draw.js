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
    return;
}

module.exports = {
    canvas,
};