// src/App.js
import React from 'react';
import './App.css';

function App() {
  // Create a list of office space objects
  const officeSpaces = [
    {
      name: 'zantcog',
      rent: 50000,
      address: 'Chennai',
    },
    {
      name: 'Assemble',
      rent: 75000,
      address: 'Bengaluru',
    },
    {
      name: 'work_kwerk',
      rent: 59999,
      address: 'Kolkata',
    },
    {
      name: 'Innov8',
      rent: 80000,
      address: 'Mumbai',
    }
  ];

  // JSX element for the main page heading
  const heading = <h1>Office Space, at Affordable Range</h1>;

  return (
    <div className="App">
      {heading}
      <hr />

      {/* Loop through the list of objects using .map() */}
      {officeSpaces.map((office) => (
        <div key={office.name} className="office-card">
          {/* Attribute to display the image */}
          <img src="office-space.jpg" alt={office.name} width="350" />

          {/* Displaying details from the object */}
          <h2>Name: {office.name}</h2>

          {/* Applying CSS class conditionally based on rent */}
          <h3 className={office.rent < 60000 ? 'text-red' : 'text-green'}>
            Rent: Rs. {office.rent}
          </h3>
          <h3>Address: {office.address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;