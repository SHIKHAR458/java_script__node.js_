//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "f090-0"
tinderUser.name = "shikhar"
tinderUser.isloggedIn = false

// aise bhahar aake bhi declare kar sakte hai

console.log(tinderUser)

const newuser = {
    email : "shikharp108@gmail.com",
    fullname: {
        username : {
            firstname :"shikhar",
            lastname : "patel"
        }
    }
}

console.log(newuser.fullname)
console.log(newuser.fullname.username.lastname)


//can combine objects also

const obj1 = {1 : "a",2:"b"}
const obj2 = {3: "v" , 4:"k"}

const obj3 = { obj1 , obj2}
console.log(obj3) /// ye sahi method nahi hai object ko add karna ka isme objects ke andar object 
                 /// aa jayenge
//aise karo
const obj4 = Object.assign(obj1 , obj2) // still less used
console.log(obj4)

const obj5 = {...obj1 , ...obj2}
console.log(obj5)


console.log(Object.keys(tinderUser)) //array of keys ko return karega
console.log(Object.values(tinderUser)) 
console.log(Object.entries(tinderUser))  //array ke andar array raheta hai har key value pair ko ek array bana diya jata hai


console.log(tinderUser.hasOwnProperty('islokkn'))   //to check ki aise koi key present hai ki nahi

const course = {
    coursename : "bholpknck"
}

const {coursename} = course
console.log(coursename)

const {coursename: ok} = course
console.log(ok)