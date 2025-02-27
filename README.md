# 🚀 React Coding Challenge - Level Up Your React Skills!

Welcome to my **28 Days React Coding Challenge**! This project is designed to enhance your React skills with daily hands-on challenges. Each question is dynamically loaded, providing an interactive and seamless developer experience.

## 🔗 [Checkout Live here](https://react-coding-prep.vercel.app/)

## 📌 Features

✅ **Dynamic Question Loading** – Questions are stored in a separate file and rendered automatically.  
✅ **SEO-Friendly Dynamic Routing** – Each question has a clean, shareable URL.  
✅ **Live Exploration & GitHub Integration** – Jump straight into a live preview or check the source code.  
✅ **Pagination Support** – Easily navigate through multiple challenge pages.  

---

## 🚀 How It Works

### 📥 Question List Import
All challenge questions are stored in a dedicated file:
```js
import questionList from "../questionList";
```
This object maps **question numbers to their respective titles**, making it easy to iterate and generate UI elements dynamically.

Adding a new challenge? **Simply update the `questionList` file**, and the UI updates automatically—no need for manual changes in the component!

### 🔗 Dynamic Routing for Each Question
Every challenge has a unique, dynamically generated route:
```js
<Link to={`/question-${id}-${title.toLowerCase().replace(/\s+/g, "-")}`}>
  Explore Live
</Link>
```
For example, if the challenge is **"Building a Custom React Hook"**, the URL becomes:
```
/question-2-building-a-custom-react-hook
```
This approach ensures **clean, readable URLs** that improve user experience and SEO.

### 🛠 GitHub Integration
Each challenge has a **direct GitHub link** to its corresponding source code:
```js
<Link
  to={`https://github.com/surajgharpankar28/React-Coding-Prep/tree/main/src/pages/Question_${id}`}
>
  GitHub
</Link>
```
Instead of searching through a large repository, users can **jump directly** to the specific question folder.

---

## 🎨 UI Overview
The landing page is designed to be **clean, responsive, and user-friendly**:
- **Title & Subtitle**: Introduces the challenge and encourages participation.
- **Grid Layout**: Displays challenges in a visually appealing format.
- **Action Buttons**: Explore live or view source code with a single click.
- **Pagination Controls**: Navigate through multiple pages effortlessly.

---

## 📜 Folder Structure
```
📂 src
 ┣ 📂 pages
 ┃ ┣ 📂 Question_1
 ┃ ┣ 📂 Question_2
 ┃ ┗ 📂 Question_N
 ┣ 📜 questionList.js
 ┗ 📜 QuestionList.jsx
```
- **`questionList.js`** – Contains the list of questions.
- **`QuestionList.jsx`** – Renders the questions dynamically.
- **`pages/Question_X/`** – Individual question implementations.

---

## 🏗️ Setup & Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/surajgharpankar28/React-Coding-Prep.git
```

### 2️⃣ Install Dependencies
```sh
cd React-Coding-Prep
npm install
```

### 3️⃣ Start the Development Server
```sh
npm start
```

The app will be available at **`http://localhost:3000`**.

---

## 💡 Future Improvements
- ✅ Add filtering based on difficulty levels.
- ✅ Implement user progress tracking.
- ✅ Improve accessibility and performance optimizations.

---

## 💬 Feedback
If you have any suggestions, feel free to open an issue or contribute to the project. Let's grow together! 🚀

**[GitHub Repo](https://github.com/surajgharpankar28/React-Coding-Prep)**
