import { useEffect, useState } from "react";
import DrumPad from "./components/DrumPad";

import "./App.css";

function App() {
  const SOUND_VOLUME = 0.2;
  const [currentSoundName, setCurrentSoundName] = useState("...");

  const [qKeyPressed, setQKeyPressed] = useState(false);
  const [wKeyPressed, setWKeyPressed] = useState(false);
  const [eKeyPressed, setEKeyPressed] = useState(false);

  const [aKeyPressed, setAKeyPressed] = useState(false);
  const [sKeyPressed, setSKeyPressed] = useState(false);
  const [dKeyPressed, setDKeyPressed] = useState(false);

  const [zKeyPressed, setZKeyPressed] = useState(false);
  const [xKeyPressed, setXKeyPressed] = useState(false);
  const [cKeyPressed, setCKeyPressed] = useState(false);

  const keyFunctionDict = {
    Q: setQKeyPressed,
    W: setWKeyPressed,
    E: setEKeyPressed,

    A: setAKeyPressed,
    S: setSKeyPressed,
    D: setDKeyPressed,

    Z: setZKeyPressed,
    X: setXKeyPressed,
    C: setCKeyPressed,
  };

  useEffect(() => {
    function onKeyUp(e) {
      const upperCaseKey = e.key.toUpperCase();
      keyFunctionDict[upperCaseKey](false);

      const sound = document.getElementById(upperCaseKey);
      playSound(null, sound);
    }

    function onKeyDown(e) {
      const upperCaseKey = e.key.toUpperCase();
      keyFunctionDict[upperCaseKey](true);
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
      <div className="heading">
        <h1>Drum Machine</h1>
      </div>

      <div className="container">
        <div id="drum-machine" className="bg-light rounded-4">
          <div className="row">
            <DrumPad
              playSound={playSound}
              qKeyPressed={qKeyPressed}
              wKeyPressed={wKeyPressed}
              eKeyPressed={eKeyPressed}
              aKeyPressed={aKeyPressed}
              sKeyPressed={sKeyPressed}
              dKeyPressed={dKeyPressed}
              zKeyPressed={zKeyPressed}
              xKeyPressed={xKeyPressed}
              cKeyPressed={cKeyPressed}
            />
            <div id="display" className="display-container col-md-4">
              <div className="h3 text-light rounded-5 current-sample-heading">
                Current Sample:
              </div>
              <div className="h5 text-light rounded-5 current-sample-name">
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
