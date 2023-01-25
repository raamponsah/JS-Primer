# Callback
Callbacks are function that are called at a later time within another function
So think of a function that can call another function at another time.

We are used to running function by ourselves by attaching () to the function name.
For example
```js
function eat(){
    return 'Eating';
}

eat(); //here we call the functuon ourselves
```

However with regards to callbacks we allow another function to call it for us.
```js

function eat(food,b){
    if(typeof b != 'function') return false
    console.log(`Eating ${food}`);
    return b(food)
}

function digesting(material){
    return `Digesting ${material}`;
}

function farting(material){
    return `Farting ${material} smell`;
}

eat('Samosa', digesting); //

eat('Beans', farting); //

```