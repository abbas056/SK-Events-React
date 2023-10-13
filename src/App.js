import React, { useState, useRef, useEffect } from "react";
import header from "./assets/header/header.svga";
import MainTabs from "./components/common/MainTabs";
import Footer from "./components/common/Footer";
import Popup from "./components/popups/Popup";
import LanguageBar from "./components/common/LanguageBar";
import videoSource from "./assets/header/header.mp4";
import audioSource from "./assets/header/header.mp3";
import "./App.scss";
import Svga from "./components/Svga";

function App() {
  let [language, setLanguage] = useState("English");
  const [halloween, sethalloween] = useState(true);
  const [feedPumpkin, setfeedPumpkin] = useState(false);
  const [talentWheel, settalentWheel] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [type, settype] = useState(1);

  // const videoRef = useRef(null);
  // const audioRef = useRef(null);
  const playerRef = useRef(0);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   const audio = audioRef.current;

  //   video.play();
  //   audio.play();
  //   audio.volume = 1.0;
  // }, []);

  return (
    <div className="App">
      <span id="extraContent"></span>
      <div className="header">
        {/* <video id="video" ref={videoRef} autoPlay muted loop>
          <source src={videoSource} type="video/mp4" />
        </video>
        <audio id="audio" ref={audioRef} loop autoPlay>
          <source src={audioSource} type="audio/mpeg" />
        </audio> */}
        <Svga src={header} playerRef={playerRef} id="gameReference" cssClass={`gameclass`} />
      </div>
      <LanguageBar setLanguage={setLanguage} language={language} />
      <MainTabs
        halloween={halloween}
        sethalloween={sethalloween}
        feedPumpkin={feedPumpkin}
        setfeedPumpkin={setfeedPumpkin}
        talentWheel={talentWheel}
        settalentWheel={settalentWheel}
        settype={settype}
      />
      <Popup language={language} halloween={halloween} feedPumpkin={feedPumpkin} buttonDisabled={buttonDisabled} type={type} />
      <Footer />
    </div>
  );
}

export default App;
