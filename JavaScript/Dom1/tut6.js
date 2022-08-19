var btn = document.querySelector(".container")
btn.addEventListener("mouseover", (e)=>{
    document.querySelector("body").style.background=`rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
        
})
