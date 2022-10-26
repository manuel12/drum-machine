const DrumPadButton = (props) => {
  return (
    <div
      className={`drum-pad drum-pad-button ${
        props.keyPressed && "drum-pad-button-active"
      }  col-md`}
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
