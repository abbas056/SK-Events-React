import React, { useState } from "react";
import firstTabBtn from "../../assets/halloween-pumplkins-btn.png";
import secondTabBtn from "../../assets/feed-pumpkin-btn.png";
import thirdTabBtn from "../../assets/talent-wheel-btn.png";
import HalloweenPumpkin from "../main-tabs/HalloweenPumpkin";
import FeedThePumpkin from "../main-tabs/FeedThePumpkin";
import TalentWheel from "../main-tabs/TalentWheel";

function MainTabs({ halloween, sethalloween, feedPumpkin, setfeedPumpkin, talentWheel, settalentWheel, settype }) {
  const tabOne = () => {
    sethalloween(true);
    setfeedPumpkin(false);
    settalentWheel(false);
    settype(1);
  };
  const tabTwo = () => {
    sethalloween(false);
    setfeedPumpkin(true);
    settalentWheel(false);
    settype(2);
  };
  const tabThree = () => {
    sethalloween(false);
    setfeedPumpkin(false);
    settalentWheel(true);
    settype(3);
  };
  const renderingTabs = () => {
    switch (true) {
      case halloween:
        return <HalloweenPumpkin halloween={halloween} />;
      case feedPumpkin:
        return <FeedThePumpkin feedPumpkin={feedPumpkin} />;
      case talentWheel:
        return <TalentWheel talentWheel={talentWheel} />;
    }
  };

  return (
    <>
      <div className="main-btns d-flex jc-center w-100">
        <button onClick={tabOne}>
          <img className={halloween ? "btn-active" : "btn"} src={firstTabBtn} alt="" />
        </button>
        <button onClick={tabTwo}>
          <img className={feedPumpkin ? "btn-active" : "btn"} src={secondTabBtn} alt="" />
        </button>
        <button onClick={tabThree}>
          <img className={talentWheel ? "btn-active" : "btn"} src={thirdTabBtn} alt="" />
        </button>
      </div>
      <div>{renderingTabs()}</div>
    </>
  );
}

export default MainTabs;
