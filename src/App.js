import React, { useState, useEffect } from "react";
import "./App.css";

const drumPads = [
  { key: "Q", id: "Heater-1", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { key: "W", id: "Heater-2", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { key: "E", id: "Heater-3", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  { key: "A", id: "Heater-4", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  { key: "S", id: "Clap", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { key: "D", id: "Open-HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { key: "Z", id: "Kick-n'-Hat", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  { key: "X", id: "Kick", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { key: "C", id: "Closed-HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
];

const DrumPad = ({ pad, playSound }) => {
  return (
    <div
      className="drum-pad"
      id={pad.id}
      onClick={() => playSound(pad.key)}
    >
      {pad.key}
      <audio className="clip" id={pad.key} src={pad.src}></audio>
    </div>
  );
};

const App = () => {
  const [display, setDisplay] = useState("Press a key");

  const playSound = (key) => {
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(error => console.log("Audio play error:", error));
      setDisplay(drumPads.find(pad => pad.key === key)?.id || "");
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      if (drumPads.some(pad => pad.key === key)) {
        playSound(key);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="pad-container">
        {drumPads.map(pad => (
          <DrumPad key={pad.key} pad={pad} playSound={playSound} />
        ))}
      </div>
    </div>
  );
};

export default App;