import React from 'react';

function RightHeader() {
    return (
        <div className="right-header flex items-center space-x-6 text-white">
            <a href="#" className="text-sm hover:underline">Premium</a>
            <a href="#" className="text-sm hover:underline">Support</a>
            <a href="#" className="text-sm hover:underline">Download</a>
            <div className="border-l border-gray-600 h-6"></div>
            <a href="#" className="text-sm hover:underline flex items-center gap-2">
                ↓  Install App
            </a>
            <button className="text-white bg-transparent border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">Sign up</button>
            <button className="text-black bg-white px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition">Log in</button>
        </div>
    );
}

export default RightHeader;