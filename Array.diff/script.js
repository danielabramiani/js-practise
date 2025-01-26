function array_diff(a, b) {
    let new_arr = a.filter( element => !b.includes(element) )
    return new_arr
  }


function solveNQueens(N) {
  const results = [];
  const board = Array.from({ length: N }, () => Array(N).fill('.'));

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < N; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }
    return true;
  }

  function placeQueens(row) {
    if (row === N) {
      results.push(board.map(row => row.join('')));
      return;
    }

    for (let col = 0; col < N; col++) {
      if (isSafe(row, col)) {
        board[row][col] = 'Q';
        placeQueens(row + 1);
        board[row][col] = '.';
      }
    }
  }

  placeQueens(0);
  return results;
}
