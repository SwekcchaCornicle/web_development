/*
Primitive:
    String
    Number
    Boolean
    BigInt

    undefined
    null

    Symbol

Non primitive:
    Object

Java script determine data type type dynamically
*/
var score = 102

let score = 102

let name = "chaocode"

let islogged = false

//object
let teaType = ["lemmon tea" , "orange tea" , "oolong tea"]

let user ={firstname:"hitesh", lastname:"chaudhary"}

let getscore = score

//object

let obj = {firstname:"swekccha", isLooggedin:true}

console.log(obj.firstname)
console.log(obj[firstname])

//array

let anotherUser = ["Hittest", true]
console.log(anotherUser[0])
//Function

let anotherbal =  new Number(120)

//data type

console.log(typeof getscore)

let username = "Swekccha"

console.log(`hello ${username}`)

//sm1 != sm2
let sm1 = Symbol("Swekccha")
let sm2 = Symbol("Swekccha")