const DrumPadButton = (props) => {
  return (
    <div
      className={`drum-pad drum-pad-button button col-md`}
      id={props.sampleName}
      onClick={props.playSound}
    >
      <audio
        id={props.buttonLetter}
        className="clip"
        src={props.sampleUrl}
      ></audio>
      {props.buttonLetter}
    </div>
  );
};

const DrumPad = (props) => {
  return (
    <div className="pad-buttons-container col-md-8">
      <div className="row">
        <DrumPadButton
          sampleName="Heater 1"
          buttonLetter="Q"
          sampleUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          playSound={props.playSound}
          keyPressed={props.qKeyPressed}
        />
        <DrumPadButton
          sampleName="Heater 2"
          buttonLetter="W"
          sampleUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          playSound={props.playSound}
          keyPressed={props.wKeyPressed}
        />
        <DrumPadButton
          sampleName="Heater 3"
          buttonLetter="E"
          sampleUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          playSound={props.playSound}
          keyPressed={props.eKeyPressed}
        />
      </div>

      <div className="row">
        <DrumPadButton
          sampleName="Heater 4"
          buttonLetter="A"
          sampleUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          playSound={props.playSound}
          keyPressed={props.aKeyPressed}
        />
        <DrumPadButton
          sampleName="Heater-6"
          buttonLetter="S"
          sampleUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          playSound={props.playSound}
          keyPressed={props.sKeyPressed}
        />
        <DrumPadButton
          sampleName="Open-HH"
          buttonLetter="D"
          sampleUrl="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          playSound={props.playSound}
          keyPressed={props.dKeyPressed}
        />
      </div>

      <div className="row">
        <DrumPadButton
          sampleName="Kick-n'-Hat"
          buttonLetter="Z"
          sampleUrl="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          playSound={props.playSound}
          keyPressed={props.zKeyPressed}
        />
        <DrumPadButton
          sampleName="Kick"
          buttonLetter="X"
          sampleUrl="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          playSound={props.playSound}
          keyPressed={props.xKeyPressed}
        />
        <DrumPadButton
          sampleName="Closed-HH"
          buttonLetter="C"
          sampleUrl="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          playSound={props.playSound}
          keyPressed={props.cKeyPressed}
        />
      </div>
    </div>
  );
};

function App() {
  const SOUND_VOLUME = 0.2;
  const [currentSoundName, setCurrentSoundName] = React.useState("...");

  const [qKeyPressed, setQKeyPressed] = React.useState(false);
  const [wKeyPressed, setWKeyPressed] = React.useState(false);
  const [eKeyPressed, setEKeyPressed] = React.useState(false);

  const [aKeyPressed, setAKeyPressed] = React.useState(false);
  const [sKeyPressed, setSKeyPressed] = React.useState(false);
  const [dKeyPressed, setDKeyPressed] = React.useState(false);

  const [zKeyPressed, setZKeyPressed] = React.useState(false);
  const [xKeyPressed, setXKeyPressed] = React.useState(false);
  const [cKeyPressed, setCKeyPressed] = React.useState(false);

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

  React.useEffect(() => {
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
      <div className="heading heading-round bg-blue border-dark-blue">
        <h1>Drum Machine</h1>
      </div>

      <div className="container">
        <div id="drum-machine" className="bg-grey custom-container">
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
            <div id="display" className=" col-md-4">
              <div className="h3 text-light heading-round bg-green border-dark-green">
                Current Sample:
              </div>
              <div className="h5 text-light heading-round bg-blue border-dark-blue">
                {currentSoundName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);