
const tiles = document.querySelectorAll(".tile");
const PLAYER_X = 'X';
const PLAYER_O = 'O';
let turn = PLAYER_X

const boardState = Array(tiles.length);
boardState.fill(null);

//Elements
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-Over-Area");
const gameOverText = document.getElementById("game-Over-Text");
const playAgain = document.getElementById("play-again");

tiles.forEach((tile) => tile.addEventListener("Click", tileClick));

function tileClick(event) {
    if (gameOverArea.classList.constains("visible")) {
        return;
    }

    const tile = event.target;
    const tileNumber = tile.dataset.index;
    if (tile.innerText != "") {
        return;
    }
    if (turn === PLAYER_X) {
        tile.innerText = PLAYER_X;
        boardState[tileNumber - 1] = PLAYER_X;
        turn = PLAYER_O;
    }
    else {
         tile.innerText = PLAYER_O;
        boardState[tileNumber - 1] = PLAYER_O;
        turn = PLAYER_X;
        
    }
}