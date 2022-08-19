// let ele = document.getElementById("first")
// console.log(ele.outerHTML = document.getElementById("h1").outerHTML)

// let sel = document.querySelector('#second')
// sel = document.querySelectorAll(".container + div")
// console.log(sel)


// multiple element selector 
let ele = document.getElementsByTagName("div")

for (let index = 0; index < ele.length; index++) {
    const element = ele[index];
    console.log(element)
}

// Array.from(ele).forEach(element=>{
//     element.style.fontSize = '40px'  
// })
// console.log(ele)