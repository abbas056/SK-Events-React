import React from "react";
import pumpkin from "../../assets/pumpkin1.png";
import CollectCandies from "./CollectCandies";
import CandyGame from "./CandyGame";

function CandySection() {
  let value = 3;
  return (
    <div className="candy-section m-auto">
      <div className="pumpkin">
        <div className="pumpkin-image grey">
          <div>
            <img src={pumpkin} alt="" />
          </div>
        </div>
        <div className="pumpkin-image colored">
          <div>
            <img style={{ height: `${value * "14.2"}%` }} src={pumpkin} alt="" />
          </div>
        </div>
      </div>
      <CollectCandies value={value} />
      <CandyGame />
    </div>
  );
}

export default CandySection;
