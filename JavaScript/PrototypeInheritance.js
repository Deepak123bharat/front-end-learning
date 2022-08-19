
const proto = {
    slogan: function () {
        return `This company is the best`
    },
    changeName: function (newName) {
        this.name = newName
    }
}

const dsrObj = Object.create(proto)
dsrObj.name = "Deepak"
dsrObj.changeName("Rojo")
// console.log(dsrObj)

function Employee(name, salary, experience) {
    this.name = name,
        this.salary = salary,
        this.experience = experience
}

Employee.prototype.slogan = proto.slogan

var empObj = new Employee("first", 50000, 3)
// console.log(empObj)

function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience)
    this.language = language
}

Programmer.prototype = Employee.prototype

var rah = new Programmer("rohan", 20, 2, "java")
console.log(rah)