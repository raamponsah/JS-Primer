# Functions Excercises

Write a function that accept firstname, surname and age. The function should determine whether the person is above 13 or below.
If the person is below 13 display this "You are not allowed, Kofi" where Kofi is the firstname

```js 

function checkUserAge(firstname, surname, age) {
    if(age < 13){
        console.log(`You are not allowed, ${firstname}`)
    }
}

checkUserAge('Kofi','Amoah, 13)
```


Write a function that accepts a message and 
returns the length of the message.

```js 
// let items = ['pocket'];
// items.length
// String are array like
function checkMessageLength(message) {
    return message.length
}
```

# Assignment

1. Write a function that accepts a message and check whether  it more than 200. If it is more than 200 characters,  the function should return "You have exceeded 200 characters, be smart"

2. Write a function that accepts a an array of numbers and returns the the sum of the array elements.

3. Write a function that accepts two arrays and display them in the console.

4. Write  a function that accepts three numbers and returns the minimum and maximum values. _[Hint use only if and else statements]_
5. 

6. Write a function that accepts an array of numbers and returns a new array of odd numbers only.
