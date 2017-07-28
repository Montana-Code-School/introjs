var TicTacToe = function(){

  var grid=[["_","_","_"],["_","_","_"],[" "," "," "]];

  this.set = function(xcord, ycord, mark){
    grid[xcord - 1][ycord - 1] = mark;
  };

  this.get = function(xcord, ycord){
    return grid[xcord - 1][ycord - 1];
  };

  this.displayGrid = function(){
    var result = '';
    for(var i = 0; i < grid.length; i++){
      result += grid[i][0] + "|" + grid[i][1] + "|" + grid[i][2] + "\n";
    };
    return result;
  };
};

module.exports = TicTacToe;
