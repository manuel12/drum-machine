import { useState } from "react";

import React from "react";
import DrumPadButton from "./DrumPadButton";

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
          keyPressed={props.wwwKeyPressed}
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

export default DrumPad;
