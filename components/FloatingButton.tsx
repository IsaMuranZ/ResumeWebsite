import React from 'react';

// TODO: Update className on button tag to make enhance UX
function FloatingButton({ symbol, text, onClick }) {
    return (
        <div
            className="rounded overflow-hidden shadow-lg bg-white mb-4 cursor-pointer"
            onClick={onClick} // Use the onClick prop passed from the parent
        >
            <div className="p-4 border-b border-gray-200 rounded-t">
                {symbol}
            </div>
        </div>
    );
}

// Export the component so it can be used in other parts of the app
export default FloatingButton;