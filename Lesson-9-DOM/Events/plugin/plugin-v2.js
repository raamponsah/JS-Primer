
const body = document.querySelector('body')
const nightBtn = document.createElement('button')
const dayBtn = document.createElement('button')

const timeOfDay = new Date()
console.log(timeOfDay.getHours())

nightBtn.innerText = 'Night'
dayBtn.innerText = 'Day'

addEventListener('load', function(){
    if(timeOfDay.getHours() > 12){
        body.style.background = 'black'
        body.style.color = 'white'
    }
})

nightBtn.addEventListener('click', function(){
    body.style.background = 'black'
    body.style.color = 'white'
})


dayBtn.addEventListener('click', function(){
    body.style.background = 'white'
    body.style.color = 'black'
})


body.appendChild(nightBtn)
body.appendChild(dayBtn)

