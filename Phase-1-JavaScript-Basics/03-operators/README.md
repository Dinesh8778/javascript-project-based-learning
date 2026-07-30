# Lesson 03 – Operators

## Overview

This lesson introduces JavaScript operators and demonstrates how they are used to perform calculations, assign values, compare data, evaluate logical conditions, and manipulate numeric values.

Operators are fundamental building blocks in JavaScript and are used in almost every program.

---

## Concepts Covered

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Increment Operator
- Decrement Operator
- Operator Precedence
- Difference between `==` and `===`

---

## Files

| File | Description |
|------|-------------|
| operators_practice.js | Practice exercises demonstrating different JavaScript operators |
| student_result_calculator.js | Mini project using operators to calculate student results |

---

## Practice Exercise

Create a JavaScript program to complete the following tasks.

### Exercise 1

Create two variables:

- `a = 20`
- `b = 8`

Print the result of:

- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`*`)
- Division (`/`)
- Modulus (`%`)
- Exponent (`**`)

---

### Exercise 2

Create a variable:

```text
score = 50
```

Using assignment operators, perform:

- `+= 20`
- `-= 10`
- `*= 2`
- `/= 4`
- `%= 6`

Print the value after every operation.

---

### Exercise 3

Create two variables:

```text
x = 15
y = "15"
```

Print the result of:

- `==`
- `===`
- `!=`
- `!==`
- `>`
- `<`
- `>=`
- `<=`

---

### Exercise 4

Create:

```text
age = 22
hasLicense = true
```

Print the result of:

- `age >= 18 && hasLicense`
- `age < 18 || hasLicense`
- `!hasLicense`

---

### Exercise 5

Create:

```text
count = 5
```

Demonstrate:

- Post Increment (`count++`)
- Pre Increment (`++count`)
- Post Decrement (`count--`)
- Pre Decrement (`--count`)

Print the value after every operation.

---

## Mini Project

### Student Result Calculator

Create a JavaScript program that stores a student's marks and performs calculations using different operators.

Store the following:

- Student Name
- Tamil Marks
- English Marks
- Maths Marks
- Science Marks
- Social Marks

Calculate:

- Total Marks
- Average Marks

Using comparison operators, determine:

- Whether the student passed (minimum 35 marks in every subject)
- Whether the average is greater than or equal to 75

Using logical operators:

- Determine whether the student is eligible for a Merit Certificate.

A student is eligible only if:

- All subjects are passed.
- Average marks are greater than or equal to 75.

Display all values and calculation results.

---

## Concepts Practiced

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Increment and Decrement Operators
- Operator Precedence
- Boolean Expressions

---

## Folder Structure

```text
03-operators/
│
├── README.md
├── operators_practice.js
└── student_result_calculator.js
```

---

## Learning Outcomes

After completing this lesson, I can:

- Perform arithmetic calculations using JavaScript operators.
- Update variables using assignment operators.
- Compare values using comparison operators.
- Combine conditions using logical operators.
- Understand the difference between `==` and `===`.
- Use increment and decrement operators correctly.
- Apply operators in real-world programming problems.

---

## Common Mistakes

- Using `==` instead of `===`.
- Confusing prefix and postfix increment/decrement.
- Forgetting operator precedence.
- Using unclear boolean variable names.
- Writing complex expressions without parentheses.