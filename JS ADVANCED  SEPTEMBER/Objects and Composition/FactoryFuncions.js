function createREct (width, height){

    let rect = {
        width,
        height,

    }

    rect.GetArea = () => {

        return rect.width * rect.height;

    }

    rect.Area = rect.GetArea();

    return rect;

}

let rectangle = createREct(4, 2 );
console.log(rectangle);
console.log(rectangle.width);
console.log(rectangle.Area);

console.log(rectangle);

