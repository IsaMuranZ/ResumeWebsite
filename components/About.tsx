// Import React (necessary for JSX)
import React from 'react';

// Define the component as a function
function About() {
    // Return JSX code that represents part of the UI
    return (
        <section className="p-4">
            <h2 className="text-xl font-bold mb-2">About Me</h2>
            <p>
                I'm a full-stack developer with a passion for building scalable web applications...
            </p>
        </section>
    );
}

// Export the component so it can be used in other parts of the app
export default About;
