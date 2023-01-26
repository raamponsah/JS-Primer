let p = document.querySelector('p.brown a');
p.innerHTML ="<strike>Link</strike>"


// let h = document.querySelector('div#house ')

function smartSelector(s){
    let x =s.split(" ")
    let y =x[x.length-1]
    let z = document.createElement(y)
    let d =applyStyles(z)
    display(d)

}

function applyStyles(d){
    d.style.color = "red"
    d.style.fontSize = "20px"
    d.style.fontWeight = "bold"
    d.style.fontStyle = "italic"
    d.style.textDecoration = "underline"
    return d;
}


function display(d){
    console.log(d)
}

console.log(smartSelector(`ul li h2`))


