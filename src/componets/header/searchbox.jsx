import React from 'react';

function SearchBox() {
    return (
        <div className="search-box">
            <input 
                type="text" 
                placeholder="Search..." 
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

export default SearchBox;