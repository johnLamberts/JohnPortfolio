import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import AppLayout from "./components/AppLayout";
import Projects from "./pages/Projects";

const TRACKING_ID = "";

function App() {
  useEffect(() => {
    if (TRACKING_ID !== "") ReactGA.initialize(TRACKING_ID);
  }, []);
  return (
    <>
      <div className="App">
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
