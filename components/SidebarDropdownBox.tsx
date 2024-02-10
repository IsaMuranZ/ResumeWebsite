// Import React (necessary for JSX)
import React from 'react';

// Define the component as a function
const SidebarDropdownBox = ({ boxText, boxContent }) => {
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
                // Whenever the rectangle box is clicked, toggle false to true or vice versa
                // This "collapses" or "expands" the boxContent
                onClick={() => setIsClicked(!isClicked)}
            >
                {boxText}
            </div>
            {/* Dropdown content */}
            {isClicked && (
                <div className="p-4">
                    {boxContent}
                </div>
            )}
        </div>
    );
}


// Export the component so it can be used in other parts of the app
export default SidebarDropdownBox;