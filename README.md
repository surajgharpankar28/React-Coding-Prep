
# 🚀 React Coding Interview  Questions

A beautifully designed **React Coding Interview Preparation** platform that provides common React interview questions with detailed answers. This project is built with **React, React Router, and Tailwind CSS**, featuring a sleek UI with Glassmorphism effects.

## Checkout Implementation
Visit here: [**React Coding Question Prep**](https://react-interview-coding-question.vercel.app/)

## ✨ Features

- 📌 **List of Common React Questions**
- 🔗 **Dynamic Routing** (`/question-{id}-{title}`)
- 🎨 **Modern UI with Glassmorphism**
- 📱 **Fully Responsive Design**
- ⚡ **Fast Navigation with React Router**
- 🛠 **Easily Extendable & Scalable**

## 🛠 Tech Stack

- **Frontend**: React, React Router, Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Vercel

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/react-interview-questions.git
cd react-interview-questions
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Development Server
```sh
npm run dev
```

The app will be available at **http://localhost:5173/**.

## 📁 Folder Structure

```
📂 src
 ├── 📂 components      # Reusable components
 ├── 📂 pages           # Question-specific pages
 ├── 📜 App.jsx         # Main app file
 ├── 📜 router.js       # Dynamic routing logic
 ├── 📜 questionList.js # List of React interview questions
 ├── 📜 Header.jsx      # Global header
 ├── 📜 Footer.jsx      # Footer component
```

## 🛠 Adding a New Question

1. Open `questionList.js` and **add your new question**:
   ```js
   const questionList = {
       11: "What is React Context?",
   };
   export default questionList;
   ```
2. Create a new question page inside `/src/pages/Question_11/App.jsx`
3. The new question will automatically be accessible at:
   ```
   /question-11-what-is-react-context
   ```

## 📢 Contributing

Want to contribute? Feel free to **open an issue** or submit a **pull request**.

## 📜 License

This project is open-source and available under the **MIT License**.

---

**💡 Built with 💙 by [Suraj Gharpankar](https://github.com/surajgharpankar28).** 🚀
