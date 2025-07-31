
import React, { useState } from 'react';

function CurrencyConvertor() {
 
  const [amount, setAmount] = useState(80);
  
  const [result, setResult] = useState('Euro'); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const conversionRate = 80; 
    const convertedAmount = amount * conversionRate;

    
    setResult(`INR ${convertedAmount}`);

    
    alert(`Converting to Euro Amount is ${convertedAmount}`);
  };

  return (
    <div>
      <h2>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Currency:</label>
          {}
          <input type="text" value={result} readOnly />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;