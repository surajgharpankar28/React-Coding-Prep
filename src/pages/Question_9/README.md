### **Day 9 React Interview Coding Question**  
**Problem Statement:**  
Create an **Autocomplete Search Component** that:  
1. Fetches suggestions from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) as the user types.  
2. Implements debounced input (300ms delay) to minimize API calls.  
3. Displays a dropdown with suggestions, highlighting matches.  
4. Supports keyboard navigation (↑/↓ arrows, Enter to select).  
5. Caches API responses to avoid redundant requests.  
6. Shows loading/error states.  

---

### **Requirements:**  
1. **Core Features**:  
   - Debounced search input.  
   - API response caching (use `localStorage` or memoization).  
   - Accessible dropdown with ARIA attributes.  
   - Text highlighting for matched query substrings.  

2. **Technical Requirements**:  
   - Use React hooks (`useState`, `useEffect`, `useRef`, `useMemo`).  
   - Implement custom debounce logic (no libraries).  
   - Prevent race conditions with `AbortController`.  
   - Memoize components to optimize performance.  

---

### **Example API Endpoint**:  
`GET https://jsonplaceholder.typicode.com/users?q={query}`  

---

### **What to Submit**:  
Your React component code (including API logic and styling).  

---

### **Evaluation Criteria**:  
1. **Debounce Implementation**: Proper delay handling without libraries.  
2. **API Caching**: Avoid redundant network requests.  
3. **Accessibility**: Keyboard navigation and ARIA roles.  
4. **Error Handling**: Graceful degradation on API failures.  
5. **Performance**: Memoization and aborting stale requests.  


Let me know if you'd like to refine this further! 😊