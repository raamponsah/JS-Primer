# Functions

Functions are the heart of modern JavaScript. To understand functions think of them as actions. Functions allow us to do something. Let's say you want your users to get a pop-up, such behaviour is achieved with a function. A function is pretty much simple but can become complex in a short while. Therefore, to avoid bugs, always have this gurdeline, a function must do one thing and one thing very well. This can help you think through your code and debug easily.

How do we write functions.
```javascript
function breath(){
    console.log('Breathe in!');
}
```

The keyword function indicates to js interpreter that this is a code that is runnable.

therefore to execute the function or call the function or evoke the function by doing this:

```javascript
breathe();
```
By calling the name with parentheses we evoke the fuction to run. 
Go ahead, do this in your text editor and run it.

Yep! Just breathe!

## Arguments
Parenthensis are not just for indicating that we are calling a function. When declaring a function we can pass in some objects(data or functions) to the function. This makes functions very powerful. In javascript we say functions are first-class citizens. They can take in anything. They are the heart of JS. 
The arguments can be of any type: an array, a function, a date, a boolean, an object, number, string, i mean anything!
And it could be of any length.
Lets see it in action

```js
function breath(chemical){
    console.log(`I breathe in ${chemical}`);
}
```

Now, the arguments are like variables, or technically they are placeholders for actual values. So in the above example we are passing an argument called `chemical` into our function. Now that the function has been declared. We can call it.

```js
breath(); //output: I breath in undefined
breath('oxygen'); //output: I breath in oxygen
```

From the above example, it means that when the arguments declared they assume the value of undefined. Which is a special value in JavaScript. We can pass now our actual value which we call `parameter` into our function when calling it. An that parameter now replaces `chemical` in the function. Great!

## More Arguments
we could add more arguments:

```js
function breath(chemical, anotherChemical){
    console.log(`I breathe in ${chemical} and breathe out ${anotherChemical}`);

}
```
Here we pass in two arguments: `anotherChemical` and `anotherChemical

in calling the function to action we do this:

```js
breathe('Oxygen','Carbon dioxide'); //output: I breathe in Oxygen and breathe our Carbon dioxide
```