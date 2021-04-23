# To Do List w/ Theme Selector (React)

## Summary
This is a to-do list application that features the ability to categorize items based upon whether or not they have been completed; furthermore, individual items can be deleted, and all completed items can be deleted at once. The application also features a light/dark theme selector.

## Structure
Most of the application's logic is stored directly in the main App component. The NewItem component tracks user input and passes submissions back to App via a callback function. App stores this data as state and generates a list of TodoItem components to be rendered. The ControlPanel contains list selection  buttons and the button that clears all completed items; all of these trigger callbacks located within App when clicked.
