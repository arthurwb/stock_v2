// components/OptionDisplay.tsx
import React, { useEffect, useState } from 'react';
import BorderedSection from './BorderedSection';
import Loading from './Loading';
import optionCommands from '@/utility/commands/OptionCommands';
import { Option, OptionDisplayProps } from '@/app/types/optionTypes';

const OptionDisplay: React.FC<OptionDisplayProps> = ({ options }) => {
  const [updatedOptions, setUpdatedOptions] = useState<Option[]>(options);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUpdatedOptions = async () => {
    setLoading(true);
    const optionNames = updatedOptions.map(option => option.optionName); // Get current option names
    const newOptions = await optionCommands.getUserOptions(optionNames);
    setUpdatedOptions(newOptions);
    setLoading(false);
  };

  useEffect(() => {
    const interval = setInterval(fetchUpdatedOptions, 5000);
    return () => clearInterval(interval);
  }, [updatedOptions]);

  return (
    <div className="flex flex-col basis-11/12 space-y-3">
      {/* {loading && <Loading label="Updating options..."/>} */}
      {updatedOptions.map((option, index) => (
        <div key={index} className="basis-3/12 flex flex-row">
          <div className="basis-2/12 border-solid border-white border-1"></div>
          <BorderedSection label={option.optionName} className="basis-10/12 h-32 p-2">
            <div className="w-full h-full flex">
              {/* Only update the price here */}
              <span>Price: ${option.price}</span>
            </div>
          </BorderedSection>
        </div>
      ))}
    </div>
  );
};

export default OptionDisplay;
