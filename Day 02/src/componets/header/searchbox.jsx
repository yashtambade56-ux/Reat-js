import React from 'react';

function SearchBox() {
    return (
        <div className="search-box flex items-center justify-center">
            <input 
                type="text" 
                placeholder="Search..." 
                className="border border-gray-600 bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
        </div>
    );
}

export default SearchBox;