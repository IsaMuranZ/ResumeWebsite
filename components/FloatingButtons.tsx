// Import React (necessary for JSX)
import React from 'react';

// Define the component as a function
const FloatingButtons = ({ symbol, bodyContent }) => {
    const [isClicked, setIsClicked] = React.useState(false);
    // Return JSX code that represents part of the UI
    return (
        <div
            className="max-w-sm w-full rounded overflow-hidden shadow-lg bg-white mb-4"
            // Add cursor pointer for better UX
            style={{ cursor: 'pointer' }}
        >
            {/* Box header */}
            <div
                className="p-4 border-b border-gray-200 rounded-t"
                // Whenever the symbol is clicked, toggle false to true or vice versa
                // This "collapses" or "expands" the bodyContent
                onClick={() => setIsClicked(!isClicked)}
            >
                {symbol}
            </div>
            {/* Dropdown content */}
            {isClicked && (
                <div className="p-4">
                    {bodyContent}
                </div>
            )}
        </div>
    );
}


// Export the component so it can be used in other parts of the app
export default FloatingButtons;