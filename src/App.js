import { useEffect, useState } from "react";
import DrumPad from "./components/DrumPad";

import "./App.css";

function App() {
  const SOUND_VOLUME = 0.2;
  const [currentSoundName, setCurrentSoundName] = useState("");

  useEffect(() => {
    function onKeyUp(e) {
      const upperCaseKey = e.key.toUpperCase();
      console.log(`Released key: ${upperCaseKey}`);

      const sound = document.getElementById(upperCaseKey);
      playSound(null, sound);
    }
    function onKeyDown(e) {
      const upperCaseKey = e.key.toUpperCase();
      console.log(`Pressed key: ${upperCaseKey}`);

      const drumPadButton = document.getElementById(upperCaseKey).parentNode;
      console.log(drumPadButton)
    }
    document.addEventListener("keyup", onKeyUp);
    document.addEventListener("keydown", onKeyDown);
  }, []);

  const getSoundName = (soundElement) => {
    const soundUrl = soundElement.src;
    const soundFileName = soundUrl.split("/")[5];
    let soundName = soundFileName.split(".")[0];

    switch (soundName) {
      case "Heater-1":
        return "Header 1";
      case "Heater-2":
        return "Header 2";
      case "Heater-3":
        return "Header 3";
      case "Heater-4":
        return "Header 4";
      case "Heater-6":
        return "Header 6";
      case "Dsc_Oh":
        return "Clap";
      case "Kick_n_Hat":
        return "Kick n' Hat";
      case "RP4_KICK_1":
        return "Kick";
      case "Cev_H2":
        return "Closed HH";
    }
  };

  const playSound = (e, sound = null) => {
    if (sound) {
      const soundName = getSoundName(sound);
      setCurrentSoundName(soundName);

      sound.volume = SOUND_VOLUME;
      sound.pause();
      sound.currentTime = 0;
      return sound.play();
    } else {
      const soundElement = e.target.children[0];
      const soundName = getSoundName(soundElement);
      setCurrentSoundName(soundName);

      const sound = soundElement;
      sound.volume = SOUND_VOLUME;
      sound.pause();
      sound.currentTime = 0;
      return sound.play();
    }
  };

  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <div className="container">
        <div id="drum-machine" className="bg-light">
          <div className="row">
            <DrumPad playSound={playSound} />
            <div id="display" className="display-container col-md-4">
              <div className="h3 bg-dark text-light rounded-1">
                Current Sample:
              </div>
              <div className="h5 bg-secondary  text-light rounded-1">
                {currentSoundName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
