var rows = 5;
var columns =5;

var currTile;
var otherTile;

var turns = 0;

window.onload = function(){
    //initialize the board here
    for (let r = 0; r < rows; r++){
        for (let c = 0; c < columns; c++) {
            //<img>
            let tile = document.createElement("img");
            tile.src = "./images/blank2.jpg";

            document.getElementById("board").append(tile);

        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows*columns; i++){
        pieces.push(i.toString()); 
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./images/" + pieces[i] + ".jpg";
        document.getElementById("pieces").append(tile);

    }   
}