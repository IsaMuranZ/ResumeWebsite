import React, { useState } from 'react';
import ContactButtons from './ContactButtons'; // Assuming this is your button component

//This component serves as the container for the button row and the text display rectangle.
// It uses React's useState hook to manage which text should be displayed based on which button
// is hovered over. It maps over a predefined array of button objects, creating a ButtonComponent
// for each and passing a handler function via the onMouseEnter prop to update the displayed text.
function ContactParentComponent() {
    // TODO: Consider changing these emojis to JPGs
    // TODO: Put full information and style it. Get rid of placeholders
    const buttonTexts = [
        { id: 1, text: '🗺️', displayText: 'Sarajevo' },
        { id: 2, text: '🦄', displayText: 'Phone' },
        { id: 3, text: '🐧', displayText: 'Email' },
        { id: 4, text: '🦑', displayText: 'Git' },
        { id: 5, text: '🌕', displayText: 'LinkedIn' },
    ];

    // Set initial state to the displayText of the first button.
    // If the displayText is empty or in the future will be fetched from an API, have a default 'Loading...'
    // Text
    const [displayText, setDisplayText] =
        useState(buttonTexts.length > 0 ? buttonTexts[0].displayText : 'Loading...');

    return (
        <div className='rounded shadow-lg bg-white my-2'>
            <div className="items-center justify-between flex flex-wrap p-2 rounded">
                {/* The 6 Lines below are what I've been struggling to understand
                but are very powerful. Mapping components to UI elements like
                this enables simple and effective design*/}
                {buttonTexts.map((button) => (
                    <ContactButtons
                        key={button.id}
                        text={button.text}
                        onMouseEnter={() => setDisplayText(button.displayText)}
                    />
                ))}
            </div>
            <div className="p-2 bottom-full">
                {displayText}
            </div>
        </div>
    );
}

export default ContactParentComponent;
