function uselessFunction() {
    return console.log(this);
}

console.log("duidelijkheid" ,this, "\n");
uselessFunction();