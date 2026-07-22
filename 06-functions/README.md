# Lesson 06 – Functions

## Overview

This lesson introduces functions in JavaScript and demonstrates how they help organize code into reusable, maintainable, and modular blocks. It covers function declaration, parameters, arguments, return values, and applying functions in a real-world mini project.

---

## Concepts Covered

- Function Declaration
- Function Calling
- Parameters
- Arguments
- Return Statement
- Function Reusability
- Basic Function Scope

---

## Files

| File | Description |
|------|-------------|
| function_practice.js | Practice exercises demonstrating function creation, parameters, and return values |
| student_result_functions.js | Mini project that organizes a student result system using multiple functions |

---

## Practice Exercise

Create a JavaScript program to complete the following tasks.

### Exercise 1

Create a function named:

```text
greet()
```

Print:

```text
Welcome to JavaScript
```

Call the function three times.

---

### Exercise 2

Create a function:

```text
printSquare(number)
```

Return the square of the given number.

Call it with:

- 5
- 10
- 15

---

### Exercise 3

Create a function:

```text
add(a, b)
```

Return the sum.

Store the returned value in a variable and print it.

---

### Exercise 4

Create a function:

```text
isEven(number)
```

Return:

- Even
- Odd

Test it using:

- 8
- 15
- 22

---

### Exercise 5

Create a function:

```text
findLargest(a, b)
```

Return the larger number.

Test the function with multiple values.

---

## Mini Project

### Student Result Calculator Using Functions

Reuse the Student Grade Checker project created earlier.

Instead of writing all the logic in one place, divide the program into reusable functions.

Create the following functions:

```text
calculateTotal()
calculateAverage()
checkPass()
calculateGrade()
checkMerit()
displayResult()
```

Each function should perform only one specific responsibility.

The program should:

- Calculate total marks.
- Calculate average marks.
- Determine pass or fail status.
- Determine the student's grade.
- Check merit certificate eligibility.
- Display the final result.

Use the same grading rules from the previous lesson.

---

## Concepts Practiced

- Creating functions
- Calling functions
- Passing parameters
- Using arguments
- Returning values
- Organizing code into reusable functions

---

## Folder Structure

```text
06-functions/
│
├── README.md
├── function_practice.js
└── student_result_functions.js
```

---

## Learning Outcomes

After completing this lesson, I can:

- Create reusable functions.
- Pass data using parameters.
- Return values from functions.
- Organize programs into smaller, reusable components.
- Improve code readability and maintainability.

---

## Common Mistakes

- Forgetting to call a function.
- Using `console.log()` when a value should be returned.
- Passing the wrong number of arguments.
- Writing one function that performs multiple unrelated tasks.
- Incorrect calculations inside helper functions.