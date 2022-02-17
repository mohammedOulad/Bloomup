const Calculator = {
    title: "the Calculator",
    description: "this is a calculator with a couple of functions",
    input: function Calc(a, b) {
        return {
            Add() {
                return a + b;
            },
            Divide() {
                return a / b;
            },
            Multiply() {
                return a * b;
            },
            Subtract() {
                return a - b;
            }
        }
    }
}
const calculatorExample = Calculator.input(5, 5);

console.log("Adder value: " + calculatorExample.Add())
console.log("Divide value: " + calculatorExample.Divide())
console.log("Multiply value: " + calculatorExample.Multiply())
console.log("Subtract value: " + calculatorExample.Subtract())