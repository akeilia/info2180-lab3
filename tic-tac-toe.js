document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const squares = board.querySelectorAll("div");

    // Exercise 1: add the "square" class to each div in the board
    squares.forEach(function (square) {
        square.classList.add("square");
    });
});