let html = document.getElementById('html');
let body = document.getElementById('body');
let h1Elements = document.getElementsByTagName("p")
let firstElement = document.getElementById('first')
let pFirst = document.getElementById('firstPara')

let pElements = document.getElementsByTagName('p')

firstElement.style.color = 'yellow'
firstElement.style.background ='black'





function applyStyles(){
    for(let i =0; i < pElements.length; i++){
       setTimeout(function(){
        pElements[i].style.background = `rgb(${i*55},${i*44},${i*90})`
        pElements[i].style.color = 'white'
        pElements[i].style.borderRadius = '10px'
        pElements[i].style.width = '200px'
        pElements[i].style.padding = '10px'
        pElements[i].style.color = 'pink'
        pElements[i].style.border = '5px solid orange'
       }, `${i*2000}`)
    }
}


applyStyles()












body.style.background = 'pink'
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.flexDirection = 'column'
body.style.width = '900px'
body.style.margin = '0 auto'
body.style.padding = '20px'


html.style.background = 'white'







// for (var i = 0; i < h1Elements.length; i++) {
// console.log(h1Elements[i]);
// h1Elements[i].style['backgroundColor'] = "pink";

// console.log(h1Elements[i].style['backgroundColor'])

// }


console.log(firstElement.style)