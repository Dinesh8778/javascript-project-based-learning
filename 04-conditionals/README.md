# Lesson 04 – Conditional Statements

## Overview

This lesson introduces conditional statements in JavaScript, enabling programs to make decisions based on different conditions. It covers decision-making using `if`, `if...else`, `else if`, `switch`, and the ternary operator.

---

## Concepts Covered

- if Statement
- if...else Statement
- else if Ladder
- Nested if
- switch Statement
- break Keyword
- Ternary Operator (`?:`)
- Truthy and Falsy Values

---

## Files

| File | Description |
|------|-------------|
| conditional_practice.js | Practice exercises demonstrating JavaScript conditional statements |
| grade_checker.js | Mini project to evaluate a student's result using conditional statements |

---

## Practice Exercise

Create a JavaScript program to complete the following tasks.

### Exercise 1

Create a variable:

```text
age = 20
```

Print:

- Eligible to Vote
- Not Eligible to Vote

using `if...else`.

---

### Exercise 2

Create:

```text
number = 25
```

Print whether it is:

- Positive
- Negative
- Zero

using `if...else if`.

---

### Exercise 3

Create:

```text
marks = 84
```

Print the grade using the following rules:

- A (90+)
- B (75–89)
- C (50–74)
- Fail (<50)

---

### Exercise 4

Create:

```text
day = 6
```

Using `switch`, print the corresponding weekday.

---

### Exercise 5

Create:

```text
isLoggedIn = true
```

Use the ternary operator to print:

- Welcome
- Please Login

---

## Mini Project

### Student Grade Checker

Create a JavaScript program that stores the following details:

- Student Name
- Tamil Marks
- English Marks
- Maths Marks
- Science Marks
- Social Marks

Calculate:

- Total Marks
- Average Marks

Determine:

- Pass or Fail (minimum 35 marks in every subject)
- Grade based on the average marks
- Merit Certificate Eligibility

### Grade Rules

| Average | Grade |
|---------:|:------|
| 90+ | A |
| 75–89 | B |
| 50–74 | C |
| Below 50 | Fail |

### Merit Rule

A student is eligible for a Merit Certificate only if:

- All subjects are passed.
- Average marks are greater than or equal to 90.

Display:

- Student Details
- Subject Marks
- Total Marks
- Average Marks
- Pass Status
- Grade
- Merit Status

---

## Concepts Practiced

- Decision Making
- Comparison Operators
- Logical Operators
- if...else
- else if
- switch
- Ternary Operator

---

## Folder Structure

```text
04-conditionals/
│
├── README.md
├── conditional_practice.js
└── grade_checker.js
```

---

## Learning Outcomes

After completing this lesson, I can:

- Make decisions using conditional statements.
- Use `if`, `if...else`, and `else if` effectively.
- Select actions using the `switch` statement.
- Use the ternary operator `?:` for simple conditions.
- Build programs that evaluate and respond to different scenarios.

---

## Common Mistakes

- Using `=` instead of `===` in conditions.
- Forgetting `break` in `switch`.
- Using `>` instead of `>=` when boundaries are inclusive.
- Assigning grades without checking the pass status first.
- Writing deeply nested `if` statements when simpler logic can be used.