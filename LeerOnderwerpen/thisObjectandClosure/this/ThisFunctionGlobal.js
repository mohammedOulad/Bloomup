function uselessFunction() {
    return console.log(this);
}

console.log("duidelijkheid",this);
uselessFunction();