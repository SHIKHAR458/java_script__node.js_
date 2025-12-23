const arr = [1 ,2 , 3 , 4 ,5]

for (const  i of arr) {
    console.log(i);
}

const greetings = "Hello World!"
//for (const j of greetings){
//    console.log(`each char is ${j}`)
//}

//Maps

const map = new Map()
map.set('IN' , "india")
map.set('USA' , "United States Of America")

//console.log(map)

// hoe to apply for of loop on this 

for (const key of map) {
    console.log(key)
}

  //  for(const [key,value] of map){
  //    //     console.log(key ,':-' , value)
//}
  ///// ---------------------- for in ------------------------------------\\\\\\\\\\\\\\\\\

  const newonj = {
    cpp: "c++",
    rb : "ruby",
    swift : "swift by apple"
  }


  for(const key in newonj){
    console.log(key);
  }

  for(const key in newonj){
    console.log(`${key} shortcut is for ${newonj[key]}`)
  }

// ---------- for each loop --------------------\\

const new_array = [ "shikhar" , "ok" , "hi" , "are" , "you"]
//new_array.forEach(element => {
//   console.log(element)  
// });

// isko aise bhi kar sakte hai like 
function printMe(item){
  console.log(item)
}


new_array.forEach(printMe)

//can do one more thing

    new_array.forEach((item , index , arr) =>{
      console.log(item , index , arr)
    })


    // ----------------------------------------------\\
    const myCoding = [
      {
        languageName : "javascript",
        languagefile : "c++"
      },
      {
        languageName : "javasct",
        languagefile : "c++"
      },
     {
        languageName : "jcript",
        languagefile : "c++"
      }
    ] 


myCoding.forEach((item) => {
  console.log(item.languageName)
})

//----filter operations
const myNums = [1,2,3,4,5,6,7,8,9,10]

//const new_nums = myNums.filter((num) => num > 4 )
////const new_nums = myNums.filter((num) => { -------yaha pe return use karna padega 
// return num > 4            -------------------// kyuki paranthesis hai
//})
//console.log(new_nums)

const newNums = []
myNums.forEach((num) => {
  if (num > 4){
    newNums.push(num)
  }
})

console.log(newNums)