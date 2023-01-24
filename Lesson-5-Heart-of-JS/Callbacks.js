// Callbacks

function feed(name){
    return `Feeding: ${name}`
}

function bath(name){
    return `Bathing: ${name}`
}

function dress(name){
    return `Dressing: ${name}`
}

function pickUpBaby(babyName, doSomethingwithBaby){
   return doSomethingwithBaby(babyName)
}

pickUpBaby('Dora', dress)