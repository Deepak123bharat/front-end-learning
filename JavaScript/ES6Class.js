class Employee {
    constructor(name, experience, div) {
        this.name = name
        this.experience = experience
        this.division = div
    }

    slogan() {
        return `I am ${this.name}`
    }
    joiningYear() {
        return new Date().getFullYear() - this.experience
    }
    static Add(a, b) {
        return a + b
    }
}

class Programmer extends Employee{
    constructor(name, experience, div, language)
    {
        super(name, experience, div)
        this.language = language
    }
    favLan(){
        if(this.language == "Python")
            return "Python"
        else
            return "JavaScript"
    }
}

let dsrObj = new Employee("DSR", 2, "div")
// console.log(dsrObj.joiningYear())
// console.log(Employee.Add(5, 6))

let proObj = new Programmer("rav", 2, "hel", "Python")
