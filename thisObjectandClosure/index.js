const person = new Object();
var name;
var age;

function Person(name, age) {
    this.name = name,
        this.age = age
}

var mo = new Person("Mohammed", 23)
console.log(mo)

const Calculator = {
    title: "the Calculator",
    description: "this is a calculator with a couple of functions",
    a: 5,
    b: 6,
    Doer: (a, b) => () => () => a + b,


    do: function Calc(a, b) {
        return function add(a, b) {
            return a + b;
        },
        function divide(a, b) {
            return a / b;
        },
        function multiply(a, b){
            return a * b;
        },
        function subtract(a, b){
            return a - b;
        },
        function divide(a, b) {
            return a / b;
        }
    }
}

const newFunction = Calculator.do(5,5);

console.log("Deze functie is beter dan die van Mo. " + newFunction(3,2))

// const Person = new{
//     name: 'Naim',
//     age: 23,
//     yearOfBirth: function CalcYearOfBirth() {
//       let today = new Date().getFullYear()
//       return today - this.age;
//     },
//     info: function printInfo() {
//       return `My name is ${this.name} & I am ${this.age} y/o, I was born in the year ${this.yearOfBirth()}`
//     }
//   }