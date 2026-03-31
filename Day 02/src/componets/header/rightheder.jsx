import React from 'react';

function RightHeader() {
    return (
        <div className="right-header flex items-center space-x-4 p-4">
            <button className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Sign Up</button>
            <button className="text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Log In</button>
        </div>
    );
}

export default RightHeader;