const user = {
    username : "shikhar",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} welcome to the app`)
    }
}


user.welcomeMessage()
user.username = "rohan"
user.welcomeMessage() // ab ye changes sirf this keyword ki wajha se change ho paya hai
// kyuki hame waha pe value hardcore nahi ki thi jo bhi context tha username ka use liya tha


console.log(this)

// ---------- ARROw FUNCTION --------------------//

const chai = () => {
    let username = "shikhar"
    console.log(this)
}
chai()


const addTwo = (num1  , num2) => {
    return num1 + num2
} 
console.log(addTwo(3,4))

const multiply_two = (num1 , num2) =>{
    return num1*num2
}
console.log(multiply_two(4,6))

// can also be written in one more way and is called implicit return
//const addTwo = (num1 , num2) => num1 + num2

//way to return object
//const addTwo = (num1 , num2) => ({username : "shikhar"})