### **Day 21 React Interview Coding Question**  

### **React Interview Problem: Animated Progress Bar Component**  

#### **Problem Statement:**  
You are required to implement an **Animated Progress Bar Component** in React that visually represents progress updates. The progress bar should smoothly transition to new progress values using an animation effect.

---

### **Requirements**  

1. **Progress Bar Structure**:  
   - The component should accept a `progress` prop (value between `0-100`).  
   - It should display the current progress percentage inside the bar.  

2. **Smooth Animation**:  
   - When the `progress` prop updates, the bar should smoothly transition to the new width.  
   - The animation should have a **slight delay (100ms)** before updating.  

3. **Dynamic Styling**:  
   - The text color should be **black** if the progress is **less than 5%**, otherwise **white**.  
   - The progress bar should move using `transform: translateX()` rather than changing `width`.  

4. **Accessibility Considerations**:  
   - The progress bar should have proper **ARIA attributes** (`role="progressbar"`, `aria-valuenow`, etc.).  

---

### **Expected Behavior**  

1. The progress bar should animate smoothly when the `progress` value changes.  
2. The percentage should be visible inside the bar and update dynamically.  
3. The text color should change based on progress values.  

---

### **What This Tests**  
This problem evaluates your **React state management (`useState`), lifecycle methods (`useEffect`), CSS animations, and accessibility best practices**—all essential frontend concepts. 🚀