import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const SOUND_VOLUME = 0.2;
  const [currentSoundName, setCurrentSoundName] = useState("");

  useEffect(() => {
    function onKeyUp(e) {
      const upperCaseKey = e.key.toUpperCase();
      const sound = document.getElementById(upperCaseKey);
      playSound(null, sound);
    }
    document.addEventListener("keyup", onKeyUp);
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
            <div className="pad-buttons-container col-md-8">
              <div className="row">
                <div
                  className="drum-pad col-md"
                  id="Heater 1"
                  onClick={playSound}
                >
                  <audio
                    id="Q"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                  ></audio>
                  Q
                </div>
                <div
                  className="drum-pad col-md"
                  id="Heater 2"
                  onClick={playSound}
                >
                  <audio
                    id="W"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                  ></audio>
                  W
                </div>
                <div
                  className="drum-pad col-md"
                  id="Heater 3"
                  onClick={playSound}
                >
                  <audio
                    id="E"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                  ></audio>
                  E
                </div>
              </div>

              <div className="row">
                <div
                  className="drum-pad col-md"
                  id="Heater 4"
                  onClick={playSound}
                >
                  <audio
                    id="A"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                  ></audio>
                  A
                </div>
                <div className="drum-pad col-md" id="Clap" onClick={playSound}>
                  <audio
                    id="S"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                  ></audio>
                  S
                </div>
                <div
                  className="drum-pad col-md"
                  id="Open-HH"
                  onClick={playSound}
                >
                  <audio
                    id="D"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                  ></audio>
                  D
                </div>
              </div>

              <div className="row">
                <div
                  className="drum-pad col-md"
                  id="Kick-n'-Hat"
                  onClick={playSound}
                >
                  <audio
                    id="Z"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                  ></audio>
                  Z
                </div>
                <div className="drum-pad col-md" id="Kick" onClick={playSound}>
                  <audio
                    id="X"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                  ></audio>
                  X
                </div>
                <div
                  className="drum-pad col-md"
                  id="Closed-HH"
                  onClick={playSound}
                >
                  <audio
                    id="C"
                    className="clip"
                    src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                  ></audio>
                  C
                </div>
              </div>
            </div>
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
