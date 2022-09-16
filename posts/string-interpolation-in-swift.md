---
title: "String Interpolation in Swift"
metaTitle: "String Interpolation in Swift"
metaDesc: "The only article you need to read to know everything about String Interpolation in Swift"
date: "2022-02-22"
tags:
  - "swift"
  - "strings"
  - "programming"
---

In this article, we'll be looking at the concept of Strings in Swift.

Strings, as the name suggests, are a thread/collection of characters, woven together to form a word or a sentence.

To initialize a string in Swift, we enclose the word or the sentence inside double-quotes. We may initialize string either as a variable or a constant, depending upon our need.

Example:

```
let myName = "Ishaan"
```

In this code snippet, we have declared a constant _myName_ and we have stored a string value of "Ishaan" in it.

Easy, as it gets :)

### Multiline strings in Swift

What if we want to store a poem or some text where we have to use multiple lines.
The first syntax you'll guess in your mind would be something like this:

```
let myPoem = "Hello,
We haven't talked in quite some time
I know
I haven't been the best
Of sons, hello, I've been traveling in the desert of my mind
And I Haven't found a drop"
```

But this is the wrong syntax and Swift will raise an error while compiling the code.

![Screenshot showing error](https://cdn.hashnode.com/res/hashnode/image/upload/v1644938020923/lssfH5X4r.png)
As you can see, Swift did not compile our code and showed us errors.

The solution to this problem is to wrap our string inside three double-quotes instead of using double-quotes one time.

```
let myPoem =
""""
Hello,
We haven't talked in quite some time
I know
I haven't been the best
Of sons, hello, I've been traveling in the desert of my mind
And I Haven't found a drop
"""

```

Now, this is the perfect syntax and we have successfully created a multi-line string in Swift.

![Screenshot showing multi-line strings](https://cdn.hashnode.com/res/hashnode/image/upload/v1644938315200/rMXVXg3wG6.png)

And we can see that Swift compiled our code without any error this time.

### Including a double quote in our string

What if we want to include double quotes inside our string, for example, we have to store a conversation inside our string.

If we use our familiar syntax by wrapping our double quotes inside double quotes, Swift will get confused about which double quote is wrapping whom (too much confusion, I know).
As you can see from the following screenshot as well that our program has not been compiled.
![Screenshot showing double quote error](https://cdn.hashnode.com/res/hashnode/image/upload/v1644938780687/sT6KVCC1c.png)

Let's get it sorted:

To get double quotes inside our string, just put a backslash before the double quote inside the string, and you are good to go.
![Screenshot showing correct syntax for double quotes inside a string](https://cdn.hashnode.com/res/hashnode/image/upload/v1644938931866/EOLk0AQms.png)
As you can see from the above code snippet, we can see that after introducing backslash before double quotes, our program has successfully compiled and is working as per our satisfaction.

### String interpolation in Swift

The next crucial part in understanding strings in Swift is understanding the concept of _String Interpolation_

To interpolate a variable or a constant inside a string, we use a backslash followed by a variable or a constant wrapped inside a pair of parenthesis, and it's done.

Let's look at the following code snippet to understand better.

![Screenshot showing string interpolation example.](https://cdn.hashnode.com/res/hashnode/image/upload/v1644939550531/4hdpkOGaQ.png)

As you can see, we have interpolated strings inside a variable _myDetails_ by including the constant _myName_ & the variable _myAge_ in it.

We can insert any kind of raw Swift code inside `\( )`, be it be calculations, values of any kind of data type, or a reference from another variable/constant.
You may see below code snippets as an example for this concept:

![Screenshot showing string interpolation example](https://cdn.hashnode.com/res/hashnode/image/upload/v1644940020031/QPf6VlIzR3.png)

![Screenshot showing string interpolation example](https://cdn.hashnode.com/res/hashnode/image/upload/v1644940087731/JB-LisXDq.png)

So, that's all for this article. Hope you've got a deep understanding of strings in Swift.
We'll be looking at some advanced string methods and operations in an upcoming article.

Thank you for reading this far.
