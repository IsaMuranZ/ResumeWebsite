// Import React (necessary for JSX)
import React, {useState} from 'react';
import {text} from "node:stream/consumers";
import ContactButtons from "./ContactButtons";
import FloatingButton from "./FloatingButton";
import FloatingButtonText from "./FloatingButtonText";

// Define the component as a function
const FloatingButtonsPComponent = () => {
    const [activeContent, setContent] = useState('');

    //This JSX element holds all the content for the active content component
    //This JSX content is mapped onto the floating button component when the buttons are clicked
    const contentmapping = {
        star: (
            <>
                <h1 className="text-3xl font-bold mb-1.5">About me</h1>
                <p>I am a computer science graduate from the University of California - Santa Cruz. I am currently looking for professional work so I can become a better developer. I am a full-stack web developer looking for a productive and challenging environment where I can use and improve my skillset. I have experience in multiple disciplines related to technology including network engineering, web development, and embedded development.</p>
            </>
        ),
        exp: (
            <>
                <h1 className="text-3xl font-bold mb-1.5">Experience</h1>
                <ul>
                    <li><strong>Junior Software Developer -- ECHO Technology Solutions</strong> Managed a Salesforce database with over 100 customers.</li>
                </ul>
            </>
        ),
        skills: (
            <>
                <h1 className="text-3xl font-bold mb-1.5">Skills</h1>
                <ul className="md:columns-2">
                    <li>React</li>
                    <li>Typescript</li>
                    <li>Python</li>
                    <li>C++</li>
                    <li>Kotlin</li>
                    <li>Next.js</li>
                    <li>C</li>
                    <li>Jira</li>
                    <li>postgreSQL</li>
                    <li>Git</li>
                    <li>Linux</li>
                    <li>C#</li>
                    <li>.NET</li>
                    <li>LaTeX</li>
                </ul>
            </>
        ),
        proj: (
            <>
                <h1 className="text-3xl font-bold mb-1.5">Projects</h1>
                <ul>
                    <li><strong className="font-semibold">Finance Full Stack App</strong> -- Co-led a team of 6 devs and made a full-stack application. I worked on both the front-end and back-end.</li>
                    <li><strong className="font-semibold">Open Source GIS</strong> -- My current passion project which is a full stack application focused on the geography of former Yugoslavian countries and using the OpenStreetMaps technology suite.</li>
                </ul>
            </>
        ),
        coat: (
            <>
                <h1 className="text-3xl font-bold mb-1.5"> About This Website</h1>
                <p>This website was made with React and Typescript as a personal project. I think using React and Typescript is a bit overkill for a website such as this (my main website that I use is plain HTML and CSS) but it was a fun project nonetheless.</p>
            </>
        )
    }

    const button = [
        {id:1, symbol: "🌟", contentKey: 'star' },
        {id:2, symbol: "💼", contentKey: 'exp'},
        {id:3, symbol: "🔧", contentKey: 'skills'},
        {id:4, symbol: "🏛️", contentKey: 'proj'},
        {id:5, symbol: "🥼", contentKey: 'coat'}
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
                        contentKey={button.contentKey}
                        onClick={() => setContent(contentmapping[button.contentKey])}
                    />
                ))}
            </div>
            <div className="relative p-4">
                <FloatingButtonText
                    text = {activeContent}
                />
            </div>
        </div>
    );
}


// Export the component so it can be used in other parts of the app
export default FloatingButtonsPComponent;