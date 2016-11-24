var Snake = require('../../models/Snake');
var Direction = require('../../models/Direction');

describe('Snake ', function () {


    it('should change direction only if new direction is not opposite to current', function () {
        var snake = new Snake(3, Direction.UP, {x : 3, y: 3});

        snake.changeDirection(Direction.DOWN);
        expect(snake.direction).toEqual(Direction.UP);

        snake.changeDirection(Direction.LEFT);
        expect(snake.direction).toEqual(Direction.LEFT);

        snake.changeDirection(Direction.RIGHT);
        expect(snake.direction).toEqual(Direction.LEFT);

        snake.changeDirection(Direction.DOWN);
        expect(snake.direction).toEqual(Direction.DOWN);

        snake.changeDirection(Direction.RIGHT);
        expect(snake.direction).toEqual(Direction.RIGHT);
    });

    it('should properly init snake parts position based on snake direction', function () {
        var snake = new Snake(3, Direction.UP, {x : 3, y: 3});

        expect(snake.parts[0]).toEqual(jasmine.objectContaining({x : 3, y: 3}));
        expect(snake.parts[1]).toEqual(jasmine.objectContaining({x : 3, y: 4}));
        expect(snake.parts[2]).toEqual(jasmine.objectContaining({x : 3, y: 5}));

        var snake = new Snake(3, Direction.DOWN, {x : 3, y: 3});

        expect(snake.parts[0]).toEqual(jasmine.objectContaining({x : 3, y: 3}));
        expect(snake.parts[1]).toEqual(jasmine.objectContaining({x : 3, y: 2}));
        expect(snake.parts[2]).toEqual(jasmine.objectContaining({x : 3, y: 1}));

        var snake = new Snake(3, Direction.LEFT, {x : 3, y: 3});

        expect(snake.parts[0]).toEqual(jasmine.objectContaining({x : 3, y: 3}));
        expect(snake.parts[1]).toEqual(jasmine.objectContaining({x : 4, y: 3}));
        expect(snake.parts[2]).toEqual(jasmine.objectContaining({x : 5, y: 3}));

        var snake = new Snake(3, Direction.RIGHT, {x : 3, y: 3});

        expect(snake.parts[0]).toEqual(jasmine.objectContaining({x : 3, y: 3}));
        expect(snake.parts[1]).toEqual(jasmine.objectContaining({x : 2, y: 3}));
        expect(snake.parts[2]).toEqual(jasmine.objectContaining({x : 1, y: 3}));
    });

    it('should move snake properly based on his direction', function () {
        var snake = new Snake(3, Direction.UP, {x : 3, y: 3});
        snake.move();

        expect(snake.parts[0]).toEqual(jasmine.objectContaining({x : 3, y: 2}));
        expect(snake.parts[1]).toEqual(jasmine.objectContaining({x : 3, y: 3}));
        expect(snake.parts[2]).toEqual(jasmine.objectContaining({x : 3, y: 4}));

        var snake = new Snake(3, Direction.DOWN, {x : 3, y: 3});
        snake.move();

        expect(snake.parts[0]).toEqual(jasmine.objectContaining({x : 3, y: 4}));
        expect(snake.parts[1]).toEqual(jasmine.objectContaining({x : 3, y: 3}));
        expect(snake.parts[2]).toEqual(jasmine.objectContaining({x : 3, y: 2}));

        var snake = new Snake(3, Direction.LEFT, {x : 3, y: 3});
        snake.move();

        expect(snake.parts[0]).toEqual(jasmine.objectContaining({x : 2, y: 3}));
        expect(snake.parts[1]).toEqual(jasmine.objectContaining({x : 3, y: 3}));
        expect(snake.parts[2]).toEqual(jasmine.objectContaining({x : 4, y: 3}));

        var snake = new Snake(3, Direction.RIGHT, {x : 3, y: 3});
        snake.move();

        expect(snake.parts[0]).toEqual(jasmine.objectContaining({x : 4, y: 3}));
        expect(snake.parts[1]).toEqual(jasmine.objectContaining({x : 3, y: 3}));
        expect(snake.parts[2]).toEqual(jasmine.objectContaining({x : 2, y: 3}));
    });

    it('should increse length when feeded', function () {
        var snake = new Snake(3, Direction.UP, {x : 3, y: 3});
        snake.feed();
        snake.move();

        expect(snake.parts.length).toEqual(4);
        expect(snake.parts[0]).toEqual(jasmine.objectContaining({x : 3, y: 2}));
        expect(snake.parts[1]).toEqual(jasmine.objectContaining({x : 3, y: 3}));
        expect(snake.parts[2]).toEqual(jasmine.objectContaining({x : 3, y: 4}));
        expect(snake.parts[3]).toEqual(jasmine.objectContaining({x : 3, y: 5}));

        snake.move();

        expect(snake.parts.length).toEqual(4);
        expect(snake.parts[0]).toEqual(jasmine.objectContaining({x : 3, y: 1}));
        expect(snake.parts[1]).toEqual(jasmine.objectContaining({x : 3, y: 2}));
        expect(snake.parts[2]).toEqual(jasmine.objectContaining({x : 3, y: 3}));
        expect(snake.parts[3]).toEqual(jasmine.objectContaining({x : 3, y: 4}));
    });
});