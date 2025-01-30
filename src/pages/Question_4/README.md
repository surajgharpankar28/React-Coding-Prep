### **Day 4 React Interview Coding Question**  
**Problem Statement:**  
Create an **Infinite Scroll Component** that:  
1. Fetches data from the GitHub Issues API (`https://api.github.com/repos/{owner}/{repo}/issues?page={page}&per_page=20`).  
2. Loads more data automatically when the user scrolls to the bottom of the page.  
3. Displays issues in a list format (title, author, labels).  
4. Shows a loading indicator while fetching data.  
5. Implements debounce for scroll events to avoid excessive API calls.  

**Requirements:**  
1. Use functional components and hooks (`useState`, `useEffect`, custom hooks if needed).  
2. Prevent duplicate API requests.  
3. Handle API rate limits (GitHub allows 60 requests/hour for unauthenticated calls).  
4. Add error handling for failed requests.  
5. Optimize scroll event listeners (cleanup on unmount).  

**What to Submit:**  
Your React component code (including styles if needed).  

---

Once you share your solution, I’ll evaluate it for:  
- Scroll event throttling/debounce implementation.  
- Proper pagination management.  
- API error/rate limit handling.  
- Memory leak prevention (abort pending requests on unmount).  
- UI/UX polish (loading states, smooth scrolling).  

Good luck! 🚀