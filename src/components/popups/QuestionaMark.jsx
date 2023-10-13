import React from "react";
import closeBtn from "../../assets/close-Button.png";
import spookyHead from "../../assets/SPOOKY-PUMPKINS.png";
import creepyHead from "../../assets/CREEPY-PUMKIN.png";
import hauntedHead from "../../assets/HAUNTED-HALLOWEEN.png";
import spookystep1 from "../../assets/HALLOWEEN-PUMPKIN-STEP-1.png";
import creepystep1 from "../../assets/CREEPY-PUMPKIN-STEP-1.png";
import hauntedstep1 from "../../assets/HAUNTED-HALLOWEEN-STEP-1.png";
import hand from "../../assets/HAND.png";
import step2 from "../../assets/STEP-2.png";
import SliderItems from "../reward-slider/SliderItems";

function QuestionaMark({ spooky, creepy, haunted, close, question, halloween }) {
  return (
    <div className="overlay" style={{ visibility: question ? "visible" : "hidden" }}>
      <div className="question-mark-popup p-rel m-auto">
        <img className="heading w-80 m-auto p-abs" src={spooky ? spookyHead : creepy ? creepyHead : hauntedHead} alt="" />
        <div className="inner-content f-poppin">
          {/* {spooky ? "spooky" : creepy ? "creepy" : "haunted"} */}
          <div className="box w-80vw m-auto d-flex fd-column jc-center">
            <h1 className="d-flex">STEP 1</h1>
            <p>TAP ON ANY HALLOWEEN IMAGE</p>
            <div className="img p-rel">
              <img className="flip-cards mt-1vw" src={spooky ? spookystep1 : creepy ? creepystep1 : hauntedstep1} alt="" />
              <img className="hand p-abs" src={hand} alt="" />
            </div>
          </div>
          <div className="box w-80vw m-auto d-flex fd-column jc-center">
            <h1 className="d-flex">STEP 2</h1>
            <p>
              YOU WILL EITHER FIND A SKELETON <br />
              IMAGE OR PUMPKIN IMAGE.
            </p>
            <div className="img p-rel">
              <img className="flip-cards mt-1vw" src={step2} alt="" />
            </div>
          </div>
          <div className="box w-80vw m-auto d-flex fd-column jc-center">
            <h1 className="d-flex">STEP 3</h1>
            <p>
              FIND {spooky ? "3" : creepy ? "5" : "10"} PUMPKIN IMAGES TO GET <br />
              BONUS REWARDS.
            </p>
            <div className="rews p-rel">
              <SliderItems halloween={halloween} />
            </div>
          </div>
        </div>
        <div className="modal-close p-abs" onClick={close}>
          <img src={closeBtn} alt="" />
        </div>
      </div>
    </div>
  );
}

export default QuestionaMark;
