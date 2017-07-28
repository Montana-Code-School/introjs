var assert = require('chai').assert;
var TicTacToe = require('./ticTacToe');

describe.only("Tic Tac Toe", function() {
  it("can place an x at 1, 1", function() {
    //Arrange
    var ticTacToe = new TicTacToe();
    //Act
    ticTacToe.set(1, 1, "X");
    //Assert
    assert.equal(ticTacToe.get(1, 1), "X");
  });

  it("can place an o at 3, 3", function() {
    var ticTacToe = new TicTacToe();
    ticTacToe.set(3, 3, "O");
    assert.equal(ticTacToe.get(3, 3), "O");
  });

  it("can place an x at 1, 1, and o at 2,2", function() {
    var ticTacToe = new TicTacToe();
    ticTacToe.set(1, 1, "X");
    assert.equal(ticTacToe.get(1, 1), "X");
    ticTacToe.set(2, 2, "O");
    assert.equal(ticTacToe.get(2, 2), "O");
  });
  it("can place an x at 1,1 2,2 and 3,3", function() {
    var ticTacToe = new TicTacToe();
    ticTacToe.set(1, 1, "X");
    assert.equal(ticTacToe.get(1, 1), "X");
    ticTacToe.set(2, 2, "X");
    assert.equal(ticTacToe.get(2, 2), "X");
    ticTacToe.set(3, 3, "X");
    assert.equal(ticTacToe.get(3, 3), "X");
  });
  it("can make a 3 line string version of an empty grid", function() {
    //Arrange
    var ticTacToe = new TicTacToe();
    //Act
    var display = ticTacToe.displayGrid();
    //Assert
    assert.equal(display, "_|_|_\n_|_|_\n | | \n");
    console.log(display);
  });

  it("can make a 3 line string of a grid with an x in the center (2,2)", function() {
    //Arrange
    var ticTacToe = new TicTacToe();
    //Act
    ticTacToe.set(2, 2, "X");
    var display = ticTacToe.displayGrid();
    //Assert
    assert.equal(display, "_|_|_\n_|X|_\n | | \n");
    console.log(display);
  });

  xit("can show x wins when x is at 1,1 1,2 and 1,3", function() {
  });
});
