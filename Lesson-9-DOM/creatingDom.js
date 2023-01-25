let body = document.getElementsByTagName('body')[0]
// let h1 = document.createElement('h1');
// let p = document.createElement('p');
// let div = document.createElement('div');
// let ul = document.createElement('ul');
// let li = document.createElement('li');

// h1.innerText = "Am coming from JavaScript"
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
    },10000)


   }, `${i*2000}`);



}



// ul.style.listStyle = 'none'
// ul.style.display = 'flex'
// ul.style.color = 'red'




body.appendChild(ul)