//let heading = document.getElementById("heading")
//console.log(heading)

//let headings = document.getElementsByClassName("heading2")
//console.dir(headings)
//console.log(headings)

//let parahs = document.getElementsByTagName("p")
//console.dir(parahs)

//let elements = document.querySelector("p")
//console.dir(elements)

let btl1 = document.querySelector("#btl1")
btl1.onclick = () => {
    console.log("btl1 was clicked")
    let a = 25;
    a++;
    console.log(a)
}

let div = document.querySelector("div")
div.onmouseover  = () => {
    console.log("you are inside div")
}