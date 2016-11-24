require('jasmine-expect');
require('jasmine');

var Food = require('../../models/Food');
var Snake = require('../../models/Snake');
var Direction = require('../../direction');
var CollisionDetector  = require('../../models/CollistionDetector');

describe('Collistion detector ', function () {

    it('should return true if object are colliding', function () {
        var collisionDetector = new CollisionDetector();
        var food = new Food(20,20);
        var snake = new Snake(3, Direction.LEFT, {x : 3, Y : 3});
        food.moveTo(3,4);

        expect(collisionDetector.detectCollision(food,snake)).toBeFalse();

        food.moveTo(3,3);

        expect(collisionDetector.detectCollision(food,snake)).toBeTrue();
    });

});