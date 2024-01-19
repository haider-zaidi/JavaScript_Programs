let a="Hii"
let b=3
console.log(a+b)
console.log(typeof(a+b))
const c = {
    Name: "Abc",
    Class: 12,
    Sub: "Maths"
}
c['Friend']="Shubham"
c['Name']="Anil"
console.log(c);
// c=12  => It will give error we can't change object to number or string.
console.log(c["Sub"])

const dict = {
    True : "Yes",
    False : "No",
    Tommorow: "Coming day",
    Yesterday: "Day already gone"
}
console.log("Word Meaning is:",dict["Tommorow"])
console.log(dict.Tommorow) // => Both are same.