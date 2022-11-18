const DrumPadButton = (props) => {
  return (
    <div
      className={`drum-pad drum-pad-button button ${
        props.keyPressed && "drum-pad-button-pressed"
      } col-md`}
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
