### **Day 19 React Interview Coding Question**  

### **React Interview Problem: Build a Star Rating Component**

#### **Problem Statement:**
You are required to implement a **Star Rating Component** in React that allows users to select a rating between 1 to 5 stars. The selected rating should dynamically update the UI and display an emoji-based feedback message.

---

### **Requirements**
1. **Display a 5-star rating system**:
   - Users should be able to click on a star to select a rating.
   - The selected star and all previous stars should be highlighted.

2. **Hover Effect**:
   - When a user hovers over a star, it should temporarily highlight all stars up to that position.
   - On mouse leave, the stars should return to the selected rating.

3. **Feedback Message**:
   - Display an **emoji-based feedback message** below the rating based on the selected value:
     - ⭐ 1 Star → 😡 "Hated it!"
     - ⭐ 2 Stars → 😕 "Could be better!"
     - ⭐ 3 Stars → 🙂 "Decent!"
     - ⭐ 4 Stars → 😊 "Really good!"
     - ⭐ 5 Stars → 😍 "Loved it!"

4. **Reset Button**:
   - Include a reset button that clears the selected rating and restores the default state.

---

### **Expected UI Behavior**
1. Clicking a star updates the rating permanently.
2. Hovering over a star temporarily highlights stars up to that position.
3. An emoji-based feedback message updates dynamically as per the rating.
4. The "Reset" button clears the selection.

---

### **What This Tests**
This problem tests your **React state management, event handling, conditional rendering, and dynamic class styling**—key concepts for frontend development. 🚀