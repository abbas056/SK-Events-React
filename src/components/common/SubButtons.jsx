import React, { useState } from "react";
import SpookyPumpkin from "./../sub-tabs/SpookyPumpkin";
import CreepyPumpkin from "./../sub-tabs/CreepyPumpkin";
import HauntedPumpkin from "./../sub-tabs/HauntedPumpkin";

function SubButtons({ img1, img2, img3, halloween }) {
  const [spooky, setspooky] = useState(true);
  const [creepy, setcreepy] = useState(false);
  const [haunted, sethaunted] = useState(false);

  const tabOne = () => {
    setspooky(true);
    setcreepy(false);
    sethaunted(false);
  };
  const tabTwo = () => {
    setspooky(false);
    setcreepy(true);
    sethaunted(false);
  };
  const tabThree = () => {
    setspooky(false);
    setcreepy(false);
    sethaunted(true);
  };

  const renderingTabs = () => {
    switch (true) {
      case spooky:
        return <SpookyPumpkin halloween={halloween} spooky={spooky} />;
      case creepy:
        return <CreepyPumpkin halloween={halloween} creepy={creepy} />;
      case haunted:
        return <HauntedPumpkin halloween={halloween} haunted={haunted} />;
    }
  };
  return (
    <>
      <div className="sub-buttons d-flex jc-center w-100 gap-1">
        <button onClick={tabOne}>
          <img className={spooky ? "btn-active" : "btn"} src={img1} alt="" />
        </button>
        <button onClick={tabTwo}>
          <img className={creepy ? "btn-active" : "btn"} src={img2} alt="" />
        </button>
        <button onClick={tabThree}>
          <img className={haunted ? "btn-active" : "btn"} src={img3} alt="" />
        </button>
      </div>
      <div>{renderingTabs()}</div>
    </>
  );
}

export default SubButtons;
