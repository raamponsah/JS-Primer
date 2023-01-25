// Simple Callbacks
function eat(food,b){
    if(typeof b != 'function') return false
    console.log(`Eating ${food}`);
    return b(food)
}

function digesting(material){
    return `Digesting ${material}`;
}

function farting(material){
    return `Farting ${material} smell`;
}


// Advanced Callbacks
function eat(obj,fn){
    if(typeof fn != 'function') return false
   
    if(fn.name){
         console.log(`${fn.name.toUpperCase()} FUNCTION HAS INITIALISED...`)
    }

    if(obj.status != 'clean'){
        antiParastalsis(obj.food)
    }

    return fn(obj.food)
}

function digesting(material){
    return `Digesting ${material}`;
}

function farting(material){
    return `Farting ${material} smell`;
}

function antiParastalsis(){
     console.log(`Ugh! Rejecting disgusting food`);
}

eat({food:'Beans',status:'dirty'},digesting)