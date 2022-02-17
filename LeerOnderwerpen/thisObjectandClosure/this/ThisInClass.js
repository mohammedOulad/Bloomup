class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}

const rectangle = new Rectangle(15, 10)

console.log("het nieuw object", rectangle);
console.log("oppervlakte: ", rectangle.area);
