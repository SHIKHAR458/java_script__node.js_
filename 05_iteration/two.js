const myNum = [1,2,3,4,5,6,7,8,9,10]
//callback function 
const  newNums = myNum.map((num)=> num + 10)

console.log(newNums)

const anarray = myNum.map((num) => num*10).map((num) => num +1).filter((num) => num >= 40)

console.log(anarray)
////  ---------------- reduce 

const myNums = [1,2,3,4]
const total = myNums.reduce((accumulator, current) => {
    console.log(`acc: ${accumulator} and current : ${current}`)
    return accumulator + current
}, 0)

// or
// const tota; = myNums.reduce((acc,curr) => acc +curr , 0)

console.log(total)