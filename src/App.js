import "./App.css";
import WebcamCapture from "./components/WebcamCapture/WebcamCapture";
import { useRef, useState } from "react";

function App() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState("");

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();

    setImage(imageSrc);
  };

  return (
    <>
      <WebcamCapture capture={capture} webcamRef={webcamRef} />

      {image && <img src={image} alt="from webcam" />}
    </>
  );
}

export default App;
