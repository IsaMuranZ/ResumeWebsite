// Import the React library and the About component
import React, {useState} from 'react';
import '../styles/globals.css';
import About from '../components/About';
import NameAndPic from "../components/nameAndPic";
import ContactButtons from '../components/ContactButtons';
import TestComponent from '../components/TestComponent'
import SidebarDropdownBox from '../components/SidebarDropdownBox';
import FloatingButtons from '../components/FloatingButtonsPCompnent';
import ContactParentComponent from "../components/ContactParentComponent";
import FloatingButtonsPCompnent from "../components/FloatingButtonsPCompnent";

// Define the main page component
function HomePage() {
    return (
        <div className="font-serif min-h-screen flex flex-col">
            <header className="bg-sky-100 p-0"> {/* Header content here */} </header>

            {/* Flex container for sidebar + main content */}
            <div className="flex flex-1">
                {/* Sidebar (left third) */}
                <div className="w-1/3 bg-sky-100 p-2 flex flex-col">
                    <NameAndPic/>
                    <ContactParentComponent/>
                    {/* TODO: add formatting to boxContent so it looks better or similar to my resume */}
                    <SidebarDropdownBox boxText="Education" boxContent="University of California - Santa Cruz 2020-2023"/>
                    <SidebarDropdownBox boxText="Languages" boxContent="Bosnian -- B2(Upper-Intermediate)
                    English -- C2(Very Proficient)"/>
                    <SidebarDropdownBox boxText="Hobbies/Clubs" boxContent="Slugbotics Team Co-lead -- UCSC Robotics Club"/>
                    <TestComponent/>
                </div>

                {/* Main content area (right two-thirds) */}
                <div className="w-2/3 p-4">
                    <div className="flex mt-4">
                        <FloatingButtonsPCompnent/>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export the HomePage component
export default HomePage;
