### **Day 23 React Interview Coding Question**  

### **React Interview Problem: Memory Card Game**  

#### **Problem Statement:**  
You are required to implement a **Memory Card Matching Game** in React. The game consists of a grid of hidden pairs of numbers, which the player must uncover by matching identical numbers.  

At the start of the game, all numbers should be **visible for 3 seconds** before they are hidden. The player can then click on two cards at a time to reveal them. If they match, the cards remain visible; otherwise, they are hidden again. The game continues until all pairs are matched, after which a **"You Won!"** message is displayed along with a **"Play Again"** button.  

---

### **Requirements**  

1. **Game Grid Structure**:  
   - Display **16 cards (8 pairs of numbers)** arranged in a **4x4 grid**.  
   - Each card should initially be hidden after a 3-second preview at the start.  

2. **Gameplay Mechanics**:  
   - Clicking on a card reveals its number.  
   - The player can select **only two cards at a time**.  
   - If the two selected cards match, they stay revealed.  
   - If they do not match, they are hidden again after 1 second.  

3. **Game Completion & Reset**:  
   - When all pairs are found, display **"You won the Game 🎉"**.  
   - A **"Play Again"** button should restart the game with shuffled numbers.  

4. **User Feedback & UI Enhancements**:  
   - Use a **3-second preview** at the beginning to help the player memorize card positions.  
   - Provide **smooth animations or transitions** when revealing/hiding cards.  
   - Ensure that users **cannot click new cards while two are already selected**.  

---

### **Expected Behavior**  

1. On clicking **"Play Game"**, the numbers should be shown for **3 seconds**, then hidden.  
2. The player can **click on a card to reveal it** and try to find its pair.  
3. If the two revealed cards **match**, they remain visible. Otherwise, they are hidden again.  
4. The game should detect when all pairs are found and display a **"You Won!"** message.  
5. The **"Play Again"** button should restart the game with shuffled pairs.  

---

### **What This Tests**  
This problem evaluates your **React state management (`useState`), side effects handling (`useEffect`), event handling, conditional rendering, and array manipulation techniques**—all essential frontend skills. 🚀  

Would you like to add **animations** or other UI improvements for an enhanced experience? 😊