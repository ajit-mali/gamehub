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
<<<<<<< HEAD
            tile.src = "./images/blank2.jpg";

            document.getElementById("board").append(tile);

=======
            tile.src = "./images/blank.jpg";

        //drag function
        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragover", dragOver);
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragleave", dragLeave);
        tile.addEventListener("drop", dragDrop);
        tile.addEventListener("dragend", dragEnd);
    
        document.getElementById("board").append(tile);
>>>>>>> 77d1917 (added jigsaw edited about-us and our_games)
        }
    }

    //pieces
    let pieces = [];
    for (let i = 1; i <= rows*columns; i++){
        pieces.push(i.toString()); 
    }
<<<<<<< HEAD
=======
    pieces.reverse();
    for(let i = 0; i< pieces.length; i++){
        let j = Math.floor(Math.random() * pieces.length)

        //swap
        let temp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = temp;
    }
>>>>>>> 77d1917 (added jigsaw edited about-us and our_games)

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./images/" + pieces[i] + ".jpg";
<<<<<<< HEAD
        document.getElementById("pieces").append(tile);

    }   
=======

        //drag function
        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragover", dragOver);
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragleave", dragLeave);
        tile.addEventListener("drop", dragDrop);
        tile.addEventListener("dragend", dragEnd);
        
        document.getElementById("pieces").append(tile);
    }   
}

//drag tiles
function dragStart() {
    currTile = this; 
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
>>>>>>> 77d1917 (added jigsaw edited about-us and our_games)
}