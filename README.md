## 1. What is JSX, and why is it used?
Answer: JSX is a special syntax that lets HTML-like code be written directly inside JavaScript. React uses it because it makes building user interfaces easier to read and understand. Without JSX, UI would have to be built using React.createElement, which is much harder to manage.

## 2. What is the difference between State and Props?
Answer: Props are external inputs passed to a component, usually from a parent component. They are read-only and cannot be modified by the component that receives them.
State, on the other hand, is internal data that belongs to a component. It can be updated, and whenever it changes, React re-renders that component to reflect the new data.

## 3. What is the useState hook, and how does it work?
Answer: useState is a React hook used to create state in functional components. It takes an initial value and returns an array with two elements: the current state value and a function to update it. When the update function is called, React re-renders the component so that the UI always matches the new state.

## 4. How can state be shared between components in React?
Answer: The most common way is to lift the state up into a parent component, and then pass it down as props to child components. This ensures multiple components can use the same state. For larger applications, the Context API or external state management libraries like Redux can be used for easier sharing across many components.

## 5. How is event handling done in React?
Answer: Event handling in React is similar to regular JavaScript but uses camelCase names like onClick or onChange. Instead of passing strings, functions are passed directly to handle events. For example:

  <button onClick={handleClick}>Click Me</button>

When the button is clicked, React calls the handleClick function.