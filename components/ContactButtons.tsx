// Import React (necessary for JSX)
import React from 'react';

// Define the component as a function
const ContactButtons = ({ symbol, hoverText }) => {
// State to manage hover visibility
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        {/* The button symbol */}
        <button className="p-2 border rounded">
            {symbol}
        </button>
        {/* The text that appears on hover */}
        {isHovered && (
            <div className="absolute bottom-full mb-2 p-2 bg-white shadow-lg border rounded">
                {hoverText}
            </div>
        )}
    </div>
  );
};

// Export the component so it can be used in other parts of the app
export default ContactButtons;