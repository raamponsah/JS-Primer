# If and Else Statements
This is more of a structure, in js. Here we we look at a couple of clauses and conditions just as we have in normal English grammar. 

A computer makes decision based on logical clauses and conditions. 
In JS we if and Else statements.

```js
if(/*condition is passed here*/){
    //The code here will only run if the codition is
    // true
}
```

## The Condition

The condition in the brackets needs to always evaluate to a truthy value. This is key. 
>Truthy values are values that potentially evaluates to true. This excludes `0, false, "", null, undefined`. These are called falsy values.

## The Else Clause

```js
if(/*condition is passed here*/){
    //The code here will only run if the codition is
    // true
}else{
    // The code here runs when the condition fails
}
```

The else clause runs when the codition given is evaluates to false.

## The Else-if clause

This runs the next code provided the condition in the after the else if evaluate to true. So the trick here is any time if comes the condition must evaluate to true.

```js
if(/*condition is passed here*/){
    //The code here will only run if the codition is
    // true
}else if(/*Truthy conditions*/){
    // The code here runs when the condition fails
}else{

}
```

## Switch Statements
Switch statments are fun! Think of your light switch at home, it operates normally on two states on and off. if you switch to on, the lights comes on, if you switch to off, the light goes of. These are two states, but imagine several states, now that is a switch statements. Let explain it further with code example

```js
switch(expression):
    case 'condition-1'
        //run code
    break;
    case 'expression-2
        //run code
    break;
    default:
        //default code
        

```