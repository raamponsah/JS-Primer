# Objects

In JavaScript objects are everything and everything is an object in JavaScript. 

Now, hearing oobjects being thrown around can sound confusing at first. so lets look at what an object is generally.

a quick search on google dictionary will reveal that an object is:
> a person or thing to which a specified action or feeling is directed.

This means that an object can be anything that has some properties or can do something. We can specify the properties of an object or assign some `functions` to an object.

so lets take an example  a book can be an object. 
> A book can have some `properties` like:
>  - color of book cover, 
>  - text-size of the print, 
> - hardcover or softcover, 
> - number of pages of the book, etc. 
> 
> We could also look at some of the `functions` a book can have.
> - Flipping a book
> - Reading the book
> - Highlighting content
> - Fold some pages
> - Bookmark a page

This object (Book) clearly represents a in a generic way what objects in javascript are. They are basically containers that contains some data and functions. Technically, we say they are data structures that contain properties and methods(functions/actions). In a way we can say that objects are like arrays only more organised and more purposeful.

This picture about an object once understood gives us a better understanding of what objects are.

So then how do we declare objects.We declare them just like variables.

```js
let book  = {} // this is an empty object.

```
> The above example is an empty object. In this case we are using what is called Object literal `{}`.

Inside the {} is where we declare our properties and methods with their respective values. Think of them as mini variable decalaration with their values. That is what an object is about. 
```javascript
let book = {
    colorOfBookCover: 'red',
    numberOfPages:123,
    textSize:34,
    cover:'Soft cover',
    openingMethod:function(){
        console.log('flip pages')
    }
}
```

So here we see properties being declare as name and values separated with a comma.

Basically this is an object with properties and methods(openingMethod is a function).

```javascript
console.log(book);
```
See what happens in your browser console.

## Accessing properties

Remember I said objects are like arrays, we can also access properties using the square brackers.
so for our book, we can access the color of the book by doing something like this:

```js
book['colorOfBookCover'] //output: red
```

or we can also acces the same property with the dot syntax

```js
book.colorOfBookCover //output: red
```
Manipulating properties
Remember we said these properties and methods declared are like declaring variables. We can also override them or reassign them to new values.

so we can also manipulate the properties as thus:
```js 
book['colorOfBookCover'] = "yellow" 
// noow if you access the property
book['colorOfBookCover'] //output: yellow
```

In future we will look at prototypical inheritance and other advanced stuff.