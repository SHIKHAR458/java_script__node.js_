//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log(`hi`)
})();

((name) => {
    // unnamed iife
    console.log(`oh how are you man ${name}`)
})('shikahr');

(function add(num1,num2){
    let ans = num1 + num2
    console.log(`${num1} + ${num2} is equal to ${ans}`)
})(6,7);