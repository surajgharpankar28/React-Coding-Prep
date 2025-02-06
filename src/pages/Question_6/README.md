**Day 6 React Interview Coding Question (Revised)**  
**Problem Statement:**  
Create a **Multi-Step Form Wizard** that:  
1. Guides users through 3 steps:  
   - Step 1: Personal Details (Name, Email)  
   - Step 2: Address Information (Street, City, ZIP Code)  
   - Step 3: Confirmation & Summary  
2. Features:  
   - Progress indicator showing current step  
   - Validation for each step (e.g., valid email format, ZIP code length)  
   - "Back" and "Next" navigation buttons  
   - Final submission with success/error feedback  
   - Persist form data if the user refreshes the page  
3. Technical Requirements:  
   - Use React Context API or Redux for state management  
   - Implement responsive design  
   - Add loading animation during mock API submission  

---

### **What to Submit:**  
Your React component code (including form logic and styling).  

---

### **Evaluation Criteria**  
1. State management across multiple steps  
2. Validation logic implementation  
3. UI/UX (progress indicator, error messages)  
4. Code organization and reusability  
5. Data persistence in localStorage  

---

**Example Flow:**  
1. User fills personal details → validates email → proceeds  
2. User enters address → validates ZIP code → proceeds  
3. User reviews data → submits → sees success message  

Would you like me to provide a solution template or clarification on any requirements? 😊