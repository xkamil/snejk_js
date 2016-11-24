function Food(maxX, maxY){
    this.maxX = maxX;
    this.maxY = maxY;
    this.parts = [];
    this.parts[0] = {};
    this.parts[0].x = 0;
    this.parts[0].y = 0;
};

Food.prototype.relocate = function () {
    var x = Math.floor(Math.random() * (this.maxX + 1));
    var y = Math.floor(Math.random() * (this.maxY + 1));

    this.parts[0].x = x;
    this.parts[0].y = y;
};

Food.prototype.moveTo = function(x, y){
    this.parts[0].x = x > this.maxX ? this.maxX : x;
    this.parts[0].y = x > this.maxY ? this.maxY : y;
};

module.exports = Food;
