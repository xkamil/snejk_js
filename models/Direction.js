var Direction = {
    UP : "up",
    DOWN : "down",
    LEFT : "left",
    RIGHT : "right",

    getOpositeDirection : function (direction) {
        var opposite = {
            right : "left",
            left : "right",
            up : "down",
            down : "up"
        };

        return opposite[direction];
    },

    getDirectioModifier : function (direction) {
        var vectors = {
            up : {x : 0, y : -1},
            down : {x : 0, y : 1},
            left : {x : -1, y : 0},
            right : {x : 1, y : 0}
        };

        return vectors[direction];
    }
};

module.exports = Direction;

