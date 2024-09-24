// client/src/utility/commandInterpreter.tsx
import React from 'react';
import OptionDisplay from '@/components/OptionDisplay';

// The utility function that interprets commands
export async function interpretCommand(command: string): Promise<React.ReactNode | null> {
  const trimmedCommand = command.trim().toLowerCase();

  switch (trimmedCommand) {
    case 'get options': {
      try {
        const query = `
          query ExampleQuery {
            optionsList {
              optionName
              price
            }
          }
        `;
        
        const response = await fetch('http://localhost:8080/api/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        if (response.ok) {
          const result = await response.json();
          const options = result.data.optionsList || [];
          
          // Return the OptionDisplay component with fetched data
          return <OptionDisplay options={options} />;
        } else {
          console.error('Request failed with status', response.status);
          return <div>Error: Unable to fetch options</div>;
        }
      } catch (error) {
        console.error('Fetch error:', error);
        return <div>Error: Fetch failed</div>;
      }
    }

    case 'clear':
    case 'c': {
      return null; 
    }

    default: {
      return <div>Unknown command: {command}</div>;
    }
  }
}
