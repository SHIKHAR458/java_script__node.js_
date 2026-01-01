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
}) */

let promise = new Promise((resolve, reject) => {
    console.log("i am a promise")
    resolve("no error occured")
})


let promise1 = new Promise((resolve, reject) => {
    console.log("i am a promise")
    reject("error occured")
})