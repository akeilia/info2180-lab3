document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const squares = board.querySelectorAll("div");
    const status = document.getElementById("status");
    const newGameBtn = document.querySelector(".btn");

    // Exercise 5: remember the original message so we can restore it
    const defaultMessage = status.textContent;

    // Array that tracks the state of the game
    let gameState = Array(9).fill(null);
    let currentPlayer = "X";

    // Exercise 4: all 8 ways to win (rows, columns, diagonals)
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    // Exercise 4: returns "X" or "O" if someone has won, otherwise null
    function checkWinner() {
        for (const combo of winningCombos) {
            const a = combo[0];
            const b = combo[1];
            const c = combo[2];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

    squares.forEach(function (square, index) {
        // Exercise 1: add the "square" class
        square.classList.add("square");

        // Exercise 2: put an X or O in the square when clicked
        square.addEventListener("click", function () {
            // Exercise 6: do nothing if the square already has an X or an O
            if (gameState[index] !== null) {
                return;
            }

            gameState[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            // Exercise 4: check if this move won the game
            const winner = checkWinner();
            if (winner) {
                status.textContent = "Congratulations! " + winner + " is the Winner!";
                status.classList.add("you-won");
            }

            // Alternate between X and O
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });

        // Exercise 3: add the "hover" class when the mouse enters a square
        square.addEventListener("mouseover", function () {
            square.classList.add("hover");
        });

        // Exercise 3: remove the "hover" class when the mouse leaves
        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });
    });

    // Exercise 5: reset everything when New Game is clicked
    newGameBtn.addEventListener("click", function () {
        gameState = Array(9).fill(null);
        currentPlayer = "X";

        squares.forEach(function (square) {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });

        status.textContent = defaultMessage;
        status.classList.remove("you-won");
    });
});