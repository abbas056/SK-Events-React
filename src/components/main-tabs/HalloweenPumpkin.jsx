import React, { useState } from "react";
import spookyBtn from "../../assets/SPOOKY-PUMPKIN.png";
import creepyBtn from "../../assets/creepy-pumpkin.png";
import hauntedBtn from "../../assets/haunted-pumpkins.png";
import SubButtons from "../common/SubButtons";
import MyPumpkinPoints from "../common/MyPumpkinPoints";

function HalloweenPumpkin({ halloween }) {
  return (
    <div className="halloween-pumpkin">
      <MyPumpkinPoints halloween={halloween} />
      <SubButtons img1={spookyBtn} img2={creepyBtn} img3={hauntedBtn} halloween={halloween} />
    </div>
  );
}

export default HalloweenPumpkin;
