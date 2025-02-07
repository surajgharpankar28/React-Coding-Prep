### 𝐃𝐚𝐲 𝟕 𝐨𝐟 𝐑𝐞𝐚𝐜𝐭 𝐂𝐡𝐚𝐥𝐥𝐞𝐧𝐠𝐞: Build an Expandable Accordion Component  

#### **Problem Statement:**  
You are required to build an **Expandable Accordion Component** using React. The component should display a list of collapsible sections, each containing a title and content. Users should be able to expand or collapse these sections by clicking a toggle button (`+`/`-`). Additionally, there should be a checkbox option allowing users to control whether multiple sections can be open at the same time.

---

#### **Requirements:**
1. **Accordion Behavior:**
   - Each accordion item should have a title and content.
   - Clicking the toggle button should expand or collapse the corresponding section.
   - If multiple accordions are allowed to be open (`checkbox checked`), users should be able to open multiple sections at once.
   - If multiple accordions are **not** allowed (`checkbox unchecked`), opening a new section should close all previously opened ones.

2. **Component Structure:**
   - `App.jsx`: The main component managing state and rendering the list of accordions.
   - `Accordion.jsx`: The individual accordion component, receiving props to handle toggling and active state.
   - `data.js`: Contains the list of accordion items (title and content).
   - `App.css` & `Accordion.css`: Basic styles for layout.

3. **State Management:**
   - Use the `useState` hook to manage:
     - Whether multiple accordions can be open at once.
     - The active accordion(s) in an efficient way (using a `Set`).

4. **Accessibility:**
   - Use `aria-expanded` to indicate the accordion’s state.
   - Ensure the checkbox updates accessibility settings properly.

---

#### **Bonus:**
- Animate the accordion content when expanding/collapsing.
- Use `useCallback` to optimize the toggle function.

---

💡 **Your task:**  
Implement the above functionality using React. The solution will be evaluated based on correctness, efficiency, and best practices. 🚀  