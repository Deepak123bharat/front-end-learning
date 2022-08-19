console.log("divmanipulation ")

var div = document.createElement("div")
div.id = "firstDiv"
div.style.background = "red"
div.style.margin = "auto"

var heading = document.querySelector("head")
heading.append(div)