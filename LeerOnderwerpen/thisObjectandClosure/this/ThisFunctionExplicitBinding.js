const person = {
    name: "mohammed",
    age: 22
}

const person2 = {
    name: "naim",
    age: 85
}

const person3 = {
    name: "maurits",
    age: 69
}

function printInfo(gemeente, stad) {
    console.log(`My name is ${this.name} & I am ${this.age} y/o I live in ${gemeente} stad: ${stad}`)
}

console.log("\n call \n");

//call with komma seperator
printInfo.call(person, "borgerhout", "Antwerpen")
printInfo.call(person2, "kiel")
printInfo.call(person3, "deurne")

console.log("\n apply \n");

//apply within an array
printInfo.apply(person, ["borgerhout" , "Antwerpen"])
printInfo.apply(person2, ["kiel"])
printInfo.apply(person3, ["deurne"])

//bind 
let printMoName = printInfo.bind(person, "borgerhout", "Antwerpen")
let printNaimName = printInfo.bind(person2, "kiel")
let printMauName = printInfo.bind(person3, "deurne")

console.log("\n bind \n ");

printMoName()
printNaimName()
printMauName()