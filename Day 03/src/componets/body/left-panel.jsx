import React from 'react';
import './css/left-panel.css'; // Importing from the location you specified

const SidebarLibrary = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div className="library-label">
          <span>Your Library</span>
        </div>
        <button className="add-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </button>
      </div>

      <div className="sidebar-content">
        <div className="card">
          <h3 className="card-title">Create your first playlist</h3>
          <p className="card-subtitle">It's easy, we'll help you</p>
          <button className="pill-button">Create playlist</button>
        </div>

        <div className="card">
          <h3 className="card-title">Let's find some podcasts to follow</h3>
          <p className="card-subtitle muted">We'll keep you updated on new episodes</p>
          <button className="pill-button">Browse podcasts</button>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="footer-links">
          <a href="#">Legal</a>
          <a href="#">Privacy Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
          <a href="#">About Ads</a>
          <a href="#">Accessibility</a>
        </div>
        
        <button className="lang-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          English
        </button>
      </div>
    </div>
  );
};

export default SidebarLibrary;