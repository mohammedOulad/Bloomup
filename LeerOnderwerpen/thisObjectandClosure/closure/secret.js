let secret = "not secret";

function startPrivate(secret) {
    return {
        makePrivate() {
            secret = "now secret"
            return secret;
        }
    }
}

const setPrivate = startPrivate(secret);


console.log("this is var secret: ", secret)
console.log("this is secret in function: ", setPrivate.makePrivate())
console.log("still: ", secret)