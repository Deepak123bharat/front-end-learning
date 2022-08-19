a = document.links
targetLink = "http://www.google.com/"

var isContains = Array.from(a).filter(element =>{
    return element.href === targetLink
})

console.log(isContains[0])
