import React from "react";
import ReactDOM from "react-dom/client";
import LoanCalculator from "./LoanCalculator";
import LeadForm from "./LeadForm";

const App = () => (
  <div>
    <h1>Welcome to My React Webflow App</h1>
    <LoanCalculator />
    <LeadForm />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
