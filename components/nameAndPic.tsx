// Import React (necessary for JSX)
import React from 'react';

// Define the component as a function
function NameAndPic() {
    // Return JSX code that represents part of the UI
    return (
        <div className="flex items-center max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
            <img className="w-16 h-16 mr-4 rounded-full" src="/me.jpg" alt="Me :)"/>
            {/*<div className="px-6 py-4">*/}
            <div className="max-w-sm">
                <h2 className="text-justify font-bold text-xl">Isa Muran</h2>
                <h2 className="text-sm">Software Engineer</h2>
            </div>
            {/*} </div>*/}
        </div>
    );
}

// Export the component, so it can be used in other parts of the app
export default NameAndPic;
