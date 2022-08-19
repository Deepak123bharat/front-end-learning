
let obj = {
    name : "harry",
    age : 23,

}
function Obj(name){
    this.name = name
}

Obj.prototype.getName = function() {return this.name}
let obj2 = new Obj("obj2")
console.log(obj2)