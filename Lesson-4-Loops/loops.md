# Loops
Think of a wheel running. That wheel runs until something brings it to a stop. This is a classic example of what a loop is.

Loops are important, because there are systems that can run multiple times or we would want certain tasks to run multiple times. Loops enable us to do this. In prpgramming there are structures that facilitate in these processes. JavaScript have about three main types of loops, fundamentally speaking. For-loop, Do-while and while loop.

## For-loop

This allows for control and flexibility. the following is the structure of the For-Loop

```js
for (var i = 0; i < 10; i++) {
    // code runs here
}
```
> In the above loop, the first part is the for keyword. Indicating that `for` a certain number of times meeting a particular condition the code in the {} should run. 

> #### Variable

> inside the brackets (), we declar a variable, this variable will be the initializer. Every loop must begin from somewhere. This variable is assigned a value and that value is the initial value of the loop. Where the loop begins.
> ### Condition
> This is followed by the condition. So long as this condition is true, the loop will run.
> ### Counter
> And lastly there is the counter. This counter will continue to increment so long as the loop condition is true.

## While Loop
```js
let x = 0;
while(x<10){
    // run your code
    x++
}
```
In this control structure, the intilizer is outside the loop, and the condition is within the brackets and the counter is within the block.
They all carry the same meaning as the for-loop.
>Remember that you can hit an infinite loop easily with a while loop. So please check condition.

## Do-While Loop
```js
let x = 0;
do{
    // run your code
    x++;
}while(true);
```

Do while loop is like while loop except that it will run at least once whether the condition is true or false. This is the only difference.