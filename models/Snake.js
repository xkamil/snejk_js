var Direction = require("./../direction");

function Snake(length, direction, startPosition) {
    this.length = length;
    this.direction = direction;
    this.parts = [];

    this.parts[0] = startPosition;
    this.feeded = false;

    this.initPartsPosition();
}

Snake.prototype.initPartsPosition = function(){
    var mod = Direction.getDirectioModifier(this.direction);

    for (var i = 1; i < this.length; i++){
        var part = { x : this.parts[i-1].x + (mod.x * -1), y : this.parts[i-1].y + (mod.y * -1)}
        this.parts.push(part);
    }
};

Snake.prototype.changeDirection = function (direction) {
    if(direction != Direction.getOpositeDirection(this.direction)){
        this.direction = direction;
    }
};

Snake.prototype.move = function () {
    var mod = Direction.getDirectioModifier(this.direction);
    var newHead = {
        x : this.parts[0].x + mod.x,
        y : this.parts[0].y + mod.y
    };

    if(!this.feeded){
        this.parts.pop();
    }else{
        this.feeded = false;
    }
    this.parts.unshift(newHead);
};

Snake.prototype.feed = function () {
    this.feeded = true;
}

module.exports = Snake;



