import React, { useState } from "react";
import iBtn from "../../assets/i-button.png";
import { overFlowAuto, overFlowHidden } from "../../js/helpers";
import QuestionaMark from "../popups/QuestionaMark";

function InfoText({ spooky, creepy, haunted, halloween }) {
  const [question, setquestion] = useState(false);

  const questionFunc = () => {
    setquestion(true);
    overFlowHidden();
  };

  const close = () => {
    setquestion(false);
    overFlowAuto();
  };
  return (
    <>
      <div className="info-bar m-auto d-flex al-center jc-center p-rel">
        <span>
          FLIP THE IMAGES TO FIND PUMPKINS <br />1 FLIP = 5K PUMPKIN POINTS
        </span>
        <button onClick={questionFunc}>
          <img className="p-abs" src={iBtn} alt="" />
        </button>
      </div>
      <QuestionaMark spooky={spooky} creepy={creepy} haunted={haunted} close={close} question={question} halloween={halloween} />
    </>
  );
}

export default InfoText;
