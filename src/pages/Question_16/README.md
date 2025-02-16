### **Day 16 React Interview Coding Question**  
**Problem Statement:**  
#### **Image Carousel with Auto-Sliding & Navigation Controls**  

**Objective:**  
Build a React-powered **image carousel** that dynamically fetches images, supports **automatic sliding**, and allows **manual navigation** via buttons and indicators.  

---

#### **Features:**  
- **Fetching Images:**  
  - Fetch top images from `https://www.reddit.com/r/aww/top/.json?t=all`.  
  - Filter out non-image URLs and store them in state.  
  - Display a **loading indicator** while fetching data.  

- **Auto-Sliding:**  
  - The carousel **automatically transitions** to the next image every **3 seconds**.  

- **Manual Navigation:**  
  - **Left and right arrow buttons** allow users to switch images manually.  
  - Navigation is **circular** (looping from last to first and vice versa).  

- **Image Selector Indicators:**  
  - A row of **small circular indicators** at the bottom represents images.  
  - The **active image's indicator** is **highlighted**.  
  - Clicking an indicator jumps to the corresponding image.  

- **Responsive & Accessible UI:**  
  - Fullscreen layout with a **dark background**.  
  - Images are **centered and properly scaled**.  
  - Buttons and indicators include **hover effects** and **keyboard accessibility**.  

---

#### **Technical Requirements:**  
- Built with **React** using **React Hooks** (`useState`, `useEffect`).  
- Uses `useEffect` to fetch images on mount and handle auto-slide logic.  
- Ensures **performance optimization** with proper cleanup (`clearInterval`).  
- Implements **ARIA attributes** for improved accessibility.  

---

### **Expected Outcome:**  
✅ Fetches and displays images dynamically.  
✅ Supports **auto-play and manual navigation**.  
✅ Allows users to **select images via indicators**.  
✅ Provides a **smooth, engaging UI experience**.  

Would you like to add animation effects or pause on hover? 🚀