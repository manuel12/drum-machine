import { useState } from "react";

const DrumPadButton = (props) => {
  return (
    <div
      className={`drum-pad ${props.keyPressed && "drum-pad-active"}  col-md `}
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

export default DrumPadButton;
