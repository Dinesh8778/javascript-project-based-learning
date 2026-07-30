# Lesson 09 – Scope

## Overview

This lesson introduces variable scope in JavaScript and explains where variables can be accessed within a program. It covers global scope, function scope, block scope, variable shadowing, and the scope chain using practical examples.

---

## Concepts Covered

- Global Scope
- Function Scope
- Block Scope
- Variable Shadowing
- Scope Chain
- `let` vs `var`

---

## Files

| File | Description |
|------|-------------|
| scope_practice.js | Practice exercises demonstrating different types of scope in JavaScript |
| student_scope_demo.js | Mini project demonstrating variable scope using student information |

---

## Practice Exercise

Create a JavaScript program to complete the following tasks.

### Exercise 1

Create a global variable:

```text
college = "VSBEC"
```

Print it:

- Inside a function.
- Outside the function.

---

### Exercise 2

Create a function:

```text
showMessage()
```

Inside the function:

```text
message = "Hello JavaScript"
```

Print the message inside the function.

Then try printing it outside the function and observe the result.

---

### Exercise 3

Create an `if` block.

Inside it:

```text
let city = "Karur";
```

Try printing `city` outside the block and observe the result.

---

### Exercise 4

Create two variables with the same name:

```text
name
```

One should be global.

One should be inside a function.

Print both to demonstrate variable shadowing.

---

### Exercise 5

Create nested functions.

Demonstrate the scope chain by accessing variables from:

- Global scope
- Outer function
- Inner function

---

## Mini Project

### Student Scope Demonstration

Create a JavaScript program that demonstrates different types of scope using student information.

Requirements:

1. Create a global variable:

```text
college = "VSB Engineering College"
```

2. Create a function:

```text
showStudent()
```

Inside it:

- Create `studentName`
- Create `department`

3. Inside `showStudent()`, create an `if` block.

Inside the block:

- Create `cgpa`

Print:

- College
- Student Name
- Department
- CGPA

4. Outside the `if` block, try accessing `cgpa` and explain why it is not accessible.

5. Outside the function, try accessing:

- `studentName`
- `department`

Explain why they are not accessible.

**Note:** Comment out the statements that would throw `ReferenceError` and include comments explaining the reason.

---

## Concepts Practiced

- Global variables
- Function scope
- Block scope
- Variable shadowing
- Scope chain
- Variable accessibility

---

## Folder Structure

```text
09-scope/
│
├── README.md
├── scope_practice.js
└── student_scope_demo.js
```

---

## Learning Outcomes

After completing this lesson, I can:

- Differentiate between global, function, and block scope.
- Understand how variable shadowing works.
- Explain the scope chain.
- Use `let` to create block-scoped variables.
- Avoid common scope-related mistakes in JavaScript.

---

## Common Mistakes

- Accessing function-scoped variables outside the function.
- Accessing block-scoped variables outside the block.
- Overusing global variables.
- Using `var` when `let` or `const` is more appropriate.
- Confusing variable shadowing with variable reassignment.