let body = document.getElementsByTagName('body')[0]
let h1 = document.createElement('h1');
let p = document.createElement('p');

h1.innerText = "Am coming from JavaScript"
p.innerText ='I am a young paragraph in JavaScript'

body.appendChild(h1);
body.appendChild(p);
