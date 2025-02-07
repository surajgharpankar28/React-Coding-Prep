const questions = [
  {
    id: 1,
    title:
      "How does the `useCallback` hook optimize performance in the Accordion component?",
    info: "The `useCallback` hook prevents unnecessary re-creation of the `toggleAccordion` function on every render. Since this function is passed as a prop to each Accordion item, frequent re-creation would cause all child components to re-render unnecessarily. By memoizing it with `useCallback`, the function reference remains the same unless `allowMultipleOpen` changes, improving performance and efficiency.",
  },
  {
    id: 2,
    title:
      "Why is `Set` used for managing active accordions instead of an array?",
    info: "A `Set` is used instead of an array because it ensures that each accordion ID is stored only once, preventing duplicate entries. It also provides efficient operations like checking if an item exists and removing elements, which are faster compared to arrays. This improves the performance of managing active accordion states.",
  },
  {
    id: 3,
    title: "What happens when `allowMultipleOpen` is set to `false`?",
    info: "When `allowMultipleOpen` is `false`, only one accordion can remain open at a time. Clicking on a new accordion first closes any currently open one before opening the new selection. This ensures a cleaner user experience by preventing multiple accordions from being expanded simultaneously.",
  },
  {
    id: 4,
    title: "Why is `useState` used to manage the active state of accordions?",
    info: "The `useState` hook is used to track which accordions are currently open. By storing active accordion IDs in a state variable, the component can dynamically update the UI based on user interactions. This allows accordions to be toggled open and closed while preserving their state between renders.",
  },
  {
    id: 5,
    title:
      "How does the `toggleAccordion` function update the state correctly?",
    info: "The `toggleAccordion` function uses the previous state value to ensure correct updates. It creates a new `Set` from the previous state, modifies it by adding or removing the clicked accordion ID, and then updates the state with the new `Set`. This approach ensures that state updates are handled efficiently and prevent unnecessary re-renders.",
  },
];

export default questions;
