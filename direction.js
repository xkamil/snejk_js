var Direction = {
    UP : "up",
    DOWN : "down",
    LEFT : "left",
    RIGHT : "right",

    getOpositeDirection : function (direction) {
        if(direction == this.UP) return this.DOWN;
        if(direction == this.DOWN) return this.UP;
        if(direction == this.RIGHT) return this.LEFT;
        if(direction == this.LEFT) return this.RIGHT;
    },

    getDirectioModifier : function (direction) {
        if(direction == this.UP) return {x : 0, y : -1};
        if(direction == this.DOWN) return {x : 0, y : 1};
        if(direction == this.RIGHT) return {x : 1, y : 0};
        if(direction == this.LEFT) return {x : -1, y : 0};
    }
};

module.exports = Direction;

