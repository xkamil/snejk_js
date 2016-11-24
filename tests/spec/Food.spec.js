require('jasmine-expect');
require('jasmine');

var Food = require('../../models/Food');

describe('Food ', function () {

    it('should be placed in random position', function () {
        var food = new Food(2,2);

        for(var i = 0; i < 30; i++){
            food.relocate();

            expect(food.parts[0].x <= 2 && food.parts[0].x >= 0).toBeTrue();
            expect(food.parts[0].y <= 2 && food.parts[0].y >= 0).toBeTrue();
        }
    });

    it('should relocate Food properly', function () {
        var food = new Food(10,10);

        food.moveTo(20,20);

        expect(food.parts[0]).toEqual(jasmine.objectContaining({x : 10, y: 10}));

        food.moveTo(5,7);

        expect(food.parts[0]).toEqual(jasmine.objectContaining({x : 5, y: 7}));
    });

});