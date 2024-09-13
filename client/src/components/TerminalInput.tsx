import React, { useState, useEffect } from 'react';

export default function TerminalInput() {
  const [inputValue, setInputValue] = useState('');
  const [isBarVisible, setIsBarVisible] = useState(true);
  const [username, setUsername] = useState('defaultUser'); // Example username

  // Toggle the visibility of the blinking bar (caret)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBarVisible((prev) => !prev);
    }, 500); // Flash every 500ms
    return () => clearInterval(interval);
  }, []);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Handle key press events
  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default action of form submission or new line in the input
      await handleSubmit();
    }
  };

  // Handle the data submission
  const handleSubmit = async () => {
    const payload = {
      username: username,
      data: inputValue,
    };

    try {
      const response = await fetch('http://localhost:8080/endpoint', { // Replace '/endpoint' with your actual endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('Request successful');
        setInputValue(''); // Clear the input field on successful submission
      } else {
        console.error('Request failed with status', response.status);
      }
    } catch (error) {
      console.error('Error making request:', error);
    }
  };

  return (
    <div className="basis-1/12">
      <div className="flex flex-row items-center h-full w-full text-white font-extrabold text-3xl">
        <span className="px-2 text-orange">test@RT-25-SW$~: </span>
        
        {/* Input wrapper to manage custom caret */}
        <div className="flex-1 h-full bg-transparent flex items-center relative">
          <input
            type="text"
            className="absolute left-0 top-0 w-full h-full opacity-0 caret-transparent"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          
          {/* Display the input text */}
          <span className="whitespace-pre-wrap">{inputValue}</span>
          
          {/* Custom blinking caret */}
          {isBarVisible && (
            <span className="blinking-bar bg-white w-[10px] h-[36px]"></span>
          )}
        </div>
      </div>
    </div>
  );
}
