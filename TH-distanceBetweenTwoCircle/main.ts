import Circle from "./circle";

function distance (circleOne: Circle, cricleTwo: Circle, d: number): number{
    let distance = Math.pow(circleOne.radius - cricleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
let circle1 = new Circle(9);
let circle2 = new Circle(5);
console.log(distance(circle1,circle2,24));