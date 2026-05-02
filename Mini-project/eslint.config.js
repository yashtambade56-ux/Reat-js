import React, { useState, useMemo } from 'react';
import './FlashCard.css';
import termsData from '../../data/terms.json';

const SingleFlashCard = ({ term, definition, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card-container" style={{ animationDelay: `${index * 0.05}s` }}>
      <div className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
        <div className="card-face card-front">
          <h2>{term}</h2>
          <div className="tap-hint">Tap to define</div>
        </div>
        <div className="card-face card-back">
          <div className="back-label">Definition</div>
          <div className="definition-content">
            <p>{definition}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FlashCard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const filteredTerms = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return query 
      ? termsData.filter(item => item.term.toLowerCase().startsWith(query))
      : termsData;
  }, [searchQuery]);

  return (
    <div className="app-wrapper">
      <header className="header-section">
        {isSearchActive ? (
          <div className="search-container">
            <svg className="search-icon-inner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              className="search-input"
              placeholder="Search terms or definitions..."
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="close-search" onClick={() => {
              setIsSearchActive(false);
              setSearchQuery('');
            }}>
              ✕
            </button>
          </div>
        ) : (
          <div className="header-controls">
            <div className="title-box">
              <h1>Dev Terms Collection</h1>
            </div>
            <div className="search-box">
              <button className="search-toggle" onClick={() => setIsSearchActive(true)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>
        )}
      </header>

      <div className="card-grid" key={searchQuery}>
        {filteredTerms.length > 0 ? (
          filteredTerms.map((item, index) => (
            <SingleFlashCard 
              key={`${searchQuery}-${item.term}`} 
              term={item.term} 
              definition={item.definition} 
              index={index} 
            />
          ))
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No matches found</h3>
            <p>Try searching for a different letter or keyword</p>
            <button className="reset-search" onClick={() => setSearchQuery('')}>Clear Search</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashCard;