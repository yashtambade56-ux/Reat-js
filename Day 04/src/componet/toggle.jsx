import { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="toggle-box">
      <button
        onClick={() => setIsOn(!isOn)}
        className={isOn ? "on" : "off"}
      >
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default Toggle;