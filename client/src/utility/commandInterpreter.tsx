/*
TODO:
  Add buy option command: relies on learning mutations through keystone
  Add help command: -h --help displays a list of all commands.
*/

import React from 'react';
import OptionDisplay from '@/components/OptionDisplay';
import optionCommands from '@/utility/commands/OptionCommands';
import utilityCommands from '@/utility/commands/UtilityCommands';
import Warning from '@/components/Warning';

// The utility function that interprets commands
export async function interpretCommand(command: string): Promise<React.ReactNode | null> {
  const trimmedCommand = command.trim().toLowerCase();
  const commandArray = trimmedCommand.split(" ");

  switch (commandArray[0]) {
    case 'get': {
      switch (commandArray[1]) {
        case 'options': {
          const options = await optionCommands.getUserOptions(["microsoft", "google", "amazon"]);
          return <OptionDisplay options={options} />// Replace with options based on user options later
        }
        default: {
          return <Warning message={`Unknown Command: ${trimmedCommand}`}></Warning>;
        }
      }
    }
    case 'add': {
      switch (commandArray[1]) {
        case 'option': {

        }
        default: {
          return <Warning message={`Unknown Command: ${trimmedCommand}`}></Warning>;
        }
      }
    }
    case 'clear':
    case 'c': {
      return utilityCommands.clear();
    }
    case 'help':
    case '--help':
    case '-h': {
      return utilityCommands.help();
    }
    case 'dog': {
      return utilityCommands.dog();
    }
    default: {
      return <Warning message={`Unknown Command: ${trimmedCommand}`}></Warning>;
    }
  }
}
