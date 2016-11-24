function BoardWall(boardSize) {
    this.parts = [];
    this.size = boardSize;

    this.init();
};

BoardWall.prototype.init = function () {
  for(var i = -1; i < this.size + 1; i++){
      for(var j = -1; j < this.size + 1; j++){

          if(j == -1 || j == this.size){
              this.parts.push({x : i, y : j})
          }else if(i == -1 || i == this.size){
              this.parts.push({x : i, y : j})
          }
      }
  }
};

module.exports = BoardWall;