function calculateCartPrice(...num1){
    return num1
}
//    yaha pe ... ye ek rest operator hai 

console.log(calculateCartPrice(200,500,700,500))


// now agar aisa ho ki 

function boplll(val1 , val2 , ...num1){
    return num1
}

console.log(boplll(200 ,90 ,98,78,65))


///handling objects 
const user = {
    username : "hitesh",
    prices : 900
}

function handlingobjects(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`)
}

handlingobjects(user)


const multiply_two = function(a,b){
    return a*b
}

let value = multiply_two(9,4)
console.log(`value of 9 multiplied by 4 is ${value}`)