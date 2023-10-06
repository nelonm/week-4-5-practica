 const arr =  [1, 2, 3, 4, 5]

function returnDouble (number) {
    return number * 2
}


const retunrDouble2 = number =>  number * 2 // arrow function, nem kell zárójel, se return, ha csak 1 paraméter / 1 sor kell

console.log (returnDouble2 (25))


  for (let i = 0; i < arr.length; i++) {
    console.log (returnDouble(arr[i]))
  }
/*
  function logDouble (number){
      console.log (number*2)
  }


  arr.forEach (logDouble) */

  arr.forEach( element => console.log (element*2))