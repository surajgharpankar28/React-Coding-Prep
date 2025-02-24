### **Day 24 React Interview Coding Question**  

### Problem Statement: HackerNews Job Board  

#### Overview  
The goal is to develop a job board that dynamically fetches and displays the latest job postings from HackerNews using the HackerNews API. The application will retrieve job post IDs, fetch metadata for each post, format the information correctly, and provide a seamless user experience for exploring job opportunities.  

#### Objectives  
1. **Fetch Latest Job Posts**  
   - Retrieve a list of job post IDs using `GET /jobstories`.  
   - Fetch metadata for the latest 9 job postings using `GET /item/<POST_ID>`.  

2. **Display Job Listings**  
   - Show job details in a structured format on the UI.  
   - Extract and format the **company name** and **role information** from the `title`.  
   - Display the **company name (and YC batch, if available) at the top**.  
   - Display the **"Is hiring..." text in the center** of the job card.  
   - Show the **posting date at the bottom** in a readable format.  

3. **User Interactions**  
   - Clicking a job card:  
     - If a `url` is available, open it in a **new tab**.  
     - If no `url` is available, open the **HackerNews job post** (`https://news.ycombinator.com/item?id=<POST_ID>`).  
   - Clicking 'Load More' should fetch and display the next 6 job posts dynamically.  

#### Constraints & Considerations  
- **Efficient API Calls:** Only fetch metadata for 9 posts initially, then fetch in batches of 6 when the user loads more.  
- **Title Parsing:** Ensure proper extraction of company names from `title`, handling variations like `"CompanyName is looking for..."`.  
- **Edge Cases:** Handle missing or inconsistent metadata gracefully.  

This job board will provide users with an efficient and user-friendly way to browse job opportunities sourced directly from HackerNews.