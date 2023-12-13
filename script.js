document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const message = document.getElementById('message');

    let currentPlayer = 'red';
    let winner = null;
    let moves = 0;

    const checkWinner = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (cells[a].classList.contains(currentPlayer) &&
                cells[b].classList.contains(currentPlayer) &&
                cells[c].classList.contains(currentPlayer)) {
                return true;
            }
        }

        return false;
    };

    const handleCellClick = (index) => {
        if (!winner && !cells[index].classList.contains('occupied')) {
            cells[index].classList.add(currentPlayer, 'occupied');
            moves++;

            if (checkWinner()) {
                winner = currentPlayer;
                message.textContent = `${winner.toUpperCase()} es el ganador. ¡El perdedor debe tomar un shot!`;
            } else if (moves === 9) {
                message.textContent = '¡Es un empate! ¡Ambos tomen un shot!';
            } else {
                currentPlayer = currentPlayer === 'red' ? 'blue' : 'red';
                message.textContent = `${currentPlayer.toUpperCase()}'s Turn`;
            }
        }
    };

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => handleCellClick(index));
    });
});
