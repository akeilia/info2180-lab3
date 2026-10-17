document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const squares = board.querySelectorAll("div");

    // Exercise 1: add the "square" class to each div in the board
    squares.forEach(function (square) {
        square.classList.add("square");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const squares = board.querySelectorAll("div");

    // Array that tracks the state of the game
    let gameState = Array(9).fill(null);
    let currentPlayer = "X";

    squares.forEach(function (square, index) {
        // Exercise 1: add the "square" class
        square.classList.add("square");

        // Exercise 2: put an X or O in the square when clicked
        square.addEventListener("click", function () {
            gameState[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            // Alternate between X and O
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const squares = board.querySelectorAll("div");

    // Array that tracks the state of the game
    let gameState = Array(9).fill(null);
    let currentPlayer = "X";

    squares.forEach(function (square, index) {
        // Exercise 1: add the "square" class
        square.classList.add("square");

        // Exercise 2: put an X or O in the square when clicked
        square.addEventListener("click", function () {
            gameState[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

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
});