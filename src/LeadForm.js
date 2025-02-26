 
import React from "react";
import ReactDOM from "react-dom";

const LeadForm = () => {
  return (
    <form style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Apply for a Loan</h2>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email Address" required />
      <input type="number" placeholder="Loan Amount" required />
      <button type="submit">Submit</button>
    </form>
  );
};

// Render the component inside Webflow
const root = document.getElementById("lead-form");
if (root) {
  ReactDOM.render(<LeadForm />, root);
}

export default LeadForm;
