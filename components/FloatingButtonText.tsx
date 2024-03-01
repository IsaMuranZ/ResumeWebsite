import {useEffect, useState} from "react";
//Floating Button Text Box component, is rendered when the user clicks on floating buttons
// has animation

const FloatingButtonText = ({text}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        // Step 1: Fade out current text
        if (text !== displayedText) {
            setOpacity(0); // Trigger fade out
            setTimeout(() => {
                // Step 2: Update text after fade-out completes
                setDisplayedText(text);
                setOpacity(100); // Start fade in after text update
            }, 500); // Match this timeout to your fade-out duration
        }
    }, [text, displayedText]);

    // TODO: Animate the text fade in to be in a "page turning" style. Look into Framer Motion or other js lib
    return (
        <div className={`transition-opacity duration-500 ${opacity === 100 ? 'opacity-100' : 'opacity-0'}`}>
            {displayedText}
        </div>
    );
}

export default FloatingButtonText;