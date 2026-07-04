const grid = document.getElementsByClassName('grid');
const playerTurn = document.getElementById('player-turn');
const boardContainer = document.getElementById('board-container');

const moveOfPlayerA = [], moveOfPlayerB = [];

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function checkWin(moves) {
    return winConditions.some(condition => {
        return condition.every(index => moves.includes(index));
    });
}

boardContainer.addEventListener('click', (e) => {
    if(!e.target.classList.contains('grid')) {
        return;
    }
    if(e.target.textContent !== "") {
        return;
    }
    if(playerTurn.textContent === "It's A's Turn") {
        moveOfPlayerA.push(parseInt(e.target.getAttribute('data-index')));
        e.target.textContent = 'O';
        e.target.style.color = 'blue';
        e.target.style.display = 'flex';
        e.target.style.justifyContent = 'center';
        e.target.style.alignItems = 'center';
        e.target.style.fontWeight = 'bold';
        e.target.style.fontSize = '30px';
        if(checkWin(moveOfPlayerA)) {
            playerTurn.style.color = 'blue';
            playerTurn.textContent = 'Player A won!';
            boardContainer.style.pointerEvents = 'none';
        } else {
            playerTurn.style.color = 'red';
            playerTurn.textContent = "It's B's Turn";
        }
    } else {
        moveOfPlayerB.push(parseInt(e.target.getAttribute('data-index')));
        e.target.textContent = 'X';
        e.target.style.color = 'red';
        e.target.style.display = 'flex';
        e.target.style.justifyContent = 'center';
        e.target.style.alignItems = 'center';
        e.target.style.fontWeight = 'bold';
        e.target.style.fontSize = '30px';
        if(checkWin(moveOfPlayerB)) {
            playerTurn.style.color = 'red';
            playerTurn.textContent = 'Player B won!';
            boardContainer.style.pointerEvents = 'none';
        } else {
            playerTurn.style.color = 'blue';
            playerTurn.textContent = "It's A's Turn";
        }
    }
});