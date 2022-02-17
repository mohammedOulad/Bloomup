function uselessFunction() {
    return console.log(this);
}

console.log(this);
uselessFunction();