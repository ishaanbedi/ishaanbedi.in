---
title: "Understanding Constants in Swift"
metaTitle: "Understanding Constants in Swift"
metaDesc: "The only article you need to read to learn everything about constants in Swift."
date: "2022-02-04"
tags:
  - "swift"
  - "constants"
  - "programming"
---

In today's article, we'll be looking at the concept of Constants in Swift.

Just like variables, the concept of constants is also very easy to understand and implement.

Let's dive deeper and understand constants in-depth:

### What are constants?

Just like its name, constants are something that remains constant throughout the program!

Once a value is declared as a constant in the memory, its value cannot be changed throughout the execution of your program or application.

### How to initialize a constant?

To declare a constant, we use the `let` keyword, followed by the name we want to give to that particular constant and assign it to any kind of data type we want to be constant throughout the execution of the program.

It's just like initializing a variable, but replacing the `var` with the ` let` keyword.

We can store any kind of data type as a constant, whether it may be an integer, float, double, string, boolean, etc.

### Let's look at an example:

```
let myName = "Ishaan"
```

According to this code snippet, we declare a new constant called myName that stores the string _' Ishaan'_.

Do remember to use the keyword ` let`, otherwise, your program will generate an error.

Now, myName, a constant has a value of 'Ishaan' in the memory, which will remain constant throughout the flow of our program.

You may try implementing this on your own on a Swift Playground or some other compiler and explore new concepts and errors.

Now, if we try to change the value of the constant _myName_, Swift will show us an error, as shown in the image below:

![Image showing the error](https://cdn.hashnode.com/res/hashnode/image/upload/v1643954160188/pc5q1eAYo.png)

In the second attempt of initialization, Swift throws an error that it cannot assign _myName_ to a new value as it is a constant.

It also shows us a hint to solve this problem by replacing `let` with ` var`. In other words, it's asking us to declare myName as a variable if we need to change its value at any point of time, later in the program.

### Some examples with other data types:

```
let isAdult = true
print(isAdult)
```

In this example, we store a boolean value as a constant in _isAdult_ and then we print it.
As expected, we will get `true` as the output.

```
let myNumber = 13
print(myNumber)
```

In this example, we store an integral value of 13 as a constant in _myNumber_ and then we print it.
As expected, we will get ` 13` as the output.

```
let mathScore = 98.5
print(mathScore)
```

In this example, we store a floating value of 98.5 as a constant in _mathScore_ and then we print it.
As expected, we will get ` 98.5` as the output.

> Good to know: Just like a variable, we can also explicitly declare a constant's data type to define what kind of data we want it to store in it.

```
let mathScore:Int
mathScore = 100
print(mathScore)
```

Here, we are explicitly telling the compiler to make sure that the constant mathScore stores an integer value only, though only one time we'll be doing it (anywhere in the program).

You may avoid explicitly declaring data type unless it's absolutely necessary.

So that's all for this article. You now have a deep understanding of constants in Swift. Hope you have understood what I wanted to convey.

Thank you for reading this far.
