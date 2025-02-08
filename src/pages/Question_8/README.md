### **Day 8 React Interview Coding Question**  
**Problem Statement:**  
Create a **Product Search & Filter Dashboard** that:  
1. Fetches product data from a mock API (e.g., `https://fakestoreapi.com/products`).  
2. Allows users to:  
   - Search products by title/description.  
   - Filter by category (e.g., electronics, clothing).  
   - Sort by price (low-high, high-low).  
   - Add products to a wishlist (persisted in `localStorage`).  
3. Displays results in a responsive grid with pagination (10 items/page).  

---

### **Requirements:**  
1. **Core Features**:  
   - Dynamic URL updates for filters (e.g., `?category=electronics&sort=price_asc`).  
   - Wishlist button with counter in header.  
   - Loading skeleton screens during API calls.  

2. **Technical Requirements**:  
   - Use React hooks (`useState`, `useEffect`, `useMemo`, `useCallback`).  
   - Implement custom hooks for API fetching and URL synchronization.  
   - Avoid unnecessary re-renders (memoize components).  
   - Error handling for API failures.  

---

**Evaluation Criteria**:  
1. API data handling and caching  
2. Filter/sort/search performance optimizations  
3. URL state synchronization  
4. Clean component structure (e.g., separate `ProductCard`, `FiltersSidebar`)  
5. Responsive UI/UX  