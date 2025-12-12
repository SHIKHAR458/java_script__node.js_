//singelton --->sirf constructor method me banta hai
// object.create

// object literals --> is method me singelton nahi banta hai

const mySym = Symbol("key1")

const JsUser = {
    name: "shikhar",
    "age" : 20,
    placed : true,
    email : "sdsmcc@gmail.com",
    [mySym]:"okbye" //----- aise kiya jata hai symbols ko declare
}

console.log(JsUser.email)
console.log(JsUser['email'])
console.log(JsUser['age'])
console.log(typeof JsUser['mySym'])


//value change karne ke liye

JsUser.email = "ccddnmkvn@gmail.com"

//Object.freeze(JsUser) //ab changes nahi hinge actual js me 
JsUser.email = "robo@gmail.com"
console.log(JsUser)
 
JsUser.greeting = function(){
    console.log("hi bro")
}

console.log(JsUser.greeting()) // greeting ko aise lena hai ()

JsUser.greetingTwo = function(){
    console.log(`hello ,${this.name}`)
}

console.log(JsUser.greetingTwo())