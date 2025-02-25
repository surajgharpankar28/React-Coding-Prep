### **Day 25 React Interview Coding Question**  

### **Problem Statement: Nested Comment System in React**

#### **Overview**  
The objective is to develop a **nested comment system** in React that allows users to post comments, reply to existing comments, and delete them dynamically. The system should support **infinite nesting** of replies while maintaining a structured and efficient rendering process.

---

### **Objectives**
1. **Add Comments**  
   - Users should be able to enter a comment in the input field and submit it.  
   - Each comment should have a unique ID and support nested replies.  

2. **Reply to Comments**  
   - Users should be able to reply to any comment.  
   - Replies should be added as child comments within the parent comment.  
   - Replies should support infinite nesting.  

3. **Delete Comments**  
   - Users should be able to delete any comment, including parent comments and nested replies.  
   - Deleting a parent comment should remove all its child comments.  

4. **Expand/Collapse Replies**  
   - Users should have the option to expand and collapse replies to manage large comment threads efficiently.  

5. **Keyboard Shortcuts for Accessibility**  
   - Pressing **Enter** should submit a comment or reply.  
   - Pressing **Escape** should clear the input field.  

---

### **Constraints & Considerations**  
- **Efficient Data Structure:**  
  - The comment tree should be maintained as a **nested array of objects**, where each comment has an array of `children`.  
  - Recursive functions should be used to manage replies and deletions efficiently.  

- **Performance Optimization:**  
  - Prevent unnecessary re-renders when adding/deleting comments.  
  - Consider **React.memo** or other optimizations for large threads.  

- **Edge Cases Handling:**  
  - Ensure replies are properly attached to the correct parent.  
  - Handle cases where deeply nested comments cause performance issues.  
  - Prevent submission of empty comments.  

This nested comment system will provide an intuitive and scalable way for users to engage in threaded discussions while ensuring smooth interactions.