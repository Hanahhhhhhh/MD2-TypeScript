"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = 'green';
        this.radius = 20;
        this.color = color;
        this.radius = radius;
    }
    return Circle;
}());
exports.Circle = Circle;
var circleList = [];
circleList.push(new Circle('blue', 10));
circleList.push(new Circle('green', 20));
circleList.push(new Circle('pink', 22));
function showCircle(circle) {
    console.log("circle has color is" + circle.color + "radius" + circle.radius);
}
circleList.forEach(showCircle);
