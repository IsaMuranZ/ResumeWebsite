import React, {Fragment, useEffect, useState} from "react";
import {Transition} from "@headlessui/react";
export default function TestTransitionComponent() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShow((prevShow) => !prevShow); // Toggle the show state
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="p-4">
            <Transition
                as={Fragment}
                show={show}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="p-4 bg-red-500">
                    Test content
                </div>
            </Transition>
        </div>
    );
}