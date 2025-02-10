### **Day 10 React Interview Coding Question**  

### **Problem Statement: Multi-Tab Form UI in React**

#### **Objective:**  
Design and implement a **multi-tab form UI** using **React.js** in CodeSandbox with three distinct tabs: **Profile, Interest, and Settings**. Each tab contains specific form fields with required validations and UI elements. The form should ensure **data persistence across tabs** and only allow submission from the last tab.

#### **Requirements:**  

1. **Form Structure:**  
   - The form consists of three tabs:  
     - **Profile** (e.g., Name, Age, Email)  
     - **Interest** (e.g., Hobbies, Preferred Activities)  
     - **Settings** (e.g., Notification Preferences, Theme Selection)
   - Users can navigate between tabs without losing entered data.  

2. **Form Fields & Validations:**  
   - **Age Field:** Accepts only numeric values.  
   - **Email Field:** Must follow a valid email format.  
   - Incorporate **dropdowns, radio buttons, and checkboxes** where applicable.  
   - Ensure **mandatory fields are validated** before proceeding to the next tab.  

3. **Submission Criteria:**  
   - The **Submit button** should be available only on the last tab (**Settings**).  
   - On submission, all form data across tabs should be collected and logged/displayed.  

4. **Scalability & Maintainability Considerations:**  
   - Implement a **form configuration object** to dynamically generate form fields instead of hardcoding them.  
   - Ensure **modular, reusable components** for better maintainability.  
   - Optimize state management to handle form data efficiently.  
