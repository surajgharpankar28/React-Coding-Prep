### **Day 13 React Interview Coding Question**  
### **Problem Statement: Dismissible Modal Overlay**  

#### **Objective**  
Design and implement a **dismissible modal overlay** that allows users to view and accept an offer. The modal should be properly centered, dismissible via multiple actions, and visually appealing with an overlay effect.

---

#### **Requirements**  

1. **Initial UI State**  
   - Display a **"Show Offer"** button when the page loads.  

2. **Modal Display & Positioning**  
   - Clicking the **"Show Offer"** button should display a **modal overlay**.  
   - The modal should have:  
     - A **centered offer message** inside a styled box.  
     - A **close button ("X")** at the top-right.  
     - An **"Accept Offer"** button.  
   - The modal should always be **centered (both vertically & horizontally)**, regardless of scrolling.  

3. **Modal Dismissal Conditions**  
   - The modal should be dismissed when:  
     - The user clicks anywhere outside the **modal**.  
     - The user clicks the **"X" close button**.  
   - If dismissed, the UI should return to showing just the **"Show Offer"** button.  

4. **Offer Acceptance Handling**  
   - If the user clicks **"Accept Offer"**, the modal should be dismissed.  
   - The **"Show Offer"** button should be replaced with the text **"Offer accepted"**.  
   - The modal should not reappear unless the page is refreshed.  

---

#### **Constraints & Considerations**  
- **State Management:** Use `useState` for modal visibility and offer acceptance tracking.  
- **Event Handling:** Ensure clicking outside the modal **correctly triggers dismissal**.  
- **Styling:**  
  - Use CSS to create a **dimmed background effect** when the modal is open.  
  - Ensure the modal remains **fixed in position** even if the user scrolls.  
- **Performance Optimization:** Consider using `useCallback` for event handlers if necessary.  

---

#### **Expected Outcome**  
- Users should be able to **view, dismiss, and accept** an offer seamlessly.  
- The modal should be **properly styled, centered, and functional** across different screen sizes.  
- The UI should provide a **smooth, interactive experience** without unnecessary re-renders.  

Would you like additional details, such as test cases or accessibility considerations? 🚀