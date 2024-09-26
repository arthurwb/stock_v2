import React from 'react';
import OptionDisplay from '@/components/OptionDisplay';
import { Option, HistoricalPrice } from '@/app/types/optionTypes';

const optionCommands = {
  getOptions: async () => {
    try {
      const response = await fetch('http://localhost:8080/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: "get-allOptions" }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);

      return <OptionDisplay options={data} />;
    } catch (error) {
      console.error('Fetch error:', error);
      const out: Option[] = [{
        option: {
          id: '',
          optionName: '',
          price: 0
        },
        historicalPrices: []
      }];
      return <OptionDisplay options={out} />;
    }
  },
  buyOption: async (option: string) => {
    // Implementation for buying an option
  },
};

export default optionCommands;
