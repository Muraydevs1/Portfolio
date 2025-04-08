import React from 'react';
import { Moon, Sun } from 'lucide-react';

function Darkmode({ dark, setDark }) {
    return (
        <button 
            onClick={() => setDark(prev => !prev)}
            className="absolute top-4 right-6 z-50 p-2 rounded-md border border-gray-500 bg-gray-200 dark:bg-gray-700 transition-all hover:scale-105"
            aria-label="Toggle Dark Mode"
        >
            {dark ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-gray-900" />}
        </button>
    );
}

export default Darkmode;

