### **Day 27 React Interview Coding Question**  

### **Problem Statement: Random Number Frequency Bar Chart**  

#### **Overview**  
Develop a **dynamic bar chart** in React that visualizes the frequency of randomly generated numbers (1-10) using data fetched from an external API. The application should display the data as a **bar chart**, update the chart on demand, and show a **loading spinner** while fetching new data.  

---

### **Objectives**  

1. **Fetch Random Number Data**  
   - Retrieve **200 random numbers** (ranging from 1 to 10) from the API:  
     ```
     https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new
     ```
   - Process the API response to **calculate the frequency** of each number.  

2. **Render the Data as a Bar Chart**  
   - Display a **bar chart** representing the frequency of numbers using the `recharts` library.  
   - The X-axis should display numbers (1-10), and the Y-axis should represent their count.  
   - Use a **grid layout** and ensure the chart is **responsive**.  

3. **Allow Data Refresh**  
   - Provide a **"Fetch New Data"** button to fetch and update the chart with fresh data.  
   - While fetching new data, the button should **show a loading spinner** and be disabled.  

4. **Enhance User Experience**  
   - Ensure smooth UI updates when new data is fetched.  
   - The chart should **scale dynamically** based on the highest frequency value.  
   - Use a **visually appealing color scheme** for the bars and background.  

---

### **Constraints & Considerations**  

- **API Response Handling:**  
  - Ensure proper error handling if the API fails or returns an invalid response.  
  - Prevent unnecessary API calls if the user clicks the button too frequently.  

- **Performance Optimization:**  
  - Use `useEffect` efficiently to fetch data only when required.  
  - Optimize state updates to avoid unnecessary re-renders.  

- **Edge Cases Handling:**  
  - Handle cases where the API returns unexpected values.  
  - Prevent incorrect calculations if the API response contains missing data.  
  - Ensure proper UI scaling when the highest frequency is very small or very large.  

This interactive **data visualization challenge** reinforces concepts of **React state management, API fetching, UI responsiveness, and loading states**. 🚀