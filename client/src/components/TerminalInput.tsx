import React, { useState, useEffect } from 'react';

import { useUser } from '@auth0/nextjs-auth0/client';

import Loading from './Loading';
import { interpretCommand } from '@/utility/commandInterpreter';

interface TerminalInputProps {
  onCommandOutput: (output: React.ReactNode) => void;
}

export default function TerminalInput({ onCommandOutput }: TerminalInputProps) {
  const [inputValue, setInputValue] = useState('');
  const [isBarVisible, setIsBarVisible] = useState(true);
  const [username, setUsername] = useState('defaultUser');
  const [caretVisibility, setCaretVisibility] = useState('caret-transparent');
  const [blinkingBarVisibility, setBlinkingBarVisibility] = useState('block');
  const [caretMovement, setCaretMovement] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBarVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      await handleSubmit();
    }
    if (e.key === 'ArrowLeft') {
      setCaretMovement(prevCaretMovement => {
        if (prevCaretMovement !== -inputValue.length) {
          const newCaretMovement = prevCaretMovement - 1;
          setCaretVisibility(newCaretMovement === 0 ? 'caret-transparent' : 'caret-white');
          setBlinkingBarVisibility(newCaretMovement === 0 ? 'block' : 'none');
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
          setCaretVisibility(newCaretMovement === 0 ? 'caret-transparent' : 'caret-white');
          setBlinkingBarVisibility(newCaretMovement === 0 ? 'block' : 'none');
          return newCaretMovement;
        } else {
          return prevCaretMovement;
        }
      });
    }
  };

  // Handle the data submission
  const handleSubmit = async () => {
    setLoading(true); // Set loading to true
    const output = await interpretCommand(inputValue);
    onCommandOutput(output);
    setInputValue('');
    setLoading(false);
  };

  const GetUsername = () => {
    const { user, error, isLoading } = useUser();
    if (isLoading) return "Loading...";
    if (error) return `Error: ${error.message}`;

    if (user?.name) {
      return user.name.split('@')[0];
    } else {
      return 'undefined';
    }
  }

  return (
    <div className="basis-1/12 flex items-center">
        <div className="flex flex-row items-center h-full w-full text-white text-2xl">
            <span className="px-2 text-orange"><GetUsername></GetUsername>$-:</span>
            <div className="flex-1 h-full flex items-center relative">
                <input
                    type="text"
                    id='userInput'
                    className={`absolute left-0 top-0 w-full h-full bg-transparent focus:outline-none ${caretVisibility}`}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    autoComplete='off'
                    autoFocus
                />
                <span className="whitespace-pre-wrap">{inputValue}</span>
                {isBarVisible && (
                    <span id='blinkingBar' className="blinking-bar bg-white w-[8px] h-[24px]" style={{ display: blinkingBarVisibility }}></span>
                )}
            </div>
        </div>
        {loading && <Loading label="Loading..."/>} {/* Show loading component */}
    </div>
);
}
