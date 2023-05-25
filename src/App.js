import { Route, Routes } from "react-router-dom";
import "./App.css";
import CaptureSection from "./components/CaptureSection/CaptureSection";
import Home from "./components/Home/Home";

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/capture",
      element: <CaptureSection />,
    },
  ];
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route path={path} element={element} />
      ))}
    </Routes>
  );
}

export default App;
