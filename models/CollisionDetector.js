var CollisionDetector = function (obj1, obj2) {
    for (var i in obj1.parts){
        for (var j in obj2.parts){
            if(obj1.parts[i].x == obj2.parts[j].x && obj1.parts[i].y == obj2.parts[j].y){
                return true;
            }
        }
    }
    return false;
};

module.exports = CollisionDetector;