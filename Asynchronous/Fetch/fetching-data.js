

const body = document.querySelector('body');

let data = fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(response){
    return response.json()
}).then(function(realData){
    console.log(realData)

    body.innerText = realData.title
})

