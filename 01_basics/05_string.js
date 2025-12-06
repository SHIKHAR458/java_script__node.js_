//const name = "shikhar"
//const age = 89

//console.log(name + age + "value") //bad syntax
//use bacticks

//console.log(`hello my name is ${"shikhar"} and my age is ${"19"}`) // string interpolation bolte hai --> modern way hai ye yahi use kiya kar

const newop = new String("shikhar-patel")

console.log(newop)
console.log(newop[4])
console.log(newop.length)
console.log(newop.toUpperCase())
console.log(newop.charAt(3))

const newstring = newop.substring(9)
console.log(newstring)
const ok = newop.slice(1,5)
console.log(ok)