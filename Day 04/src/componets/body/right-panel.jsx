import React from 'react';
import './css/right-panel.css';
import spotifyData from "../../deta/img.json";

const RightPanel = () => {
  const SpotifySection = ({ title, data, isArtist }) => (
    <div className="section-group">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <span className="show-all">Show all</span>
      </div>
      <div className="spotify-grid">
        {data && data.map((item, idx) => (
          <div key={idx} className="spotify-card">
            <div className="image-container">
              <img 
                src={item.src} 
                className={`card-image ${isArtist ? 'artist-img' : ''}`} 
                alt={item.name} 
              />
              <button className="play-button">
                <div className="play-icon" />
              </button>
            </div>
            <h4 className="card-title">{item.name}</h4>
            <p className="card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="right-panel-container">
      <div className="main-section">
        <SpotifySection title="Trending Songs" data={spotifyData.trending} />
        
        <SpotifySection title="Popular Artists" data={spotifyData.artists} isArtist={true} />
        
        <SpotifySection title="Popular Albums" data={spotifyData.albums} />

        <SpotifySection title="Popular Radio" data={spotifyData.radio} />

        <footer className="footer-container">
          <div className="footer-bottom">
            <div style={{display: 'flex', gap: '15px'}}>
              <span>Legal</span>
              <span>Privacy Center</span>
              <span>Privacy Policy</span>
              <span>Cookies</span>
              <span>About Ads</span>
            </div>
            <span>© 2026 Spotify AB</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RightPanel;