
document.addEventListener("DOMContentLoaded", function() {
    // Select all cells and the board element
    const cells = document.querySelectorAll("[data-cell]");
    const board = document.querySelector(".board");
    let turn = "x"; // Track whose turn it is ('x' or 'o')

    // Function to handle when a cell is clicked
    function handleClick(event) {
        const cell = event.target;
        
        // If the cell already has an 'x' or 'o', do nothing
        if (cell.classList.contains("x") || cell.classList.contains("o")) return;

        // Mark the cell with the current player's symbol
        cell.classList.add(turn);
        cell.textContent = turn.toUpperCase(); // Set the text content to 'X' or 'O'

        // Check if the current player has won
        if (checkWin(turn)) {
            setTimeout(() => {
                // Show the winning message
                alert(`${turn.toUpperCase()} wins!`);
                // Reset the board after 5 seconds
                resetBoard();
            }, 0); // Show the alert immediately
            return;
        }

        // Switch turns between 'x' and 'o'
        turn = turn === "x" ? "o" : "x";
    }

    // Function to check if the current player has won
    function checkWin(player) {
        // Define all possible winning patterns
        const winPatterns = [
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
            [0, 4, 8], // Diagonal from top-left to bottom-right
            [2, 4, 6], // Diagonal from top-right to bottom-left
        ];

        // Check if any pattern is satisfied
        return winPatterns.some((pattern) =>
            pattern.every((index) => cells[index].classList.contains(player))
        );
    }

    // Function to reset the board for a new game
    function resetBoard() {
        // Remove 'x' and 'o' classes and clear text content from all cells
        cells.forEach((cell) => {
            cell.classList.remove("x", "o");
            cell.textContent = "";
        });
        // Reset the turn to 'x'
        turn = "x";
    }

    // Add event listener to handle cell clicks
    board.addEventListener("click", handleClick);
});
