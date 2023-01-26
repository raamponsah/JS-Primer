


// Recommended way
// addEventListener('mouseout', function(e){
//     console.log(e)
// })

// addEventListener('click', function(e){
//     console.log(e)
// })

// addEventListener('keyup', function(e){
//     console.log(e)
// })


// addEventListener('keydown', function(e){
//     console.log(e)
// })


// addEventListener('keypress', function(e){
//     console.log(e)
// })


// addEventListener('dblclick', function(e){
//     console.log(e)
// })



// addEventListener('resize', function(e){
//     console.log(e)
// })


// For all the html elements you can apply or listen to an event
// on them

// let h1 = document.querySelector('h1');
// let p = document.querySelector('p')

// h1.addEventListener('click',function(e){
//     console.log('You\'ve clicked me')
// })


// p.addEventListener('dblclick',function(){
//     alert("Hello P")
// })



// let b = document.createElement('button')

// let body = document.getElementsByTagName('body')[0]

// b.innerText = 'Click Me'

// b.addEventListener('click',function(){
//     console.log('Am a button!')
// })

// body.appendChild(b)



// Create an array of elements of buttons (5)
// Attach event listeners to each
// When clicked, the button to console log 'I am at position:' its index
// all in js

let body = document.getElementsByTagName('body')[0]
// Version 1
let button1 = document.createElement('button')
let button2 = document.createElement('button')
let button3 = document.createElement('button')
let button4 = document.createElement('button')
let button5 = document.createElement('button')

const buttons =[button1, button2, button3, button4, button5]

// version 2
const numberOfButtons = 10

// Change loop depending on version
for(let i = 0; i < numberOfButtons; i++){
    let button = document.createElement('button')
    button.innerText = `Button ${i+1}`
    button.addEventListener('click', function(){
        console.log(`I am at position ${i}`)
    })

    body.appendChild(button)
}

