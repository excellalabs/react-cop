# CSS Modules

## Overview
CSS Modules is a method of applying CSS styles to components that forces them to be locally scoped to a component. This helps to solve issues inherent to global CSS class names and complements the component paradigm by allowing styles to be fully encompassed within a component. 

CCS Modules achieves this by modifying the CSS class names in both the `.css` and `.js` files during transpilation to ensure that class names are unique. To ensure uniqueness, it changes the class names to conform to a Block-Element-Modifier (BEM) pattern that includes the component's name, the original class name, and a randomly-generated hash. 

While there are ways to add CSS modules to an existing project, projects created with Create React App (CRA) have support for CSS modules built-in via CRA's base `react-scripts` package (as of version `2.0.0`). This guide will focus on using CSS Modules via CRA.s

## Setup
We will be adding styling to a simple To Do application using CSS Modules. The starter code for this application is available on the `css-modules` branch of this repo under the `react-todos` directory. 

- Change into the app's root directory: `react-todos`
- Run `npm install` to install dependencies
- Run `npm run dev` to start the app and proxy server
- Visit `localhost:3000`

## Adding Styling
To add our first styles using CSS modules, let's start in the `App` component. Currently, the component simply wraps the other primary components and adds a header. Let's add some styling to format the container and center the header. 

First, we will need to create an external stylesheet. To use CSS Modules via CRA, you must include `module` in the file name of the stylesheet like so:
```
App.module.css
```
```css
/* App.module.css */

.container {
  width: 30em;
  margin: 0 auto;
  padding: 2em 1em;
}

.header {
  text-align: center;
}
```

Then, in the component that will use this stylesheet, we will import a `styles` **object**. All class names that we have added in the stylesheet will become **properties** available on this object.
```js
// App.js

import styles from './App.module.css'

// ...

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>To Do</h1>
        // ...
      </div>
    )
  }
```
Now if we look in the browser, we can see the transpiled class names:
```html
<div class="App_container__1lay6">
  <h1 class="App_header__TWCcp">To Do</h1>
  <!-- ... -->
</div>
```
> The final applied class name is derived from the stylesheet file name (which usually should match the component it is applied to), the original style name, and a randomly-generated 6-digit hash. 

We can take the same approach to style the `NewTodoForm`:
```css
/* NewTodoForm.module.css */

.input {
  margin: 0.5em 0;
  width: 100%;
  font-size: 1.5em;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
}
```
```js
// NewTodoForm.js
import styles from './NewTodoForm.module.css'

// ...

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <input 
          // ...
          className={styles.input}
        />
      </form>
    )
  }
```
As illustrated above, CSS modules gives us the ability to use more simple, generalized class names without having to worry about collisions across stylesheets.

## Composing Styles
Let's look at a more complex example in the `TodoItem` component. First we'll add some general styles:

```css
/* TodoItem.module.css */

.container {
  margin: 0.5em 0;
  width: 100%;
  display: flex;
  align-items: center;
}

.input {
  flex-grow: 1;
  font-size: 1em;
  border: none;
  outline: none;
}

.removeItemButton {
  font-size: 1em;
  border: none;
  outline: none;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.3);
}

.removeItemButton:hover {
  color: rgba(0, 0, 0, 1);
}
```
Notice that the convention for multi-word class names is to use **camel case** to make them easier to access in our JS:
```js
styles.removeItemButton
```
 However, if you would like to stick with spine casing, it is possible:
```js
styles['remove-item-button']
```
Let's also add CSS to create a custom checkbox:
```css
/* TodoItem.module.css */

.container {
  /* ... */
  position: relative;
}


/* Make default checkbox invisible */
.checkbox {
  opacity: 0;
  height: 16px;
  width: 16px;
  z-index: 10;
  cursor: pointer;
}

/* Add custom checkbox */
.container::before{
  content: "";
  display: inline-block;
  
  height: 16px;
  width: 16px;
  
  border: 1px solid rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
}

/* Add custom checkmark if completed */
.container.completed::after {
  content: "";
  display: inline-block;
  height: 6px;
  width: 14px;
  border-left: 2px solid;
  border-bottom: 2px solid;
  
  transform: rotate(-45deg);
  position: absolute;
  left: 0.2em;
  bottom: 0.7em;
}
```
> All CSS selectors and pseudo-selectors still work with CSS modules

Then, when we apply it to the component, we can simply concatenate class names together when we want to compose them:
```js
// TodoItem.js

import styles from './TodoItem.module.css'

// ...

  const itemStyles = item.isComplete ? `${styles.container} ${styles.completed}` : styles.container

  return (
    <div className={itemStyles}>
      <input type="checkbox" checked={item.isComplete} onChange={toggleCompleted} className={styles.checkbox} />
      <input type="text" value={item.title} onChange={updateTitle} className={styles.input} />
      <button onClick={() => deleteTodo(item.id)} className={styles.removeItemButton}>X</button>
    </div>
  )
```
```html
<div class="TodoItem_container__3tFSR TodoItem_completed__32uqS">
  <input type="checkbox" class="TodoItem_checkbox__GL9WK" checked="">
  <input type="text" class="TodoItem_input__1pbIT" value="Fly">
  <button class="TodoItem_removeItemButton__2qEaG">X</button>
</div>
```

