import React from 'react';

// TODO: Update className on button tag to make enhance UX
function ContactButtons({ text, onMouseEnter }) {
    return (
        <button onMouseEnter={onMouseEnter}>
            {text}
        </button>
    );
}

// Export the component so it can be used in other parts of the app
export default ContactButtons;