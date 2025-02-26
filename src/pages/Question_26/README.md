### **Day 26 React Interview Coding Question**  

### **Problem Statement: Cryptocurrency Converter (WUC)**  

#### **Overview**  
Develop a **cryptocurrency converter** in React that converts an input amount in a selected fiat currency to **WUC (Wildly Unstable Coin)** using real-time exchange rates from a fake API. The application should dynamically update the converted amount every **10 seconds** and highlight price changes since the last update.  

---

### **Objectives**  
1. **Convert Fiat Currency to WUC**  
   - Users should be able to enter an amount in a supported currency.  
   - The app should fetch the WUC exchange rate for the selected currency from:  
     ```
     https://api.frontendeval.com/fake/crypto/<CURRENCY_CODE>
     ```
   - The converted WUC amount should be displayed with the respective **currency symbol**.  

2. **Automatic Price Updates**  
   - The exchange rate should **refresh every 10 seconds** automatically.  
   - If the user changes the input amount or currency, the conversion should update instantly.  

3. **Display Price Change Indicator**  
   - Show the **difference** between the previous and current WUC value.  
   - If the value **increases**, highlight the difference in **green** with an **upward arrow (⬆️)**.  
   - If the value **decreases**, highlight it in **red** with a **downward arrow (⬇️)**.  

4. **Error Handling & UX Considerations**  
   - Handle unsupported currencies gracefully (e.g., show an error message).  
   - Prevent invalid inputs (negative numbers, non-numeric values).  
   - Ensure the UI remains responsive and user-friendly across devices.  

---

### **Constraints & Considerations**  
- **API Response Handling:**  
  - Ensure proper error handling if the API fails or returns an invalid response.  
  - Optimize API calls to avoid unnecessary requests.  

- **Performance Optimization:**  
  - Use `useEffect` efficiently to manage interval updates.  
  - Store previous values efficiently to calculate differences.  

- **Edge Cases Handling:**  
  - Prevent API calls when the input is empty or zero.  
  - Handle cases where the user switches currencies rapidly.  
  - Ensure correct currency symbols are displayed dynamically.  

This real-time cryptocurrency converter will provide an **interactive and engaging** experience while reinforcing concepts of **React state management, API fetching, and performance optimization**. 🚀