import React, { useEffect, useState, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { RouteIntroDiv } from "./components/ui/CustomDivs";
const Login = lazy(() => import("./pages/accounts/Login"));
const Register = lazy(() => import("./pages/accounts/Register"));
const Contact = lazy(() => import("./pages/info/Contact"));
const About = lazy(() => import("./pages/info/About"));
const Profile = lazy(() => import("./pages/settings/Profile"));
const Home = lazy(() => import("./pages/main/Home"));
const Editor = lazy(() => import("./pages/editor/Editor"));
function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);
  return (
    <>
      <NavBar />
      <RouteIntroDiv
        transitionStage={transitionStage}
        setTransitionStage={setTransitionStage}
        setDisplayLocation={setDisplayLocation}
        location={location}
      >
        <Routes location={displayLocation} key={location.pathname}>
          <Route exac path="/" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </RouteIntroDiv>
      <Footer />
    </>
  );
}

export default App;
