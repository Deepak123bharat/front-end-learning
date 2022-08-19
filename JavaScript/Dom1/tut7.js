let findString121 = "python"
let links5 = document.links
console.log(links5)
let href;
Array.from(links5).forEach((ele)=>{
    href = ele.href
    if(href.includes(findString121))
    console.log(href)
})