function asyncFunc(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("some data1")
            resolve("failure")
        }, 3000);
    })
}
function asyncFunc1(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("some data2")
            resolve("sfailure")
        }, 3000);
    })
}
console.log("fetching data 1..")
    asyncFunc().then((res) => {
    console.log(res)
    console.log("fetching data 2..")
    asyncFunc1().then((res) => {
    console.log(res)
}
)
}
)
