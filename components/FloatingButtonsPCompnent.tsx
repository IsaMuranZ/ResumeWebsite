// Import React (necessary for JSX)
import React, {useState} from 'react';
import {text} from "node:stream/consumers";
import ContactButtons from "./ContactButtons";
import FloatingButton from "./FloatingButton";

// Define the component as a function
const FloatingButtonsPComponent = () => {
    const [activeContent, setContent] = useState('');

    const button = [
        {id:1, symbol: "🌟", text: "About me"},
        {id:2, symbol: "💼", text: "Experience"},
        {id:3, symbol: "🔧", text: "Projects"},
        {id:4, symbol: "🥼", text: "This Website"},
    ]
    // Return JSX code that represents part of the UI
    return (
        <div
            className="w-full overflow-hidden mb-4"
        >
            {/* Box header */}
            <div className="justify-between flex p-4 border-b border-gray-200 rounded-t">
                {button.map((button) => (
                    <FloatingButton
                        key={button.id}
                        symbol={button.symbol}
                        text={button.text}
                        onClick={() => setContent(button.text)}
                    />
                ))}
            </div>
            <div className="relative p-4">
                {activeContent}
            </div>
        </div>
    );
}


// Export the component so it can be used in other parts of the app
export default FloatingButtonsPComponent;