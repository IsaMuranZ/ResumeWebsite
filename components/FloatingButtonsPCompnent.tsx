// Import React (necessary for JSX)
import React, {useState} from 'react';
import {text} from "node:stream/consumers";
import ContactButtons from "./ContactButtons";
import FloatingButton from "./FloatingButton";

// Define the component as a function
const FloatingButtonsPComponent = () => {
    const [activeContent, setContent] = useState('');

    const button = [
        {id:1, symbol: "🌟", text: "I am a computer science graduate from the University of California - Santa Cruz. I am currently looking for professional work so I can become a better developer. I am a professional web developer and also a linux sys admin and general technology hobbyist "},
        {id:2, symbol: "💼", text: "Junior Software Developer -- ECHO Technology Solutions  Managed a Salesforce database with over 100 customers."},
        {id:3, symbol: "🔧", text: "Python, C++, React, Typescript, Kotlin, postgreSQL, Jira, JetbrainsIDE, " +
                "C, Git, Linux, C#, .NET, LaTeX"},
        {id:4, symbol: "🏛️", text: "Finance Full Stack App -- Co-led a team of 6 devs and made a full-stack application. I worked on both the front-end and back-end. \n Open Source GIS -- My current passion project which is a full stack application focused on the geography of former Yugoslavian countries and using the OpenStreetMaps technology suite."},
        {id:5, symbol: "🥼", text: "This website was made with React and Typescript as a personal project. I think using React and Typescript is a bit overkill for a website such as this (my main website that I use is plain HTML and CSS) but it was a fun project nonetheless."},
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