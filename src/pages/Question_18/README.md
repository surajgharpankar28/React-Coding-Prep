### **Day 18 React Interview Coding Question**  

### **React Interview Problem: Build a File Explorer Component**

#### **Problem Statement:**
You are required to implement a **File Explorer** component in React that displays a hierarchical file system structure. The component should allow users to expand and collapse folders to view their contents.

---

### **Requirements**
1. **Display a hierarchical file/folder structure**:
   - Files and folders should be displayed based on the given JSON data.
   - Folders should be **expandable/collapsible**.
   - Files should be displayed as leaf nodes.


2. **Use React State to Manage Folder Expansion**:
   - Clicking a folder should **toggle** its expanded state.
   - Maintain the expanded state for each folder independently.


3. **Render Nested Folders and Files Dynamically**:
   - The component should work for any depth of nesting.
   - It should **recursively** render children inside folders.


---

### **Expected UI Behavior**
1. The root-level folders (`public`, `src`) should be **collapsible**.
2. Clicking on a folder should toggle its **expanded state** and show/hide its children.
3. Files should be displayed **without an expand/collapse icon**.
4. Nested folders should also be **expandable recursively**.


This problem tests your **React state management, recursion, event handling, and UI structuring**—all essential for frontend development! 🚀