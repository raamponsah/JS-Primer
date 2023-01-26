
const body = document.querySelector('body')
const nightBtn = document.createElement('button')
const dayBtn = document.createElement('button')

nightBtn.innerText = 'Night'
dayBtn.innerText = 'Day'

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

