let h1Elements = document.getElementsByTagName("h1")

for (var i = 0; i < h1Elements.length; i++) {
console.log(h1Elements[i]);
h1Elements[i].style.backgroundColor = "Yellow";

}


console.log(h1Elements.length)