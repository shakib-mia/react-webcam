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
      className="w-1/2 mx-auto rounded-xl"
      screenshotFormat="image/jpeg"
      ref={webcamRef}
      videoConstraints={videoConstraints}
    >
      {() => (
        <div className="text-center">
          <button
            className="bg-green-700 text-white px-6 py-2 mt-5 rounded"
            onClick={capture}
          >
            Capture photo
          </button>
        </div>
      )}
    </Webcam>
  );
};

export default WebcamCapture;
