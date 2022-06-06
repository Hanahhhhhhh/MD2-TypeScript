export class Circle{
    color: string ='green';
    radius: number = 20;

    constructor(color: string, radius: number) {


        this.color = color;


        this.radius = radius;


    }
}
let circleList: Circle[] = [];
circleList.push(new Circle('blue',10));
circleList.push(new Circle('green', 20));
circleList.push(new Circle('pink',22));
function showCircle(circle: Circle){
     console.log("circle has color is" + circle.color+ "radius" + circle.radius);
}
circleList.forEach(showCircle);