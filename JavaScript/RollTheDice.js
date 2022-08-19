arr = []

arr.push([1, 6])
arr.push([2, 6])
arr.push([3, 5])

arr.sort((a,b)=>{
    return a[1]-b[1]
})
var first = 5
var second = 2
var third = 3

var max = 0
var min = 0
var middle = 0
if(first == second && second == third)
{
    all.color = "blue"
}
else if (first == second)
{

    if(third > first)
        second.color = "red";
    else 
        second.color = "yello"
}
else if(second == third)
{
    if(first> second)
        first.color = "red";
    else 
        first.color = "yello"
}
else if(third == first)
{

    if(second> third)
        second.color = "red";
    else 
        second.color = "yello"
}
else {
    max.color = "yello"
    min.color = "red"
    median.color = "green"
}
console.log(arr)