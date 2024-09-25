import React from 'react';
import OptionDisplay from '@/components/OptionDisplay';
import { Option } from '@/app/types/optionTypes';

const optionCommands = {
  getUserOptions: async (options: string[]) => {
    try {
      // Create an array of promises
      const fetchPromises = options.map(async (option) => {
        const response = await fetch('http://localhost:8080/query', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ optionName: option }),
        });
        const data = await response.json();
        return data; // Return the data to be collected later
      });

      // Wait for all fetch requests to complete
      const out: Option[] = await Promise.all(fetchPromises);

      console.log(out);
      return out;
    } catch (error) {
      console.error('Fetch error:', error);
      return [{
        optionName: `Error: ${error}`,
        price: -1
      }]
    }
  },
  buyOption: async (option: string) => {

  },
};

export default optionCommands;
