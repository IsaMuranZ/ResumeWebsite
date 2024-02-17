import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import ContactButtons from './ContactButtons'; // Assuming this is your button component

//This component serves as the container for the button row and the text display rectangle.
// It uses React's useState hook to manage which text should be displayed based on which button
// is hovered over. It maps over a predefined array of button objects, creating a ButtonComponent
// for each and passing a handler function via the onMouseEnter prop to update the displayed text.
function ContactParentComponent() {
    // TODO: Consider changing these emojis to JPGs
    const buttonTexts = [
        { id: 1, text: '🗺️', displayText: 'Sarajevo' },
        { id: 2, text: '📞', displayText: '+1)669(241-9407' },
        { id: 3, text: '📫', displayText: 'imuran@ucsc.edu', url: 'bWFpbHRvOmltdXJhbkB1Y3NjLmVkdQ==' },
        // Email url above is base64 encoded to my email address
        { id: 4, text: '🦑', displayText: 'Github', url: 'https://github.com/isamuran'},
        { id: 5, text: <FaLinkedin/>, displayText: 'LinkedIn', url: 'https://linkedin.com/in/isamuran' },
    ];

    // Set initial state to the displayText of the first button.
    // If the displayText is empty or in the future will be fetched from an API, have a default 'Loading...'
    // Text
    const [activeButton, setActiveButton] = useState({
        displayText: buttonTexts.length > 0 ? buttonTexts[0].displayText : 'Loading...',
        id: buttonTexts.length > 0 ? buttonTexts[0].id : null,
        isLoading: buttonTexts.length === 0,
        url: buttonTexts.length > 0 ? buttonTexts[0].url || '' : '',
    });
    return (
        <div className='rounded shadow-lg bg-white my-2'>
            <div className="cursor-default items-center justify-between flex flex-wrap p-2 rounded">
                {buttonTexts.map((button) => (
                    <ContactButtons
                        key={button.id}
                        text={button.text}
                        onMouseEnter={() => setActiveButton({displayText: button.displayText, id: button.id, isLoading: false, url: button.url})}
                    />
                ))}
            </div>
            <div className="p-2 bottom-full">
                {/*Big Conditional statement that obfuscates my phone and email when that information shows
                in the DOM*/}
                {activeButton.isLoading ? (
                    'Loading...'
                ) : activeButton.id === 2 ? ( // For Phone and Email
                    <span style={{ unicodeBidi: 'bidi-override', direction: 'rtl' }}>
                    {activeButton.displayText.split('').reverse().join('')}
                </span>
                ) : activeButton.id === 3 ? (
                    <span className="block text-blue-600 underline cursor-pointer"
                          onClick={() => window.location.href = atob(activeButton.url)}>
                        {/*This is to make sure my email address is obfuscated and convert it from base64*/}
                        <span style={{unicodeBidi: 'bidi-override', direction: 'rtl'}}>
                            {activeButton.displayText.split('').reverse().join('')}
                        </span>
                    </span>
                ) : activeButton.url ? ( // For Git and LinkedIn
                    <a href={activeButton.url} className="block text-blue-600 underline cursor-pointer" target="_blank" rel="noopener noreferrer">
                        {activeButton.displayText}
                    </a>
                ) : (
                    activeButton.displayText
                )}
            </div>
        </div>
    );
}

export default ContactParentComponent;
