import React, { useState } from 'react';

const ColorToggleComponent = () => {
  // State to track the background color
  const [isBlack, setIsBlack] = useState(true);

  // Function to handle the button click and toggle the background color
  const handleToggle = () => {
    setIsBlack((prevIsBlack) => !prevIsBlack);
  };

  // Style object to dynamically set the background color
  const containerStyle = {
    backgroundColor: isBlack ? 'black' : 'white',
    color: isBlack ? 'white' : 'black',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <p>This is a toggleable component!</p>
      <button onClick={handleToggle}>Toggle Color</button>
    </div>
  );
};

export default ColorToggleComponent;
