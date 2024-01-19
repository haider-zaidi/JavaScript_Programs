// There are 7 primitive and non-primitive data types in JavaScript:
/* Primitive:
N : Null
N : Number
S : Symbol
S : String
B : Boolean
B : BigInt
U : Undefined  
--> Non-primitive => Objects : used to maintain Key-Value pair. */

//Primitive:

let a=null
let b=7
let c=Symbol("It is a symbol")
let d="This is string"
let e=true
let f=BigInt(6677)
let g=undefined
console.log(a,b,c,d,e,f,g)

// Non-Primitive:

const item = {
    "Abc" : 10,
    "Xyz" : 20,
    "Mno" : 30
}

console.log(item["Abc"])
