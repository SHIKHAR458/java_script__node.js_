let btn1 = document.querySelector("#btn1")
btn1.onmouseover = (evt) => {
    console.log(evt)
    console.log(evt.type)
    console.log(evt.target)
}

let btn2 = document.querySelector("#btn2")


btn2.onclick = () => {
    console.log("hi bro button is clicked")
}
btn2.addEventListener("click", () =>{
    console.log("button one was clicked")
})              