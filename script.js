const str = "Hello world"

console.log (str.substring(0, 3))
console.log (str. charAt(4))

const strTwo = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

console.log (strTwo.indexOf("fox"))
console.log (strTwo.split(" "))

console.log (Math.floor(Math.random())*40)


const arr = ["alma", "körte", "uborka"]

arr. push("szilva", "birs", "szőlő")

const arrElement = arr.pop()

console.log (arrElement, arr)

console.log (arr.reverse())

console.log (arr.join(" "))

/*for (const key of Object.keys(obj)) {
    console.log (key, obj[kex])
} */

const users = [
    {
        name: "John Doe",
        age:33
    },
    {
        name: "Kis Pista",
        age:26
    },
    {
        name: "Kovács János",
        age:54
    },
    {
        name: "Gipsz Jakab",
        age:28
    }
]

// const userNames = []

/* const result = users.forEach((user) => {
    return user.name
}) */


const userNames = users.map((user, index) => {
    return `The user's name is: ${user.name}, he/she is ${user.age} years old. He/She is at the ${index + 1} place`
})

console.log(userNames)
