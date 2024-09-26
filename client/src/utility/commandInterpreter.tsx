/*
TODO:
  Add buy option command: relies on learning mutations through keystone
  Add help command: -h --help displays a list of all commands.
*/

import React from 'react';
import OptionDisplay from '@/components/OptionDisplay';
import optionCommands from '@/utility/commands/OptionCommands';
import utilityCommands from '@/utility/commands/UtilityCommands';
import authCommands from '@/utility/commands/AuthCommands';
import Warning from '@/components/Warning';

// The utility function that interprets commands
export async function interpretCommand(command: string): Promise<React.ReactNode | null> {
  const trimmedCommand = command.trim().toLowerCase();
  const commandArray = trimmedCommand.split(" ");

  // TODO: defaults on nested switch statements do not run on outside cases

  switch (commandArray[0]) {
    case 'get': {
      switch (commandArray[1]) {
        case 'options': {
          return await optionCommands.getOptions();
        }
        default: {
          <div>
            <Warning message={`Unknown Command: ${trimmedCommand}`}></Warning>
            {utilityCommands.help()}
          </div>
        }
      }
      break;
    }
    case 'add': {
      switch (commandArray[1]) {
        case 'option': {

        }
        default: {
          <div>
            <Warning message={`Unknown Command: ${trimmedCommand}`}></Warning>
            {utilityCommands.help()}
          </div>
        }
      }
      break;
    }
    case 'login': {
      authCommands.login();
      return <Warning message={`Redirecting...`}></Warning>;
    }
    case 'logout': {
      authCommands.logout();
      return <Warning message={`Loggin out...`}></Warning>;
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
      return (
        <div>
            <Warning message={`Unknown Command: ${trimmedCommand}`}></Warning>
            {utilityCommands.help()}
        </div>
      );
    }
  }
}
