# Lesson 10 – Hoisting

## Overview

This lesson explains JavaScript hoisting and how variable and function declarations are processed before code execution. It also covers the behavior of `var`, `let`, `const`, function declarations, function expressions, and the Temporal Dead Zone (TDZ).

---

## Concepts Covered

- Hoisting
- Variable Hoisting
- Function Hoisting
- `var`
- `let`
- `const`
- Function Declarations
- Function Expressions
- Temporal Dead Zone (TDZ)

---

## Files

| File | Description |
|------|-------------|
| hoisting_practice.js | Practice exercises demonstrating hoisting behavior for different declaration types |
| hoisting_demo.js | Mini project showcasing hoisting with variables and functions |

---

## Practice Exercise

Create a JavaScript program to complete the following tasks.

### Exercise 1

Write:

```javascript
console.log(a);

var a = 10;
```

Observe the output and explain why it happens.

---

### Exercise 2

Write:

```javascript
console.log(b);

let b = 20;
```

Comment out the line after observing the error and explain why it occurs.

---

### Exercise 3

Write:

```javascript
console.log(c);

const c = 30;
```

Comment out the line after observing the error and explain why it occurs.

---

### Exercise 4

Call a function before its declaration using a function declaration.

Observe the result.

---

### Exercise 5

Create a function expression using `let`.

Call it before its declaration.

Comment out the call after observing the error and explain why it occurs.

---

## Mini Project

### Hoisting Demonstration

Create a JavaScript program that demonstrates hoisting behavior for:

1. `var`
2. `let`
3. `const`
4. Function Declaration
5. Function Expression using `let`
6. Function Expression using `var`

For each example:

- Execute the code.
- Observe the output.
- If an error occurs, comment out the statement after testing.
- Add comments explaining why the behavior occurs.

The final program should execute successfully after commenting out the error-causing statements.

---

## Concepts Practiced

- Variable hoisting
- Function hoisting
- Temporal Dead Zone
- Function declarations
- Function expressions
- Understanding JavaScript execution behavior

---

## Folder Structure

```text
10-hoisting/
│
├── README.md
├── hoisting_practice.js
└── hoisting_demo.js
```

---

## Learning Outcomes

After completing this lesson, I can:

- Explain what hoisting is.
- Differentiate hoisting behavior of `var`, `let`, and `const`.
- Understand the Temporal Dead Zone (TDZ).
- Explain why function declarations can be called before their definition.
- Explain why function expressions behave differently from function declarations.

---

## Common Mistakes

- Assuming JavaScript physically moves code.
- Expecting `let` and `const` to behave like `var`.
- Confusing function declarations with function expressions.
- Misunderstanding the difference between `ReferenceError` and `TypeError`.
- Relying on hoisting instead of declaring variables before using them.