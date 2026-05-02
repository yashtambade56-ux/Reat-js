.app-wrapper {
  width: 100%;
  min-height: 100vh;
  background:
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/src/assets/image.png') no-repeat center center/cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  color: white;
  font-family: 'Arial Black', sans-serif;
}

.header-section {
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  min-height: 80px;
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  justify-content: center;
}

.title-box {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  padding: 10px 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.title-box h1 {
  margin-bottom: 0;
  background: none;
  backdrop-filter: none;
  border: none;
  padding: 0;
  font-size: 2.2rem;
  letter-spacing: 2px;
}

.search-box {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  padding: 10px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-toggle {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #facc15;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.search-toggle:hover {
  background: #facc15;
  color: #000;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 0 20px rgba(250, 204, 21, 0.5);
}
.search-container {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);
  padding: 10px 25px;
  border-radius: 50px;
  border: 1px solid #facc15;
  width: 100%;
  max-width: 600px;
  animation: expandSearch 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 30px rgba(250, 204, 21, 0.1);
}

@keyframes expandSearch {
  from { opacity: 0; transform: scale(0.95); width: 400px; }
  to { opacity: 1; transform: scale(1); width: 100%; }
}

.search-icon-inner {
  opacity: 0.7;
}

.search-input {
  background: none;
  border: none;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  width: 100%;
  outline: none;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.close-search {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s;
}

.close-search:hover {
  color: #facc15;
}

.start-searching {
  grid-column: 1 / -1;
  text-align: center;
  padding: 80px 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  animation: fadeIn 0.8s ease;
}

.search-pulse {
  width: 80px;
  height: 80px;
  background: rgba(250, 204, 21, 0.2);
  border-radius: 50%;
  position: relative;
  margin-bottom: 20px;
}

.search-pulse::before {
  content: '🔍';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  z-index: 2;
}

.search-pulse::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #facc15;
  border-radius: 50%;
  animation: pulseSearch 2s infinite;
}

@keyframes pulseSearch {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.8); opacity: 0; }
}

.start-searching h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  background: linear-gradient(to right, #fff, #facc15);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.start-searching p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.4);
  max-width: 400px;
}

.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 60px 20px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 30px;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  margin-top: 40px;
  backdrop-filter: blur(10px);
}

.no-results-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  filter: grayscale(1);
  opacity: 0.5;
}

.no-results h3 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.no-results p {
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 25px;
}

.reset-search {
  background: #facc15;
  color: #000;
  border: none;
  padding: 10px 25px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.reset-search:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(250, 204, 21, 0.4);
}

.definition-content {
  max-height: 180px;
  overflow-y: auto;
  padding-right: 5px;
}

.definition-content::-webkit-scrollbar {
  width: 4px;
}

.definition-content::-webkit-scrollbar-thumb {
  background: rgba(250, 204, 21, 0.3);
  border-radius: 10px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1300px;
  width: 100%;
}

.card-container {
  width: 280px;
  height: 380px;
  perspective: 1000px;
  margin: auto;
  transition: transform 0.3s ease;
  
  /* Entry Animation */
  opacity: 0;
  transform: translateY(30px);
  filter: blur(10px);
  animation: cardFadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes cardFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.card-container:hover {
  transform: translateY(-5px);
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  cursor: pointer;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 25px;
  background: var(--glass-black, rgba(0, 0, 0, 0.7));
  backdrop-filter: blur(25px) saturate(180%);
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.1));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  text-align: center;
}

.card-front h2 {
  font-size: 32px;
  text-transform: uppercase;
  color: var(--accent-gold, #ffcc00);
}

.card-back {
  transform: rotateY(180deg);
}

.card-back p {
  font-family: 'Segoe UI', sans-serif;
  font-size: 16px;
  color: #efefef;
}

.back-label {
  font-size: 11px;
  color: var(--accent-gold, #ffcc00);
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.tap-hint {
  position: absolute;
  bottom: 25px;
  font-size: 10px;
  opacity: 0.6;
}
