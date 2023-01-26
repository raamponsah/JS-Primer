let body = document.getElementsByTagName('body')[0]
let moo = document.createElement('h1');
// let p = document.createElement('p');
// let div = document.createElement('div');
// let ul = document.createElement('ul');
// let li = document.createElement('li');

moo = "Am coming from JavaScript" //1
moo.innerText = "Am coming from JavaScript" //2

// p.innerText ='I am a young paragraph in JavaScript'

// li.innerText = "Johnson Goes to school"

// ul.appendChild(li)



// div.appendChild(h1);
// div.appendChild(p);
// div.appendChild(ul)

// body.appendChild(div);



const foodItems = ['Cassava','Tomato','Plantain','Garden Eggs','Salmon']

let ul = document.createElement('ul');

for (let i = 0; i < foodItems.length;i++){
   setTimeout(function(){
   
    let li = document.createElement('li')
    li.innerText = foodItems[i]
    ul.appendChild(li)

    setTimeout(function() {
    ul.removeChild(li)
    },800)


   }, `${i*200}`);



}



// ul.style.listStyle = 'none'
// ul.style.display = 'flex'
// ul.style.color = 'red'




// body.appendChild(ul)