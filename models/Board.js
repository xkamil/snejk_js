var BoardWall = require('./BoardWall');
var Snake = require('./Snake');
var Food = require('./Food');
var DetectCollision = require('./CollisionDetector');
var Direction = require('./Direction');

var Board = function (size) {
    this.size = size;
};

Board.prototype.init = function () {
    this.boardWall = new BoardWall(this.size);
    this.food = new Food(this.size - 1, this.size - 1);
    this.snake = new Snake(3, Direction.UP, {x : Math.floor(this.size / 2), y : Math.floor(this.size / 2)});

    this.food.relocate();
    while(DetectCollision(this.food,this.snake)){
        this.food.relocate();
    }
};

Board.prototype.print = function () {
    var boardRep = [];

    // init boardRep
    for(var i = 0; i < this.size + 2; i++){
        for(var j = 0; j < this.size + 2; j++){
            boardRep[i] = [];
            boardRep[i][j] = false;
        }
    }

    // add snake to boardRep
    for(var i in this.snake.parts){
        var part = this.snake.parts[i];

        boardRep[part.x + 1][part.y + 1] = true;
    }

    // add food to boardRep
    for(var i in this.food.parts){
        var part = this.food.parts[i];

        boardRep[part.x + 1][part.y + 1] = true;
    }

    // add board outer wall to boardRep
    for(var i in this.boardWall.parts){
        var part = this.boardWall.parts[i];

        boardRep[part.x + 1][part.y + 1] = true;
    }    
    
    var boardString = "";

    for(var i = 0; i < this.size + 2; i++){
        for(var j = 0; j < this.size + 2; j++){
            if(boardRep[j][i]){
                boardString += "#";
            }else{
                boardString += " ";
            }
        }
        boardString += "\n";
    }

    console.log(boardString);
};

module.exports = Board;