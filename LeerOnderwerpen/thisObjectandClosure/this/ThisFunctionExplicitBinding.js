const person = {
     name: "mo",
     age: 21
}

function printInfo() {
    return `My name is ${this.name} & I am ${this.age} y/o`
}

const something = printInfo.call(person)

console.log(something);