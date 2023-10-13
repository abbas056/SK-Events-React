import React from "react";
// import { barInner } from "../../js/data";
import candyIcon from "../../assets/candy-icon.png";
import { slicePlease } from "../../js/helpers";
import barInner from "../../assets/tab2bar/inner.png";
import hundred from "../../assets/tab2bar/100.png";
import onek from "../../assets/tab2bar/1k.png";
import threek from "../../assets/tab2bar/3k.png";
import fivek from "../../assets/tab2bar/5k.png";
import tenk from "../../assets/tab2bar/10k.png";
import twentyk from "../../assets/tab2bar/20k.png";
import fiftyk from "../../assets/tab2bar/50k.png";

function CollectCandies({ value }) {
  // const innerimages = slicePlease(barInner, 0, 7);
  return (
    <div className="collect-candies">
      <div className="bar m-auto d-flex jc-start al-center p-rel">
        <div className="bar-inner d-flex al-start">
          <img src={barInner} alt="" />
        </div>
        <div className="bar-img-box d-flex p-abs">
          <img src={hundred} alt="" />
          <img src={onek} alt="" />
          <img src={threek} alt="" />
          <img src={fivek} alt="" />
          <img src={tenk} alt="" />
          <img src={twentyk} alt="" />
          <img src={fiftyk} alt="" />
        </div>
      </div>
      <div className="no-of-candies d-flex jc-sEven al-center m-auto gap-1">
        <img src={candyIcon} alt="" />
        <span>
          NO OF CURRENT CANDIES: <br /> 000,00,0
        </span>
      </div>
    </div>
  );
}

export default CollectCandies;
