// how to write a function

function sayMyName(){
    console.log("hi")
    console.log("ok")
}

sayMyName()


function add(number1 , number2){
    console.log(number1 + number2)
}

//add(3,6)
//add(3,"a") /// ye wala part wrong hai aise nahi hona chahiye
/// is liye yaha pe checking zaruri hai


const result = add(5,6)

console.log("Result : ", result) //abhi result undefined ayega kyuki koi value nahi
//return ki hai 

function addi(number1 , number2){
    let result = number1 + number2
    return result
}
const resulti = addi(9,6)
console.log("result: " , resulti)


function hellouser(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in we welcome you ......`
}


console.log(hellouser("shikhar"))
console.log(hellouser())
