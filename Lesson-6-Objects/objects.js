// Objects
// {} object literal
/*
const object  = {
    property: value
}

*/

// let items = ["socks","shirts","shoes","jumper"]

const person1 = {
    name: 'Delphine',
    age: 23,
    complexion:"dark",
    height:5.6,
    siblings: ['Gabriele','Graham','Daphne','Gad'],
    car: {
        model:"Hyundai",
        capacity:1.8
    }
}

// Accessing properties
console.log(person1.name)
console.log(person1.age)
console.log(person1.complexion)

// Concatination: Type 1 using the +  sign
let s = person1.name + ' ' + ' is ' + person1.complexion

// Concatination: Type 2 using the backticks
let y = `${person1.name} is ${person1.age} years old`
console.log(y)


// Overiding the properties
person1.complexion = "Vanilla"
person1.height = 6.2
person1.siblings.push("Mary")
console.log(person1)
console.log(`${person1["name"]} has ${person1.siblings.length} siblings`)