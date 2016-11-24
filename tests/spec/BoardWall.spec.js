var Board = require('../../models/BoardWall');

describe('BoardWall ', function () {

    it('should have parts only outside of board', function () {
        var board = new Board(2);

        var expectedString = "####\n#  #\n#  #\n####\n";

        var boardRep = [];
        for(var i = 0; i < board.size + 2; i++){
            for(var j = 0; j < board.size + 2; j++){
                boardRep[i] = [];
                boardRep[i][j] = false;
            }
        }

        for(var i in board.parts){
            var part = board.parts[i];

            boardRep[part.x + 1][part.y + 1] = true;
        }

        var boardString = "";

        for(var i = 0; i < board.size + 2; i++){
            for(var j = 0; j < board.size + 2; j++){
                if(boardRep[i][j]){
                    boardString += "#";
                }else{
                    boardString += " ";
                }
            }
            boardString += "\n";
        }

        expect(boardString).toEqual(expectedString);
    });


});