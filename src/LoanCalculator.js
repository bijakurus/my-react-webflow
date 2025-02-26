 
import React, { useState } from "react";
import ReactDOM from "react-dom";

const LoanCalculator = () => {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(5);
  const [term, setTerm] = useState(12);

  const monthlyPayment = ((amount * (rate / 100)) / term).toFixed(2);

  return (
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc" }}>
      <h2>Loan Calculator</h2>
      <label>Loan Amount: </label>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <label>Interest Rate (%): </label>
      <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
      <label>Term (Months): </label>
      <input type="number" value={term} onChange={(e) => setTerm(e.target.value)} />
      <p>Monthly Payment: ${monthlyPayment}</p>
    </div>
  );
};

// Render the component inside Webflow
const root = document.getElementById("loan-calculator");
if (root) {
  ReactDOM.render(<LoanCalculator />, root);
}

export default LoanCalculator;
