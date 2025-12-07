const myArr = [0,1,2,3,4,"shikhar"]

const arr = new Array(1,2,3,4,5)

console.log(myArr)
console.log(arr)

arr.push(9)
arr.pop()
arr.pop()

arr.unshift(9)
arr.shift()
arr.shift()

console.log(arr)

console.log(arr.includes(2))
console.log(arr.indexOf(3))
const newone = [1,2,4,6,7,8]

const again = newone.join()
console.log(again)

/// slice ,splice

const shikhar = [1,2,3,4,5,6,7]


console.log(shikhar.slice(1,3))
console.log("A" , shikhar)

console.log(shikhar.splice(1,3))
console.log("b", shikhar)


