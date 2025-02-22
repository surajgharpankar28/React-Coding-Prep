### **Day 22 React Interview Coding Question**  

### **React Interview Problem: Tic-Tac-Toe Game Component**  

#### **Problem Statement:**  
You are required to implement a **Tic-Tac-Toe Game** in React that allows two players to take turns marking "X" and "O" on a 3x3 grid. The game should determine the winner, display game status, and provide a reset option.

---

### **Requirements**  

1. **Game Board Structure**:  
   - The game board should consist of a **3x3 grid** where each cell can be marked as "X" or "O".  
   - Clicking an empty cell should update it with the current player's symbol.  
   - Players should alternate turns between "X" and "O".  

2. **Win Condition Handling**:  
   - The game should **detect a winner** when a player gets three marks in a row (horizontal, vertical, or diagonal).  
   - If all cells are filled without a winner, declare the game as a **draw**.  

3. **Game Reset Functionality**:  
   - A "Reset" button should clear the board and start a new game.  

4. **User Feedback**:  
   - Display the **current player’s turn**.  
   - Announce the **winner** when the game ends.  

---

### **Expected Behavior**  

1. Players should be able to **click on a cell** to place their symbol.  
2. The game should **track turns and alternate between X and O**.  
3. The game should **detect wins or draws** and stop further moves when the game ends.  
4. A **reset button** should restart the game at any time.  

---

### **What This Tests**  
This problem evaluates your **React state management (`useState`), event handling, conditional rendering, and logic for game rules**—all essential frontend skills. 🚀