import React, { useState } from "react";

const LeadForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lead Submitted:", { name, contact, amount });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        Contact Number:
        <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} required />
      </label>
      <br />
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LeadForm;

