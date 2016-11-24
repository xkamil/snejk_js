var MainController = function () {

};

MainController.prototype.initGame = function(boardSize, gameSpeed){
    this.board = new Board(boardSize);
    board.init();
};

module.exports = MainController;