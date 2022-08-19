// let car = {
//     name:"maruti",
//     topSpeed: 89,
//     run : function(){
//         console.log("car is running")
//     }
// }

// car.run()

function generalCar(name, topSpeed)
{
    this.name = name
    this.topSpeed = topSpeed
    this.run = function(){
        console.log(`${this.name} is running`)
    }
    Object.prototype.toString = function(){
        console.log(`${this.name} ${this.topSpeed} is running`)
    }
    
}

var od = new generalCar("oddy", 40)
od.toString()