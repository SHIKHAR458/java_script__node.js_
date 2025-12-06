console.log("2" > 1)
console.log("02" >1)

console.log(null > 0)
console.log(null === 0)
console.log(null >= 0)

// avoid karna hai aise oncersions ko

let userOne = {
    email : "user@google.com",
    age : 78
}
let userTwo = userOne

userTwo.email = "shikharp108@gmail.com"

console.log(userOne.email)