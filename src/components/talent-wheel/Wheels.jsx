import React, { useState } from "react";
import wheel1 from "../../assets/wheel-1.png";
import wheel2 from "../../assets/wheel-2.png";
import { overFlowAuto, overFlowHidden, successAlert, unsuccessAlert, w1Rotation, w2Rotation } from "../../js/helpers";
import baseUpper from "../../assets/base-upper.png";
import baseLower from "../../assets/base-lower.png";
import spin from "../../assets/spin.png";
import x1 from "../../assets/x1.png";
import x10 from "../../assets/x10.png";
import x100 from "../../assets/x100.png";
import w1pointer from "../../assets/wheel-pointer.png";
import w2pointer from "../../assets/w2-pointer.png";
import w1center from "../../assets/wheel-center.png";
import w2center from "../../assets/center.png";
import closeButton from "../../assets/close-Button.png";
import { rewardImages } from "../../js/data";

function Wheels({ talent, gifter }) {
  const [buttonDisabled, setbuttonDisabled] = useState(false);
  const [wheel1Degree, setFirstWheel] = useState("");
  const [degreeClass, setSecondWheel] = useState("");
  const [playCount, setplayCount] = useState(0);
  const [alertpopup, setAlertpopup] = useState([]);
  const [alert, setAlert] = useState(false);

  const playanimation = (i) => {
    setplayCount(i);
  };

  const min = 1; // Minimum value (inclusive)
  const max = 8; // Maximum value (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  const handleSpin = () => {
    setbuttonDisabled(true);
    if (!playCount) {
      setAlert(true);
      setAlertpopup(unsuccessAlert(<div>You need to select any combo (x1, x10, x100) first in order to play wheel.</div>));
      overFlowHidden();
    } else {
      if (talent) {
        w1Rotation(randomNumber, setFirstWheel);
      } else {
        w2Rotation(randomNumber, setSecondWheel);
      }
      setTimeout(() => {
        setAlert(true);
        setAlertpopup(
          successAlert(
            <div className="d-flex al-center fd-column gap-3">
              <span> Congratulations! You have won </span>
              <div className="w-30 d-flex fd-column jc-center al-center gap-2">
                <div className="reward-img">
                  <img src={rewardImages("No Reward")} alt="" />
                </div>
                <span className="w-100 c-yellow">
                  No Reward <br /> x days
                </span>
              </div>
            </div>
          )
        );
        overFlowHidden();
        setFirstWheel("");
        setSecondWheel("");
      }, 5000);
    }
  };

  const close = () => {
    setAlert(false);
    overFlowAuto();
    setplayCount(0);
    setbuttonDisabled(false);
  };

  return (
    <>
      <div className="wheel-container d-flex fd-column jc-center al-center">
        <div
          className={talent ? "wheels-game-lucky m-auto d-flex jc-center al-center p-rel" : "wheels-game-vip m-auto d-flex jc-center al-center p-rel"}
        >
          <img className="wheel-pointer p-abs" src={talent ? w1pointer : w2pointer} alt="" />
          <img className="wheel-center p-abs" src={talent ? w1center : w2center} alt="" />

          <div className="wheel">
            <div className="image-container d-flex al-center jc-center">
              <img
                src={talent ? wheel1 : wheel2}
                alt="Spin the Wheel"
                className={`${talent ? `wheel-image ${wheel1Degree}` : `wheel-image mt-8vw ${degreeClass}`} `}
                style={talent ? { width: "90%" } : { width: "85%" }}
              />
            </div>
          </div>
        </div>
        <div className="base p-rel d-flex fd-column jc-center al-center m-auto" style={talent ? { top: "0" } : { top: "-9vw" }}>
          {talent ? <img className="base-upper" src={baseUpper} alt="" /> : null}
          <img className="base-lower" src={baseLower} alt="" />
          <div className="base-num d-flex p-abs">
            <img className={playCount == 1 ? "select grayScale" : "select"} onClick={() => playanimation(1)} src={x1} alt="" />
            <img className={playCount == 10 ? "select grayScale" : "select"} onClick={() => playanimation(10)} src={x10} alt="" />
            <img className={playCount == 100 ? "select grayScale" : "select"} onClick={() => playanimation(100)} src={x100} alt="" />
          </div>
        </div>
        <button onClick={handleSpin} disabled={buttonDisabled} style={talent ? { marginTop: "5vw" } : { marginTop: "-4vw" }}>
          <img className={buttonDisabled ? "spin-btn gray-1" : "spin-btn"} src={spin} alt="" />
        </button>
      </div>

      <div className="overlay" style={{ visibility: alert ? "visible" : "hidden" }}>
        {alert ? (
          <div className="game-popup-container p-rel d-flex al-center jc-center">
            {alertpopup?.map((item, index) => {
              return (
                <div key={index} className="w-90 d-flex jc-center al-center">
                  <div className="inner-content d-flex fd-column jc-center al-center">{item.data}</div>
                </div>
              );
            })}
            <div className="modal-close p-abs" onClick={close}>
              <img src={closeButton} alt="" />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Wheels;
