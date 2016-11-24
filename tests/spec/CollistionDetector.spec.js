var Food = require('../../models/Food');
var Snake = require('../../models/Snake');
var Direction = require('../../models/Direction');
var BoardWall = require('../../models/BoardWall');
var DetectCollision  = require('../../models/CollisionDetector');

describe('Collistion detector ', function () {

    it('should return true if object are colliding', function () {
        var food = new Food(5,5);
        var snake = new Snake(1, Direction.LEFT, {x : 3, y : 3});
        var board = new BoardWall(6);
        food.moveTo(3,4);

        expect(DetectCollision(food,snake)).toEqual(false);

        food.moveTo(3,3);

        expect(DetectCollision(food,snake)).toEqual(true);

        food.moveTo(-1,-1);

        expect(DetectCollision(food,board)).toEqual(true);

        food.moveTo(1,1);

        expect(DetectCollision(food,board)).toEqual(false);

        food.moveTo(5,5);

        expect(DetectCollision(food,board)).toEqual(false);
    });

});