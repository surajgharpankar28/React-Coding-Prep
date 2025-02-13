### **Day 12 React Interview Coding Question**  
**Problem Statement:**  
Create a **Product Pagination Component** that:  
1. Fetches product data from the [DummyJSON API](https://dummyjson.com/products?limit=200) (200 products).  
2. Implements client-side pagination with **10 products per page**.  
3. Displays products in a grid layout with:  
   - Product image  
   - Title  
   - Price  
   - Rating  
4. Provides pagination controls:  
   - "Previous" and "Next" buttons (disabled appropriately).  
   - Clickable page numbers with active page highlighting.  
   - Dynamic page number rendering (e.g., show 1-20 for 200 items).  
5. Optimize re-renders when switching pages.  

---

### **Requirements:**  
1. **Core Features**:  
   - Fetch data on initial render.  
   - Display current page products with clean UI.  
   - Handle edge cases (empty data, first/last page).  

2. **Technical Requirements**:  
   - Use React hooks (`useState`, `useEffect`).  
   - Avoid unnecessary API calls after initial fetch.  
   - Implement responsive grid layout.  

---

### **Example API Response**:  
```json
{
  "products": [
    {
      "id": 1,
      "title": "iPhone 9",
      "price": 549,
      "rating": 4.69,
      "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
    }
  ]
}
```

---

### **What to Submit**:  
Your React component code (including pagination logic and styling).  

---

### **Evaluation Criteria**:  
1. API data handling & pagination logic  
2. UI/UX (grid layout, active page styling)  
3. Button state management (disabled on first/last page)  
4. Code organization & performance  
5. Responsive design  

**Optional Bonus**:  
- Add loading skeletons while fetching data.  
- Implement page size selector (10/20/50 items per page).  
