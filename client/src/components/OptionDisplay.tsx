// components/OptionDisplay.tsx
import React from 'react';
import BorderedSection from './BorderedSection';
import Loading from './Loading';

interface Option {
  optionName: string;
  price: number;
}

interface OptionDisplayProps {
  options: Option[];
}

const OptionDisplay: React.FC<OptionDisplayProps> = ({ options }) => {
  return (
    <div className="flex flex-col basis-11/12 space-y-3">
      {options.map((option, index) => (
        <div key={index} className="basis-3/12 flex flex-row">
          <div className="basis-2/12 border-solid border-white border-1"></div>
          <BorderedSection label={option.optionName} className="basis-10/12 h-32 p-2">
            <div className="w-full h-full flex">
              Price: ${option.price}
            </div>
          </BorderedSection>
        </div>
      ))}
    </div>
  );
};

export default OptionDisplay;
