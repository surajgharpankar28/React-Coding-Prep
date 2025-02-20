### **Day 20 React Interview Coding Question**  

### **React Interview Problem: Build a Transfer List Component**  

#### **Problem Statement:**  
You are required to implement a **Transfer List Component** in React that allows users to move items between two lists (Left → Right and Right → Left). Users should be able to select items individually and transfer them across lists dynamically.

---

### **Requirements**  

1. **Display Two Lists**:  
   - The left list contains a set of items initially.  
   - The right list starts as empty.  

2. **Item Selection Mechanism**:  
   - Clicking on an item toggles its selection (highlight it when selected).  
   - Selected items will be transferred when the appropriate button is clicked.  

3. **Transfer Functionality**:  
   - A **Right Button (→)** moves selected items from **left** to **right**.  
   - A **Left Button (←)** moves selected items from **right** to **left**.  

4. **Reset Functionality**:  
   - A **Reset Button** restores the initial state (all items in the left list, right list empty).  

---

### **Expected UI Behavior**  

1. Clicking an item **toggles its selection** (changes background color).  
2. Clicking `→` moves **selected items** from **left to right**.  
3. Clicking `←` moves **selected items** from **right to left**.  
4. Clicking **Reset** clears all selections and restores the original list.  

---

### **What This Tests**  
This problem evaluates your **React state management, event handling, conditional rendering, and dynamic class styling**—all key concepts for frontend development. 🚀