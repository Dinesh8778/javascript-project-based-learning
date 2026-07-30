# Lesson 11 – DOM Manipulation

## Overview

This lesson introduces the Document Object Model (DOM) and demonstrates how JavaScript interacts with HTML elements. It covers selecting elements, updating content, changing styles and attributes, creating new elements, and removing existing elements.

---

## Concepts Covered

- Document Object Model (DOM)
- `getElementById()`
- `querySelector()`
- `querySelectorAll()`
- `textContent`
- `innerHTML`
- Modifying Styles
- Modifying Attributes
- `createElement()`
- `appendChild()`
- `remove()`

---

## Files

| File | Description |
|------|-------------|
| dom_practice.js | Practice exercises demonstrating basic DOM manipulation |
| profile_card.js | Mini project that updates a student profile card using JavaScript |

---

## Practice Exercise

Create a JavaScript program to complete the following tasks.

### Exercise 1

Create:

```html
<h1 id="title">Hello</h1>
```

Using JavaScript, change the text to:

```text
Welcome to JavaScript
```

---

### Exercise 2

Create:

```html
<p class="message">
    Learning DOM
</p>
```

Using JavaScript:

- Change the text color to **Blue**
- Change the font size to **24px**

---

### Exercise 3

Create:

```html
<img id="logo">
```

Using JavaScript:

- Set the `src` attribute.
- Set the `alt` attribute.

---

### Exercise 4

Create a new paragraph using JavaScript.

Set its text to:

```text
This paragraph was created using JavaScript.
```

Append it to the page.

---

### Exercise 5

Create:

```html
<p id="removeMe">
    Delete Me
</p>
```

Remove it using JavaScript.

---

## Mini Project

### Student Profile Card

Create a student profile card using HTML and JavaScript.

The HTML should contain:

- Student Name
- Department
- College
- CGPA
- Profile Image

Using JavaScript:

1. Change the student's name.
2. Change the department.
3. Change the CGPA.
4. Change the profile image.
5. Change the card background color.
6. Create a new paragraph with the text:

```text
Learning JavaScript DOM Manipulation
```

Append it to the profile card.

**Use only the DOM methods learned in this lesson.**

---

## Concepts Practiced

- Selecting HTML elements
- Updating text
- Updating HTML content
- Styling elements
- Updating attributes
- Creating elements dynamically
- Appending elements
- Removing elements

---

## Folder Structure

```text
11-dom-manipulation/
│
├── practice.html
├── dom_practice.js
├── index.html
└── profile_card.js
```

---

## Learning Outcomes

After completing this lesson, I can:

- Access HTML elements using JavaScript.
- Modify text and HTML content.
- Change CSS styles dynamically.
- Update HTML attributes.
- Create and remove DOM elements.
- Build simple interactive web pages using the DOM.

---

## Common Mistakes

- Selecting the wrong element ID or class.
- Using `getElementsByClassName()` without accessing an element by index.
- Running JavaScript before the HTML has loaded.
- Confusing `textContent` with `innerHTML`.
- Forgetting to append newly created elements to the DOM.