import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-green-400 flex items-center justify-center">
      <button
        className="bg-slate-500 text-white px-6 py-2 rounded"
        onClick={() => navigate("/capture")}
      >
        Open webcam
      </button>
    </div>
  );
};

export default Home;
