//function sum(a,b){
// console.log(a+b)
//}

//function calculator(a,b, sumcallback){
//   sum(a,b)
//}

//calculator(4,6,sum)

/*
function getData(dataId){
    setTimeout(() => {
        console.log("hello")
   },2000)
}

getData(90)



function getData(dataId , getNextData){
    setTimeout(() => {
        console.log("data" , dataId)
        if(getNextData){
            getNextData();
        }
    },2000);
}

getData(1,() => {
    getData(2);
})

function hiprintkar(data, callback){
    setTimeout(() => {
        console.log(data)
        if(callback){
            callback()
        }
    }, 2000);
}
// call back hell
hiprintkar("hi" , () => {
    hiprintkar("bye",() => {
        hiprintkar("chalhat")
    })
})
let promise = new Promise((resolve, reject) => {
    console.log("i am a promise")
    resolve("no error occured")
})


let promise1 = new Promise((resolve, reject) => {
    console.log("i am a promise")
    reject("error occured")
})

function getData(dataId , getNextData){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("data" , dataId);
            reject("success")
            if(getNextData){
               getNextData()
            }
        }, 5000)
    })
}

 let prom = getData(123)
console.log(prom)
*/

const getPromise = () => {
    return new Promise((resolve,reject) =>{
        console.log("I am a promise")
        reject("success")
    })
}

let promise = getPromise()
promise.then((res) => {
    console.log("promise fulfilled", res)
})

promise.catch((err) => {
    console.log("rejected", err)
})
