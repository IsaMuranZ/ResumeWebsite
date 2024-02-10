// Import the React library and the About component
import React, {useState} from 'react';
import '../styles/globals.css';
import About from '../components/About';
import NameAndPic from "../components/nameAndPic";
import ContactButtons from '../components/ContactButtons';
import SidebarDropdownBox from '../components/SidebarDropdownBox';
import FloatingButtons from '../components/FloatingButtons';

// Define the main page component
function HomePage() {
    // State to keep track of the text to display based on hover or default
    const [displayText, setDisplayText] = useState("Default Text");

    const buttonsData = [
        { symbol: "✈️", hoverText: "Travel" },
        { symbol: "🍽", hoverText: "Dine" },
        { symbol: "🎓", hoverText: "Learn" },
        { symbol: "🎨", hoverText: "Art" },
        { symbol: "🏞", hoverText: "Nature" },
    ];

    return (
        <div className="font-serif min-h-screen flex flex-col">
            <header className="bg-sky-100 p-0"> {/* Header content here */} </header>

            {/* Flex container for sidebar + main content */}
            <div className="flex flex-1">
                {/* Sidebar (left third) */}
                <div className="w-1/3 bg-sky-100 p-2 flex flex-col">
                    <NameAndPic/>
                    <div className="flex flex-wrap justify-between">
                        {buttonsData.map((button, index) => (
                            <ContactButtons
                                key={index}
                                symbol={button.symbol}
                                hoverText={button.hoverText}
                                onMouseEnter={() => setDisplayText(button.hoverText)}
                            />
                        ))}
                    </div>
                    <SidebarDropdownBox boxText="Box 1" boxContent="Content for Box 1"/>
                    <SidebarDropdownBox boxText="Box 2" boxContent="Content for Box 2"/>
                    <SidebarDropdownBox boxText="Box 3" boxContent="Content for Box 3"/>
                </div>

                {/* Main content area (right two-thirds) */}
                <div className="w-2/3 p-4">
                    <About/>
                    <div className="flex justify-around mt-4">
                        <FloatingButtons symbol="👻" bodyContent="About Me"/>
                        <FloatingButtons symbol="💩" bodyContent="Experience"/>
                        <FloatingButtons symbol="💥" bodyContent="Projects"/>
                        <FloatingButtons symbol="🍫" bodyContent="This Website"/>
                    </div>
                </div>
            </div>
            {/* Always visible text box below the buttons */}
            <div className="p-2 bg-white shadow-lg border rounded">
                {displayText}
            </div>
            <footer className="bg-gray-200 p-4"> {/* Footer content here */} </footer>
        </div>
    );
}

// Export the HomePage component
export default HomePage;
