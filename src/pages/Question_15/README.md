### **Day 15 React Interview Coding Question**  
### **Problem Statement: Mortgage Calculator**  

#### **Problem Statement:**  
You need to build a **Mortgage Calculator** using **React** that helps users calculate their monthly mortgage payments. The calculator should accept the following three inputs:  

1. **Principal Loan Amount (P)** – The total loan amount borrowed.  
2. **Interest Rate (Annual, in %)** – The yearly interest rate provided by the bank.  
3. **Number of Years on Mortgage (Years)** – The total duration of the loan in years.  

Your task is to **convert** these inputs appropriately and apply the formula:  


The standard math equation for calculating your monthly mortgage payment is:
\[ P(r(1+r)^n/((1+r)^n)-1) \]

Where:  
- **P** = Principal Loan Amount  
- **r** = Monthly Interest Rate (**Annual Interest Rate ÷ 100 ÷ 12**)  
- **n** = Total Number of Payments (**Years × 12**)  

---

### **🎯 Requirements:**  
✅ Use **React functional components** and the **useState hook** to manage input states.  
✅ Implement **controlled components** for the input fields.  
✅ Show an **error message** if any field is empty or invalid.  
✅ Display the **monthly EMI amount** on the screen after calculation.  
✅ Include a **clear/reset button** to reset all inputs and results.  

---

### **🔹 Example Input & Output**  
#### **Input:**  
- **Principal Loan Amount**: `128000`  
- **Interest Rate (Annual)**: `10%`  
- **Years**: `10`  

#### **Expected Output:**  
💰 **Your Monthly EMI Payment is: ₹1692.82**  
