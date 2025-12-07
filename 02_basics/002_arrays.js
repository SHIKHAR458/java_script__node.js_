const marvel_heroes = ["hulk" , "thor" , "ironman","wonderwomen"]
const dc_heroes = ["gg" , "kk" ,"oo","pp"]

console.log(marvel_heroes.concat(dc_heroes))
const new_array = [...marvel_heroes, ...dc_heroes]
console.log(new_array)


const another_array = [1,2,3,4,[4,5,6,7],[9,8,7],0]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

///
console.log(Array.isArray("shikhar"))
console.log(Array.from("shikhar"))
console.log(Array.from({name: "shikhar"})) ///special case

let score1 = 100
let score2 = 500

console.log(Array.of(score1,score2))

