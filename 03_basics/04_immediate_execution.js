//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log(`hi`)
})();

((name) => {
    // unnamed iife
    console.log(`oh how are you man ${name}`)
})('shikahr')