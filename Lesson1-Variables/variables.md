# Variables
Variables are like pockets that hold anything. However, in JS they hold values of different *data types*.

## Data types
Data types can be seen as different categories of data available. They include `Booleans`, `Number`, `String`, `Date`, `Objects`

In computer science, Booleans, Number, Strings are labeled as primitive values as we can get any derivative of them. They are basic structures. 

## Variables Declaration
Writing a variable in JS is known as declaring variables. In JS we have about three main types of declaring variables. 

### Type 1: Using the `var` Keyword

```js
var fullName = "Nick Burkhurt"
//var is the keyword
// fullName is the name of the variables
// in js comments are written like this starting with a double slash
```

> `fullName` the way the name is written is known as camel case, this is capitalising the next word's first letter.
> variable names cannot begin with a number, a negative sign, a period.

Using the `var` type of declaration is an old way and not encourage in modern js. This is because there are alot of bugs that can be found using such an approach. Further, this approach is lose as compared to the new methods.

### Type 2: Using the `let` keyword

```js
let fullName = 'Vesson'
```
This type is modern and more secured way of declaring variables. Using let limits bugs in your code. 

### Type 3: Using `const` keyword

```js
const name = "Kojo"
```
const signify constant, once you use this, it means you cant change the value of the variable in the cycle of your application. This means you variables remains constant.

