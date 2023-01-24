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

5. Write a function that accepts an array of numbers and returns a new array of odd numbers only.

6. Write a function that accepts a fullname and returns the firstname and lastname in an array.

// 6!. Write a function that takes a string and returns it in all uppercase

7. Write a function that accepts an array of numbers, and filters all the odd numbers and returns the list of odd numbers as one array element and the sum of the odd numbers as another element.

8. Write a function that accepts a string and returns the vowels within the string.


<!-- Code the solutions to the following queastions. -->

9.  Write a function that accepts a number and a function. When this function is called the function returns true or false depending on whether the number is an odd number or not.

10.  Write a function that accepts a number and a callback function. When this function is called, the function returns true or false depending on whether the number is an prime number or not.

11. Write a function that takes three arguments; an array, a boolean flag and function. if the this function is run and the boolean flag is true, the callback function displays the list of the array. If the boolean flag is false the callback displays 'There are no elements in the array'.

12. Write a function that accepts a user object and a callback. This object must contain username, password, loginStatus and age. The function should test whether the user is loggged in or not. If the user is not logged in, the callback should display, 'User is not logged in'. Otherwise `${user.username} is logged in`
