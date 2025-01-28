**Day 1 React Interview Coding Question**  

**Problem Statement:**  
Create a GitHub user search component that:  
1. Takes a text input (with debounce of 500ms to minimize API calls).  
2. Fetches and displays users from the GitHub API (`https://api.github.com/search/users?q={query}`).  
3. Shows a loading state during API calls.  
4. Handles and displays API errors (e.g., rate limits, network issues).  

Display the results in a list format showing at least the username and avatar. Implement this using functional components and hooks.  

**What to Submit:**  
Your React component code (including CSS-in-JS or inline styles if needed).  

---

Once you share your solution, I’ll evaluate it for:  
- Correct debounce implementation.  
- Proper state management (loading, error, data).  
- Cleanup of asynchronous operations (e.g., aborting fetch on unmount).  
- Handling edge cases (empty results, API errors).  
- Code structure and best practices.  

Good luck! 🚀