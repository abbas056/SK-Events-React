import React, { useState } from "react";
import playImg from "../../assets/candy-bag.png";
import base from "../../assets/bag-base.png";
import x1 from "../../assets/x1.png";
import openBtn from "../../assets/open.png";
import candyIcon from "../../assets/candy-icon.png";
function CandyGame() {
  const [input, setInput] = useState(1);
  const [error, setError] = useState(false);

  const chancesLeft = 2000000;

  const onChangeHandle = (event) => {
    setInput(parseInt(event.target.value));
    //     setButtonDisabled(false);
    //     setDigDisable(false);
    if (event.target.value === "") {
      setError(true);
    } else {
      setError(false);
    }
  };
  const onUpCheck = (e) => {
    if (/[+-.]/.test(e.target.value) || e.keyCode == 229) {
      setInput("");
    } else if (e.target.value.charAt(0) === 0) {
      setInput(e.target.value.slice(1));
    } else if (e.target.value === 0) {
      setInput(1);
    } else {
      let max = chancesLeft < 99 ? chancesLeft : 99;
      let number = input > max ? max : input <= 0 ? "" : input;
      setInput(parseInt(number));
    }
  };
  return (
    <div className="candy-game">
      <div className="animation d-flex fd-column jc-center al-center p-rel">
        <img className="playImg p-abs" id="play-img" src={playImg} alt="" />
        <img className="base" src={base} alt="" />
      </div>
      <div className="bottom d-flex jc-sEven al-center">
        <div className="input d-flex fd-column al-center jc-center">
          <input
            className="input"
            name="NumInput"
            type="number"
            value={input}
            min={0}
            max={99}
            onInput={onChangeHandle}
            onKeyUp={onUpCheck}
            pattern="[0-9]*"
          />
          <span>{error ? "Enter some value" : "Max value = 99"}</span>
        </div>
        <div className="button">
          <button>
            <img src={openBtn} alt="" />
          </button>
          <span>20k Pumpkin Pts Req</span>
        </div>
      </div>
      <div className="my-candies d-flex jc-center al-center m-auto gap-1">
        <img src={candyIcon} alt="" />
        <span>My CANDIES: {chancesLeft}</span>
      </div>
    </div>
  );
}

export default CandyGame;
