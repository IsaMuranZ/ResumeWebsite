// Import React (necessary for JSX)
import React, {Fragment, useEffect, useState} from 'react';
import { FaChevronDown } from 'react-icons/fa';

// Define the component as a function
const SidebarDropdownBox = ({ boxText, boxContent }) => {
    const [isClicked, setIsClicked] = React.useState(false);
    // Toggle dropdown content visibility
    const toggleDropdown = () => setIsClicked(!isClicked);

    return (
        <div className="w-full rounded overflow-hidden shadow-lg bg-white mb-4 cursor-pointer">
            <div
                tabIndex={0}
                onClick={toggleDropdown}
                className="flex justify-between items-center p-4 border-b border-gray-200 rounded-t focus:outline-none focus:ring-2 ring-blue-200"
            >
                {boxText}
                {/*Chevron icon for a better user experience. Indicates the above element is a dropdown*/}
                <FaChevronDown className={`transition-transform duration-300 ${isClicked ? 'transform rotate-180' : ''}`} />
            </div>
            {/*The element below is the dropdown text that appears after a user clicks on the element above*/}
            <div
                className={`overflow-hidden transition-all duration-500 ${isClicked ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="p-4">
                    {boxContent}
                </div>
            </div>
        </div>
    );
}

// Export the component so it can be used in other parts of the app
export default SidebarDropdownBox;