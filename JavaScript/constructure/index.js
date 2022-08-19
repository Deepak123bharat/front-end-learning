console.log("helldfslkjdo")



// function Player (n, t){
//     this.name = n
//     this.team = t
// }

// var myPlayer = new Player("messi", "barcelona")
// console.log(myPlayer) 
var person1 = {
    name : 'ram',
}

var person2 = {
    name : 'John'
}

function myName(m, c){
    this.age = m
    this.city = c
}

person1

var myBind = myName.bind(person1, 23, "bhilwara" )
// myBind()
console.log(person1)
// myName.call(person2)