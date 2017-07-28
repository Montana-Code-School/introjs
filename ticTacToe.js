class TicTacToe {

  constructor() {
    this.grid = [
      ["_", "_", "_"],
      ["_", "_", "_"],
      [" ", " ", " "]
    ];
  }

  set(xcord, ycord, mark) {
    this.grid[xcord - 1][ycord - 1] = mark;
  };

  get(xcord, ycord) {
    return this.grid[xcord - 1][ycord - 1];
  };

  displayGrid() {
    var result = '';
    for(var i = 0; i < this.grid.length; i++){
      result += this.grid[i][0] + "|"
        + this.grid[i][1] + "|"
        + this.grid[i][2] + "\n";
    };
    return result;
  };
};

module.exports = TicTacToe;
