---
title: "Remove Duplicate Elements From An Array in Javascript!"
metaTitle: "Remove Duplicate Elements From An Array in Javascript With Just a Single Line Of Code!"
metaDesc: "Super simple trick that can be used to remove duplicate elements from an array in Javascript."
date: "2022-01-28"
tags:
  - "JavaScript"
  - "Web"
---

> In today's article, we'll be looking at a super simple trick that can be used to remove duplicate elements from an array in Javascript.

With the help of this trick, you can delete the duplicate elements from an array without the use of loops or other complex operations.

We'll be using the concept of Sets in Javascript to achieve this.

So let's start...

We start with initializing a new example array, on which we’ll perform the operation to remove duplicate elements.

```
var arr = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5];
```

In this example array, we have duplicate integers (as many times as their value).
We want to remove duplicate elements from this array and our updated array should look like this:

```
[1, 2, 3, 4, 5]
```

Now to remove duplicate elements, the simplest part, we use a combination of arrays’ spread operator (to spread the elements of the array) along with creating a new Set which will allow us to store only the unique elements from the array.

```
arr = [... new Set(arr)];
```

This re-initializes the variable arr with the non-duplicate elements, just like the way we want.

```
Arr -> [1, 2, 3, 4, 5]
```

If you want to retain the original array, you may declare a new variable that stores the non-duplicate elements array from the original array.

Ex.

```
var arr = [1, 2, 2, 3, 3, 3];
var newArr = [... new Set(arr)];
```

Through this way, we get a new array with no duplicate elements, and we also have our original array, which we might need later.

Arr -> [1, 2, 2, 3, 3, 3]

newArr -> [1, 2, 3]

Not only integers, but we can use this concept for any data type. Let’s take an example with elements of type String.

```
var stringArray = ['a', 'b', 'b', 'c', 'd', 'd', 'd', 'e', 'e', 'f'];
```

Now, using the same concept as discussed above, we use

```
stringArray = [... new Set(stringArray)];
```

And, as you guessed, the output after removing all the duplicate elements from the array is

```

["a", "b", "c", "d", "e", "f"]
```

The last example we take is with an array of boolean values.

```
var boolArray = [true,true,false,false,true,false];
```

Applying the same concept, we use:

```
boolArray = [... new Set(boolArray)];
```

And as expected, we have the boolArray with only two elements, ie,

```
[true, false]
```

### The final key point:

> The Set() constructor lets us create Set Objects that lets us store the unique value of any data type.

Thank you for reading this far.
