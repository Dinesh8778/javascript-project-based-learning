# Lesson 12 – Events

## Overview

This lesson introduces JavaScript events and demonstrates how to make web pages interactive by responding to user actions. It covers event listeners, mouse events, keyboard events, input events, and click events through practical exercises and a mini project.

---

## Concepts Covered

- Events
- `addEventListener()`
- Click Events
- Input Events
- Mouse Events
- Keyboard Events
- Event Object (Introduction)

---

## Files

| File | Description |
|------|-------------|
| event.html | HTML file for the practice exercises |
| event_practice.js | JavaScript implementation of different event types |
| colour_changer.html | HTML file for the mini project |
| color_changer.js | JavaScript implementation of the Background Color Changer project |

---

## Practice Exercise

Create a web page and complete the following tasks.

### Exercise 1

Create:

```html
<h1 id="title">Hello</h1>

<button id="changeTextBtn">
    Change Text
</button>
```

When the button is clicked, change the heading text to:

```text
Welcome to JavaScript
```

---

### Exercise 2

Create:

```html
<p id="message">
    Learning Events
</p>

<button id="colorBtn">
    Change Color
</button>
```

When the button is clicked, change the text color to green.

---

### Exercise 3

Create:

```html
<input id="username">
```

Print the typed value in the console while the user types.

---

### Exercise 4

Create:

```html
<div id="box">
    Hover Me
</div>
```

When the mouse enters the box:

- Change the background color to yellow.

When the mouse leaves:

- Change it back to white.

---

### Exercise 5

Create:

```html
<input id="search">
```

Print:

```text
Key Pressed
```

whenever a key is pressed.

---

## Mini Project

### Background Color Changer

Create a web page containing:

- A heading
- A paragraph
- Four buttons

Buttons:

- Red
- Blue
- Green
- Reset

Requirements:

- Clicking **Red** changes the background to red.
- Clicking **Blue** changes the background to blue.
- Clicking **Green** changes the background to green.
- Clicking **Reset** changes the background to white.
- Display the currently selected color in the page.

Use only the DOM methods and event handling concepts learned so far.

---

## Concepts Practiced

- Event listeners
- Click events
- Mouse events
- Keyboard events
- Input events
- Updating the DOM dynamically

---

## Folder Structure

```text
12-events/
│
├── README.md
├── event.html
├── event_practice.js
├── colour_changer.html
└── color_changer.js
```

---

## Learning Outcomes

After completing this lesson, I can:

- Respond to user interactions using events.
- Attach event listeners with `addEventListener()`.
- Handle click, mouse, keyboard, and input events.
- Update page content dynamically based on user actions.
- Build simple interactive web applications.

---

## Common Mistakes

- Forgetting to select an element before adding an event listener.
- Calling a function immediately instead of passing it to `addEventListener()`.
- Using the wrong event type.
- Modifying the wrong DOM element.