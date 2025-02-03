### **Day 5 React Interview Coding Question**  
**Problem Statement:**  
Create a **Shopping Cart Component** that:  
1. Fetches product data from a mock API (e.g., `https://fakestoreapi.com/products`).  
2. Displays products in a grid with "Add to Cart" buttons.  
3. Shows a cart sidebar with items, quantities, and total price.  
4. Allows users to:  
   - Add/remove items from the cart.  
   - Adjust item quantities (increase/decrease).  
   - Persist cart data in `localStorage`.  
5. Implements loading/error states for API calls.  

---

### **Requirements:**  
1. Use **functional components** and **React hooks** (`useState`, `useEffect`, `useReducer` optional).  
2. Prevent duplicate items in the cart (update quantity if item exists).  
3. Calculate total price dynamically.  
4. Optimize re-renders (e.g., memoize components if needed).  
5. Ensure cart state persists after page reload.  

---

### **What to Submit:**  
Your React component code (including styles if needed).  
