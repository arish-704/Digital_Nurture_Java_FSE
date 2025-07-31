
import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor'; 
import './App.css';

function App() {
 
  const [count, setCount] = useState(0);

  
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const sayHello = () => {
    alert('Hello! Member1');
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // 2. Function with an Argument
  const sayMessage = (message) => {
    alert(message);
  };

 
  const handlePress = () => {
    alert('I was clicked');
  };

  return (
    <div className="App">
      <h1>Event Handling Examples</h1>
      <hr />

      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <hr />

      {}
      <button onClick={() => sayMessage('welcome')}>Say Welcome</button>
      <hr />

      <button onClick={handlePress}>Click on me</button>
      <hr />

      {}
      <CurrencyConvertor />
    </div>
  );
}

export default App;
