// Import React (necessary for JSX)
import React, {Fragment, useEffect, useState} from 'react';
import { FaChevronDown } from 'react-icons/fa';
import {Transition} from "@headlessui/react";

// Define the component as a function
const SidebarDropdownBox = ({ boxText, boxContent }) => {
    const [isClicked, setIsClicked] = React.useState(false);
    // Return JSX code that represents part of the UI
    return (
        <div
            tabIndex={0}
            className="focus:ring-2 ring-blue-200 max-w-sm w-full rounded overflow-hidden shadow-lg bg-white mb-4"
            // Add cursor pointer for better UX
            style={{ cursor: 'pointer' }}
        >
            {/* Box header */}
            <div
                className="flex justify-between p-4 border-b border-gray-200 rounded-t"
                // Whenever the rectangle box is clicked, toggle false to true or vice versa
                // This "collapses" or "expands" the boxContent
                onClick={() => setIsClicked(!isClicked)}
            >
                {boxText}
                <FaChevronDown className={`transition-transform duration-500 ${isClicked ? 'rotate-180' : ''}`} />
            </div>
            {/* Dropdown content */}
            {isClicked && (
                <Transition
                    as={Fragment}
                    show={isClicked}
                    enter="transition ease-out duration-500"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-500"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                       <div className="p-4">
                           {boxContent}
                       </div>
                </Transition>
            )}
        </div>
    );
}
// {`transition-opacity duration-500 ease-in-out ${isClicked ? 'opacity-100' : 'opacity-0'} overflow-hidden`}

// Export the component so it can be used in other parts of the app
export default SidebarDropdownBox;