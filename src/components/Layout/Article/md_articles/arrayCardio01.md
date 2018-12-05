# Array Cardio 01
[Here is the LINK to the code](https://github.com/no-trbl-2-u/MyReact30/tree/master/04-arrayCardio01 "Github for this code")

[Here is the LINK for the original, Javascript30 course](https://Javascript30.com "#Javascript30")

## Given a few arrays, solve these 8 problems:

*Disclaimer: This article/exercise assumes you know how Higher-Order-Functions work. My solutions to these are by no means the best/most readable/best practice. I, myself, am going through this exercise.*

## 1. Filter the list of inventors for those who were born in the 1500's
First, I like to get a simple console.log to get an idea for the data I'll be working with

```js
inventors
  .map(ea => console.log(ea.year))
```

Now if you check your console, you'll see each and every year, which tells us that we've successfully targeted the data we need to evaluate.

Array.prototype.filter() takes a function (that returns a boolean) and runs that function on each element of the array. It then returns an array filled with all the elements that returned true.

```js
const results01 = inventors
  .filter(ea => ea.year > 1500 && ea.year < 1600)
```

Now log out results01 to see your new array of inventors that were born in the 1500's.


## 2. Give us an array of the inventors' first and last names

Array.prototype.map() takes a function and returns a new array filled with the application of the function on each element of the original array.

This (anonymous) function we're going to pass it is going to strip the data located at the "first" key and the data located at the "last" key and return a new object with that data.

```js
const results02 = inventors
  .map(ea => ({first: ea.first, last: ea.last}))
```

*Disclaimer: Since we're using anonymous **arrow** functions, we have to wrap our return statement in parenthesis (). If we don't it'll think our object innerds is the return statement*

```js
const mistake = data
  .map(ea => {key01: ea.key01, key02: ea.key02})
```

*The interpreter will NOT like this code*

## 3. Sort the inventors by birthdate, oldest to youngest

Array.prototype.sort() is another array method that takes a function and returns an array where that function was run on each element. The difference here is, the function itself determines HOW the returned array will be sorted. Here are a few examples:

```js
const numArray = [2, 3, 1, 4]
const alphaArray = ['d', 'a', 'c', 'b']
const wordArray = ['ant', 'dog', 'cat', 'bat']

const numAsc = (a, b) => a - b;
const numDes = (a, b) => b - a;

const alphaAsc = (a, b) => a > b;
const alphaDec = (a, b) => b > a;

// Example
console.log(numArray.sort(numAsc)) // [1, 2, 3, 4]
```

Now, to take that information and apply it to this solution. We know that the "year" value in each inventor is a number. So we can use subtraction to sort. We also know that since it's an object we're sorting, we'll have to provide the return statement with the key to get to that data.

```js
const results03 = inventors
  .sort((a, b) => b.year - a.year)
```

*Disclaimer: Array.prototype.sort() is a destructive method and mutates the original array. I would recommend creating a copy of the array when you call sort, like so:*

```js
const results03 = [...inventors]
  .sort((a, b) => b.year - a.year)
```

This uses ES6's spread operator to create a copy of the original array, thus, preventing any mutations to the original array.

## 4. How many years did all the inventors live?

Array.prototype.reduce() is, in my opinion, the most difficult of the stock array methods. It too takes a function, with two arguments, the accumulator and each current object. We'll use our "numArray" from earlier and find the sum of that array. Example:

```js
const sumOfNumArray = numArray
  .reduce((accum, each) => accum += each) // 10
```

To apply that to the solution, let's jump right in:

```js
const results04 = inventors
  .reduce((accum, each) => accum += (each.passed - each.year))
```

This should have worked, except it didn't. The reason it didn't work wasn't entirely obvious at first until
[read over MDN's definition of Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce "MDN's reduce()")

## 5. Sort the inventors by years lived

My initial attempt looked like this:

```js
const results05 = [...inventors].
  sort((a, b) => (a.passed - a.years) - (b.passed - b.years))
```

I don't think that did what we wanted it to do, so we're going to do something a little different. These "Higher-Order-Functions" that come stock with every instance of an array, can be composed to create more intricate returned arrays. We're going to use [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign "Object.assign") to create a new object that contains their "years lived" data so we can sort with that instead of relying on "On the fly variables".

```js
const results05 = [...inventors]
  .map(ea => Object.assign({}, ea, {lived: (ea.passed - ea.year)}))
  .sort((a, b) => a.lived - b.lived)
```

Object.assign() takes an arbitrary number of arguments, but the first is always the resulting object. To keep this immutable, we'll place an empty object in the first argument, each inventor object in the next argument, and the newest addition to the object, "lived". This results in something like:

```js
{ 
  first: 'Lise',
  last: 'Meitner',
  year: 1878,
  passed: 1968,
  lived: 90
}
```

If you cross reference the resulting array with the initial attempt, you'll see the initial attempt didn't actually work. I'll leave it for you to figure out why the initial sorting expression didn't work as intended. *Mostly because I'm not sure :)*

## 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name

This one took a lot of playing around in the console with dummy variables and lots of Array.from(querySelectorAll()) calls. Which after so much trial and error led to me...

*Consulting the Video*

```js
const start = document
  .querySelector('.mw-category');
const links = Array
  .from(start.querySelectorAll('a'));
const _cities = link
  .map(ea => ea.textContent);
```

Now to filter out the unneeded array elements. In order to do this, my first guess would be to create an array of arrays of each city name. Then run Array.prototype.includes() on each individual element within the array. Since filter is looking for a boolean and includes gives it just that, we're provided a new array of all the cities that have the word "de" in it. Also, since we used split, we won't get a false positive on the 'de' search. 

```js
const de = cities
  .filter(ea => ea
    .split(' ')
    .includes('de')
  );

```

## 7. Sort the "People" array by last name

This one is much like the previous sort example, except we don't have a structured record of the data. Instead, we have a small array of ["lastname, firstname", ...] over and over. So first let's create a solid record to work with.

```js
// This will create the array of arrays
const people2 = people
  .map(ea => ea.split(','));

```

We will then need to convert each and every internal element into its own object with the keys: {first, last}

```js
const peopleRecord = people2
  .map(ea => ({first:ea[1], last: ea[0]}))
```

peopleRecord is now an array of all objects containing all the people's first & last names.
It just so happens it's already sorted by last name. If that array wasn't already sorted, we could:

```js
const sortedRecord = peopleRecord
  .sort((prev, next) => prev.last > next.last ? 1 : -1)

```

This sorting algorithm was only that simple because we made a nice simple record to work off of. :)

## 8.Sum up the instances of each of these with reduce

```js
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ]
```
My first instinct is to use a forEach method to iterate over these and keep a tally of each word. Then I'd just reduce that tally.

```js
const vehicleRecord = data
  .map(ea => ({name: ea, count: 0}))
  .map(ea => {
    if(...) ea.count += 1
  })
```

This was an absolute failure. I thought turning each element into an object would make life easier. Turns out the opposite happens. If I knew how to do emojis in markdown, I'd liken this code to a big 'ol turd. I also tried a single reduce method with a few different "if" statements that I'll omit for now. It's now time to

*Consult the video...*

Turns out we was ALMOST there with this whole "convert it to an object" thing, sort of...

```js
const vehicleRecord = data
  .reduce((obj, item) => {
    // Check if it exists already
    if(!obj[item]){
      obj[item] = 0;
    }
    // If it does, tally it up
    obj[item] += 1;

    // Return the entire object
    return obj
  }, {})
```

I know what you're thinking..."But this isn't the solution, this just gives us a big object with all the tallies". Well, here is where we'll stop consulting the video and attempt to solve it from here ;).

Let's get those numbers isolated somehow...


```js
const arrayOfArrays
arrayOfArrays = Array.from(Object.entries(vehicleRecord))


/* [ [ 'car', 5 ],
  [ 'truck', 3 ],
  [ 'bike', 2 ],
  [ 'walk', 2 ],
  [ 'van', 2 ] ] */
```

Now that we have another array, we can go back to using map, filter, reduce. First, let's get those words out of there...

```js
const vehicleTallies = arrayOfArrays
  .filter(ea => Number.isInteger(ea))

```

Buuuuut, that doesn't work. Unfortunately for us, we've gotta do something with this data before we can use filter again. This is where **Flattening** comes in (I think).

*Disclaimer: You could **definitely** solve this whole thing in a much simpler way, but if you've made it this far, you'd probably appreciate the deep dive. Also, flatMap() is a thing and I'm pretty sure it'd fix this whole thing up.*

```js
const vehicleArraysFlattened = arrayOfArrays
  .reduce((prev, next) => prev.concat(next))

  // [ 5, 3, 2, 2, 2 ]
```

Flattening is just smashing your data's guts together to make new data that's easier to traverse. The way I implemented it above is just one way to do it and if you try it elsewhere, you'll see this actually only works on one level. If we go one deeper and stick an Array in an Array in Array in Array in... We'd have to either find a better entry point, flatten the array n times, or make a better flatten function. For now, let's just sum up these numbers with reduce, the whole point of this exercise.

```js
const sumOfTallies = vehicleTallies
  .reduce((accum, ea) => accum += ea)

// 14
```