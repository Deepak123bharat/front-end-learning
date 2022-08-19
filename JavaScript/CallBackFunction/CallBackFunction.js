// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

const students = [
    { name : "ram", subject: "hindi"},
    { name : "Shyam", subject: "English"}
]

function enrollStudents(student, callback){
    setTimeout(()=>{
        students.push(student)
        callback()
    }, 3000)
}

function getStudents(){
    setTimeout(()=>{
        let str = ""
        students.forEach(function(student){
            str += `<li>name:${student.name} sub:${student.subject}</li>`
            
        })
        document.getElementById("students").innerHTML = str  
    }, 1000)
}

let std = {name:"ravan", subject:"sins"}
enrollStudents(std, getStudents)
getStudents()
