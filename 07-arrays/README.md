# Lesson 07 – Arrays

## Overview

This lesson introduces arrays in JavaScript and demonstrates how to store, access, modify, and process multiple values using a single variable. It also covers basic array methods and array traversal using loops.

---

## Concepts Covered

- Array Creation
- Array Indexing
- Updating Elements
- Array Length
- Traversing Arrays
- push()
- pop()
- shift()
- unshift()
- includes()
- indexOf()

---

## Files

| File | Description |
|------|-------------|
| array_practice.js | Practice exercises demonstrating array creation, traversal, and basic array methods |
| student_marks_manager.js | Mini project that manages student marks using arrays |

---

## Practice Exercise

Create a JavaScript program to complete the following tasks.

### Exercise 1

Create an array containing five fruits.

Print:

- First fruit
- Last fruit

---

### Exercise 2

Create the following array:

```text
[10, 20, 30, 40, 50]
```

Print every element using a `for` loop.

---

### Exercise 3

Create the following array:

```text
["Java", "Python", "JavaScript"]
```

Perform the following operations:

- Add `"C++"` using `push()`.
- Remove the last element using `pop()`.
- Print the array after each operation.

---

### Exercise 4

Create the following array:

```text
[2, 4, 6, 8, 10]
```

Print:

- Length of the array
- Whether `6` exists
- Index of `8`

---

### Exercise 5

Create the following array:

```text
["Apple", "Banana", "Orange"]
```

Perform the following operations:

- Add `"Mango"` at the beginning using `unshift()`.
- Remove the first element using `shift()`.
- Print the array after each operation.

---

## Mini Project

### Student Marks Manager

Create a JavaScript program that manages student marks using an array.

Create the following array:

```text
marks = [78, 85, 92, 67, 88]
```

Perform the following tasks:

1. Print all marks using a loop.
2. Find the highest mark.
3. Find the lowest mark.
4. Calculate the total marks.
5. Calculate the average marks.
6. Check whether `92` exists using `includes()`.
7. Find the index of `67`.
8. Add a new mark using `push()`.
9. Remove the last mark using `pop()`.
10. Print the final array.

**Note:** Use only the concepts learned so far. Do not use `Math.max()`, `Math.min()`, `reduce()`, `forEach()`, or other advanced array methods.

---

## Concepts Practiced

- Array creation
- Array indexing
- Traversing arrays using loops
- Updating array elements
- Basic array methods
- Searching arrays
- Calculating values using loops

---

## Folder Structure

```text
07-arrays/
│
├── README.md
├── array_practice.js
└── student_marks_manager.js
```

---

## Learning Outcomes

After completing this lesson, I can:

- Store multiple values using arrays.
- Access and update array elements.
- Traverse arrays using loops.
- Use common array methods such as `push()`, `pop()`, `shift()`, and `unshift()`.
- Search arrays using `includes()` and `indexOf()`.
- Solve practical problems involving arrays without using advanced methods.

---

## Common Mistakes

- Using `<= array.length` instead of `< array.length`.
- Accessing an index that does not exist.
- Forgetting that arrays use zero-based indexing.
- Calling array methods without understanding how they modify the array.
- Hardcoding array indexes instead of using `length`.