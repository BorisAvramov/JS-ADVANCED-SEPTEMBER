class Point {

    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

static distance (point1, point2) {

    let y = Math.abs(point2.x - point1.x);
    let x = Math.abs(point2.y - point1.y);

    let result = Math.sqrt(x * x + y * y);

    // let result = Math.sqrt((point2.x - point1.x) + Math.pow((point2.y - point1.y)))
    return result;

}


}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));