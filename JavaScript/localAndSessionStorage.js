console.log("local and session storage")
localStorage.setItem("Name", "Deepak")
localStorage.setItem("Name2", "Rahul")
var arr = ["ravi", "gandi", "amit"]
localStorage.setItem("arr",JSON.stringify(arr))
var arrOut = localStorage.getItem("arr")
console.log(JSON.parse(arrOut))

let name = localStorage.getItem("Name")
localStorage.removeItem("Name")
console.log(name)