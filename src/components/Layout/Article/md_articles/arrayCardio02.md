# Array Cardio 02
[Here is the LINK to the code](https://github.com/no-trbl-2-u/MyReact30/blob/master/07-arrayCardio02/arrayCardio02.js "Github for this code")

[Here is the LINK for the original, Javascript30 course](https://Javascript30.com "#Javascript30")

There are only 3 exercises that cover 4 more Higher Order Functions that are built in to Javascript. Here is my attempt to solve them without consulting the video.

Just to reiterate the idea of what a Higher Order Function is, it's a function that either takes a function as an **argument** or a function that **returns** a function, or, in most cases, both.

## Exercise 01-02 - Array.Prototype.some() and .every()
### *Using Array.Prototype.some() find out if there is at least one person 19 or older?*

Here is the dummy data provided.
```js
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];
```

As you can see, an "age" isn't provided. Instead, we have the year they were born. Which means, to make things easier for me later, I'll make a "currentYear" value to calculate their age. This also means if, for some unknown reason, I run this code in the future, **it will still work since the year is dynamic**.

```js
const date = new Date
const currentYear = date.getFullYear()
```

Alright, so now, to make the .some() call easier, I'll create a new key value pair for the array of people just like this.


```js
const newPeople = [...people]
  .map(ea => ({name: ea.name, age: (currentYear - ea.year) }))

console.log(newPeople)
/*
  [ { name: 'Wes', age: 31 },
  { name: 'Kait', age: 33 },
  { name: 'Irv', age: 49 },
  { name: 'Lux', age: 4 } ]
*/
```

Now, I'm going to take a moment to refactor this a little and isolate the function passed to map.

```js
// Like This
const configureAge = person => Object.assign({}, person, {age: currentYear - person.year})

// Or like this
const configureAge = ({name, year}) => ({name, year, age: currentYear - year})

// New values
const newPeople = [...people].map(configureAge)

console.log(newPeople)
/*
  [ { name: 'Wes', year: 1988, age: 31 },
    { name: 'Kait', year: 1986, age: 33 },
    { name: 'Irv', year: 1970, age: 49 },
    { name: 'Lux', year: 2015, age: 4 }]
*/
```

You'll notice that I decided to allow the "year" key-value pair to remain in the array. In this example it's arbitrary, but I would imagine it to be a good idea to remain in the habit of being is minimally transformative as possible unless told otherwise.

### Array.Prototype.some()
...is a method attached to an array that takes a predicate function and runs that function on every member of the array. If **ANY** of the predicate functions run on the items *return*s true, then the entire .some() function call will return true.
MDN's Article for [Array.Prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some "MDN Article for Array.some()") is a great resource to wrap your head around these higher order functions and how to use them.

```js
// predicate function
const olderThan19 = person => person.age > 19

// Example using filter
const peopleUnder19 = people
    .map(setAge)
    .filter(ea => !olderThan19(ea))

console.log(peopleUnder19)
// [ { name: 'Lux', year: 2015, age: 4 } ]
```

### Array.Prototype.every()
...is almost the exact same as .some(), except **every** element in the array must return true when ran against the predicate in over for the .every() call to return true.

```js
// Example of Array.Prototype.every()

/*
  This example checks to see if every element in the array not only has a value for the key "year", but also if it's of type Number.
*/

console.log(
  people.every(
    person => Number(person.year)
  )
) // true
```

Solutions:
```js
// .some()
const solution01 = [...people]
  .map(configureAge)
  .some(olderThan19)

console.log(solution01) // true

// .every()
const solution02 = [...people]
  .map(configureAge)
  .every(olderThan19)

console.log(solution02) // false

```

## Exercise 03 - Array.Prototype.find()
### *Using [Array.Prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find "MDN Article for Array.find()"), select the item with the ID 823423*

Here is the dummy data provided.
```js
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
```

Array.Prototype.find() takes a predicate function and runs the predicate function on every element of the array. The very first time that predicate function returns true, it will return that element of the array.

```js
// Here is an example of using Array.Prototype.find()
const myFavComment = comments
  .find(comment => comment.text === 'Love this!')

console.log(myFavComment)
// { text: 'Love this!', id: 523423 }
```
It's important to note what was actually returned. The **entire** element was returned, not just that part I was comparing against (the text)

In this example, it'd be unnecessary to write a predicate function to use with find to find values based on specific keys. However, it is a perfect opportunity to show you how currying works and how you can use it to create dynamic predicate functions.
```js
// getById predicate function
// byID :: Int -> Person -> Bool
const byID = id => comment => comment.id === id

console.log(comments.find(byID(823423)))
// { text: 'Super good', id: 823423 }
```
*Warning: Don't mind the "::" and "->" stuff if you've never seen it or are confused by it. It has no effect and was used to help me write the byID function.*

This is called a **"curried function"**. In essence, it just means that the function takes it's arguments one at a time and each time it's invoked it passes back a new function awaiting the next argument. These kinds of functions when **"partially applied"** can create unary (one argument) functions which are exactly the kinds of functions .map, .filter, .reduce, AND, .find use. This may seem arbitrary in this example, but the freedom currying provides and the implications they have with methods that take predicate functions are sincerely amazing.

Solution:

```js
const solution03 = [...comments]
  .find(comment => comment.id === 823423)

console.log(solution03) // { text: 'Super good', id: 823423 }
```

## Exercise 04 - Array.Prototype.findIndex()

Using [Array.Prototype.findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex "Array.Prototype.findIndex"), remove a comment from the comments array.

Since we won't have an actual page for this, I'll create a JSX dummy component to represent how this work. 

*Disclaimer: I would almost for certain use filter or reduce over .findIndex() for almost any scenario. I'm sure .findIndex has its use cases, but in this scenario, it's a bit much*

```js
// We can use the same predicate as before in .find()
const indexOfOurComment = comments.findIndex(byID(823423)) // 1

const newComments =
  comments
    // Everything BEFORE the index
    .slice(0, indexOfOurComment)
    // Everything AFTER the index
    .concat(comments.slice(indexOfOurComment + 1))

console.log(newComments)

/*
  [ { text: 'Love this!', id: 523423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 } ]
*/
```
 You can easily see why I would prefer to use methods that wouldn't need the specific index of an array item. Typically, I'd prefer iterating with a Higher Order Function and pass it a predicate.

 ## Conclusion

 All in all, these exercises were fun and this article has almost no focus. Hopefully after all this you learned a little and, more importantly, you had some fun. These Higher Order Function patterns with predicate functions can become so atomic and experimenting on an atomic level really bolsters my confidence and makes me feel like there's nothing I can't do with this pattern.

 Be sure to check out Wes Bos's courses. They're tremendous ans when I have more time, I plan on taking his advanced React course. Take a look!
 [Take a look at all his courses!](https://wesbos.com/courses/ "Wes Bos Courses")