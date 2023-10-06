let object = {
key1: "name",
key2: 29,
key3: {
    friend: true,
    name: "Gopsz Jakab",
},
key4: ["alma", "körte", "barack"]
}
 /*
function myFunc (){
    console.log ("this is my function")
}

myFunc()

function greetMe (name) {
    console.log (`hello ${name}!`)
}

greetMe (undefined)

function addTwoNumbers (number1, number2) {
    let sum = number1 + number2
    console.log ( `the sum of ${number1} and {$number2} is: ${sum}`)
    return sum
}

let resultOfAddTwoNumbers = addTwoNumbers(10, 2)
console.log (`the result of resultOfAddTwoNumbers is: ${resultOfAddTwoNumbers}`) */

function cbExample () {
    console.log ('I am a callback function')
}

function funcExample (name, callback) {
    console.log (`hello ${name}`)
    callback()
}

funcExample ("Ricsi", cbExample)