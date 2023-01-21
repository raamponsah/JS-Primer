# Arrays
Arrays are ordered collections of items. Think of the pocket example we used in the variable section, however in this case we have a lot of items in your pocket but they are ordered. That is an array. Your pocket holds a lot of varying items. For instance, a pocket cna hold a bunch of keys, a pack of gum, some coins, and some notes. These together makes up an array. 

The array syntax is:

```js
const pocket = [] //empty array
const pocket = ['keys','gum','broken nails','coins']
```

>Arrays in js can hold mixed data types or single data types

```js
const setOfNumbers = [1,2,3,4,5] //only number array
let shoes = ['Amani','Topmann','Horse'] // only strings
```

> Arrays posses a unique feature and it is zero-index based. This means that although we usually count starting from 1, in arrays we start counting from 0. This zero-based index is focused on the position of the items in the array.

#### Properties

> One of key properties of an array is `length`. We can acces the number of items of an array using the `.length` syntax

```js
const locations = ['madina','takoradi','accra','circle']
locations.length // number of array items 4
```

To access an array item we use:

```js
location[2] //takoradi
```
In here we use the name of the array and the square brackets then insert the position number (remember zero-based index?).


### Future
We'll look at the various methods of array later. Stay tuned. Let's progress.
