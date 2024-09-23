import React, { useState, useEffect } from 'react';

export default function TerminalInput() {
  const [inputValue, setInputValue] = useState('');
  const [isBarVisible, setIsBarVisible] = useState(true);
  const [username, setUsername] = useState('defaultUser');
  const [caretVisibility, setCaretVisibility] = useState('transparent');
  const [blinkingBarVisibility, setBlinkingBarVisibility] = useState('block');
  const [caretMovement, setCaretMovement] = useState(0);

  // Toggle the visibility of the blinking bar (caret)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBarVisible((prev) => !prev);
    }, 500); // Flash every 500ms
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default action of form submission or new line in the input
      await handleSubmit();
    }
    if (e.key === 'ArrowLeft') {
      setCaretMovement(prevCaretMovement => {
        if (prevCaretMovement != -inputValue.length) {
            const newCaretMovement = prevCaretMovement - 1;
            setCaretVisibility(newCaretMovement === 0 ? 'transparent' : 'white');
            setBlinkingBarVisibility(newCaretMovement === 0 ? 'block' : 'none');
            console.log('end left: ' + newCaretMovement);
            return newCaretMovement;
        } else {
            return prevCaretMovement;
        }
      });
    }
    if (e.key === 'ArrowRight') {
      setCaretMovement(prevCaretMovement => {
        if (prevCaretMovement < 0) {
            const newCaretMovement = prevCaretMovement + 1;
            setCaretVisibility(newCaretMovement === 0 ? 'transparent' : 'white');
            setBlinkingBarVisibility(newCaretMovement === 0 ? 'block' : 'none');
            console.log('end right: ' + newCaretMovement);
            return newCaretMovement;
        } else {
            return prevCaretMovement;
        }
      });
    }
  };

  // Handle the data submission
  const handleSubmit = async () => {
        const payload = {
            username: username,
            data: inputValue,
        };

        try {
            const response = await fetch('http://localhost:8080/api/test', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log('Request successful');
            } else {
                console.error('Request failed with status', response.status);
            }

            setInputValue('');
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    

  return (
    <div className="basis-1/12">
      <div className="flex flex-row items-center h-full w-full text-white font-bold text-3xl">
        <span className="px-2 text-orange">test@RT-25-SW$~: </span>
        <div className="flex-1 h-full flex items-center relative">
          <input
            type="text"
            id='userInput'
            className={`absolute left-0 top-0 w-full h-full bg-transparent focus:outline-none caret-${caretVisibility}`}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <span className="whitespace-pre-wrap">{inputValue}</span>
          {isBarVisible && (
            <span id='blinkingBar' className="blinking-bar bg-white w-[10px] h-[36px]" style={{ display: blinkingBarVisibility }}></span>
          )}
        </div>
      </div>
    </div>
  );
}
