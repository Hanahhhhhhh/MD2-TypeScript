"use strict";
exports.__esModule = true;
var circle_1 = require("./circle");
function distance(circleOne, cricleTwo, d) {
    var distance = Math.pow(circleOne.radius - cricleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
var circle1 = new circle_1["default"](9);
var circle2 = new circle_1["default"](5);
console.log(distance(circle1, circle2, 24));
