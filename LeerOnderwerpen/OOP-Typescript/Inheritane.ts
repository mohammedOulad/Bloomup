//Inheritance
class Animal {
    move() {
        console.log(`Im moving.`);
    }
    makeNoise() {
        console.log("Make noise.");
    }
}

class Dog extends Animal {
    makeNoise(): void {
        console.log("Bark bark bark");
    }
}

class goldenRetriever extends Dog {
    makeNoise(): void {
        super.makeNoise()
        console.log("woof woof");
    }
}

const dog = new goldenRetriever();
dog.makeNoise();