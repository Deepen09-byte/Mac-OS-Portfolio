import React from "react";
import MacWindow from "./MacWindow";
import TerminalModule from "react-console-emulator";
const Terminal = TerminalModule.default ?? TerminalModule;
import "./Cli.scss";

const Cli = ({ windowName, windowState, setwindowState }) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} setwindowState={setwindowState}>
      <div className="cli-window">
        <Terminal
          commands={{
            // help: {
            //   description: 'Show available commands.',
            //   usage: 'help',
            //   fn: () => [
            //     'Available commands:',
            //     '  help     - Show available commands',
            //     '  about    - Learn about this portfolio',
            //     '  projects - List featured projects',
            //     '  skills   - Show skills and tech stack',
            //     '  contact  - Show contact info',
            //     '  clear    - Clear the terminal screen',
            //   ].join('\n'),
            // },
            about: {
              description: 'Display portfolio introduction.',
              usage: 'about',
              fn: () => 'This portfolio showcases a React-based MacOS UI with custom terminal and interactive components.',
            },
            projects: {
              description: 'List sample projects.',
              usage: 'projects',
              fn: () => [
                'Featured projects:',
                '  - MacOS portfolio interface',
                '  - React terminal emulator',
                '  - Interactive app components',
              ].join('\n'),
            },
            skills: {
              description: 'Display skills and technologies.',
              usage: 'skills',
              fn: () => [
                'Skills:',
                '  - React',
                '  - CSS / SCSS',
                '  - JavaScript',
                '  - UI/UX design',
              ].join('\n'),
            },
            contact: {
              description: 'Show contact information.',
              usage: 'contact',
              fn: () => 'Contact: deepenChaudhari@example.com',
            },
            // clear: {
            //   description: 'Clear the terminal screen.',
            //   usage: 'clear',
            //   fn: () => {
            //     window.location.reload();
            //     return '';
            //   },
            // },
          }}
          welcomeMessage={
            'Welcome to the React terminal!\nType help to see all available commands.\n\nAvailable commands:\n' +
            '  help     about    projects    skills    contact    clear'
          }
          promptLabel={"deepenChaudhari:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
