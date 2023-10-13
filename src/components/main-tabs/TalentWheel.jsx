import React, { useContext, useState } from "react";
import Leaderboard from "../common/leaderboard/Leaderboard";
import { ApiContext } from "../../js/api";
import Wheels from "../talent-wheel/Wheels";
import talentBtn from "../../assets/lucky-wheel.png";
import gifterBtn from "../../assets/vip-luckly-wheel.png";
import talentwheenHead from "../../assets/TALENT-WHEEL-head.png";
import MyPumpkinPoints from "../common/MyPumpkinPoints";

function TalentWheel({ talentWheel }) {
  const [talent, settalent] = useState(true);
  const [gifter, setgifter] = useState(false);
  const tabOne = () => {
    settalent(true);
    setgifter(false);
  };
  const tabTwo = () => {
    settalent(false);
    setgifter(true);
  };
  const { getWinnerRank } = useContext(ApiContext);
  const array = getWinnerRank?.list ? getWinnerRank?.list : [];
  return (
    <>
      <MyPumpkinPoints talentWheel={talentWheel} />
      <div className="talent-wheel-tab m-auto">
        <img className="wheel-head" src={talentwheenHead} alt="" />
        <div className="tab-buttons d-flex jc-center gap-4">
          <button onClick={tabOne}>
            <img className={talent ? "btn-active" : "btn"} src={talentBtn} alt="" />
          </button>
          <button onClick={tabTwo}>
            <img className={gifter ? "btn-active" : "btn"} src={gifterBtn} alt="" />
          </button>
        </div>
        <div className="points-req m-auto f-poppin">{talent ? "25K TALENT POINTS = 1 CHANCE" : "100K TALENT POINTS = 1 CHANCE"}</div>

        <Wheels talent={talent} gifter={gifter} />
      </div>
      <Leaderboard talentWheel={talentWheel} data={array} />
    </>
  );
}

export default TalentWheel;
