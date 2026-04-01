import React from 'react';
import './css/right-panel.css';

const RightPanel = () => {
  const SpotifySection = ({ title, data, isArtist, isTempArtist }) => (
    <div className="section-group">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <span className="show-all">Show all</span>
      </div>
      <div className="spotify-grid">
        {data.map((item, idx) => (
          <div key={idx} className="spotify-card">
            <div className="image-container">
              {isTempArtist ? (
                <div className="temp-placeholder" />
              ) : (
                <>
                  <div className={`card-image ${isArtist ? 'artist-img' : ''}`} />
                  <button className="play-button">
                    <div className="play-icon" />
                  </button>
                </>
              )}
            </div>
            <h4 className="card-title">{item.name}</h4>
            <p className="card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const trending = [
    { name: "Global Top 50", desc: "Daily update of the most played tracks." },
    { name: "Viral Hits", desc: "The songs everyone is talking about." },
    { name: "Today's Top Hits", desc: "The hottest 50 tracks." },
    { name: "RapCaviar", desc: "New music from top artists." },
    { name: "All Out 2010s", desc: "The biggest songs of the 2010s." }
  ];

  const popularArtists = [
    { name: "Arijit Singh", desc: "Artist" },
    { name: "Pritam", desc: "Artist" },
    { name: "A.R. Rahman", desc: "Artist" },
    { name: "Anirudh Ravichander", desc: "Artist" },
    { name: "Vishal Mishra", desc: "Artist" }
  ];

  return (
    <div className="right-panel-container">
      <div className="main-section">
        <SpotifySection title="Trending Songs" data={trending} />
        
        <SpotifySection title="Popular Artists" data={popularArtists} isTempArtist={true} />
        
        <SpotifySection title="Popular Albums" data={[
          { name: "Animal", desc: "Pritam, JAM8" },
          { name: "Still Rollin", desc: "Shubh" },
          { name: "Moosetape", desc: "Sidhu Moose Wala" },
          { name: "Ghost", desc: "Diljit Dosanjh" },
          { name: "Making Memories", desc: "Karan Aujla" }
        ]} />

        <SpotifySection title="Popular Radio" data={[
          { name: "Hindi Mix", desc: "Arijit Singh, Neha Kakkar and more" },
          { name: "Punjabi Mix", desc: "Shubh, Sidhu Moose Wala" },
          { name: "Arjit Singh Radio", desc: "By Spotify" },
          { name: "90s Love", desc: "Classic Bollywood hits" },
          { name: "Lofi Hip Hop", desc: "Beats to relax/study to" }
        ]} />

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