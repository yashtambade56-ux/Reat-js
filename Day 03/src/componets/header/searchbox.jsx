import React from 'react';

function SearchBox() {
    return (
<div className="search-box">
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 2a8 8 0 105.293 14.293l4.207 4.207 1.414-1.414-4.207-4.207A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/>
  </svg>

  <input
    type="text"
    placeholder="Search..."
  />
</div>
    );
}

export default SearchBox;