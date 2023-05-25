import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = ({ capture, webcamRef }) => {
  //   const webcamRef = React.useRef(null);

  return (
    <Webcam
      audio={false}
      //   height={720}
      className="w-1/2 mx-auto"
      screenshotFormat="image/jpeg"
      //   width={1280}
      ref={webcamRef}
      videoConstraints={videoConstraints}
    >
      {() => <button onClick={capture}>Capture photo</button>}
    </Webcam>
  );
};

export default WebcamCapture;
