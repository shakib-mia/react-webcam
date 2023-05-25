import React, { useRef, useState } from "react";
import WebcamCapture from "../WebcamCapture/WebcamCapture";

const CaptureSection = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState("");

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();

    setImage(imageSrc);
  };

  return (
    <div className="my-14">
      <WebcamCapture capture={capture} webcamRef={webcamRef} />

      {image && (
        <div className="mt-10">
          <h1 className="text-4xl text-center font-medium">Captured Image</h1>
          <img
            className="w-1/2 mx-auto mt-5 rounded-xl"
            src={image}
            alt="from webcam"
          />
        </div>
      )}
    </div>
  );
};

export default CaptureSection;
