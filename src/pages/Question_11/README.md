### **Day 11 React Interview Coding Question (Real Industry Problem)**  
**Problem Statement:**  
Create a **Calculator App** that:  
1. Supports basic arithmetic operations:  
   - Addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`).  
   - Clear (`C`) and equals (`=`) buttons.  
2. Displays the current input and result in a screen.  
3. Handles edge cases:  
   - Division by zero (show "Error").  
   - Invalid expressions (e.g., `5 + * 3`).  
4. Implements a **history feature** to show past calculations.  
5. Persists history in `localStorage`.  

---

### **Requirements:**  
1. **Core Features**:  
   - Responsive grid layout for buttons.  
   - Real-time display of input and result.  
   - Clear history button.  

2. **Technical Requirements**:  
   - Use React hooks (`useState`, `useEffect`).  
   - Avoid using `eval()` for calculations (implement your own logic).  
   - Optimize re-renders with memoization.  

---


### **What to Submit**:  
Your React component code (including calculation logic and styling).  

---

### **Evaluation Criteria**:  
1. Calculation logic (without `eval`)  
2. State management for input, result, and history  
3. Edge case handling (division by zero, invalid expressions)  
4. Code organization and readability  
5. Responsive design  