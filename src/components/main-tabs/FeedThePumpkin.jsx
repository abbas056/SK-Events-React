import React, { useContext, useState } from "react";
import Leaderboard from "../common/leaderboard/Leaderboard";
import { ApiContext } from "../../js/api";
import { slicePlease } from "../../js/helpers";
import CandySection from "../candy-section/CandySection";
import MyPumpkinPoints from "../common/MyPumpkinPoints";
import todaybtn from "../../assets/today-on.png";
import previousbtn from "../../assets/previous-day-on.png";

function FeedThePumpkin({ feedPumpkin }) {
  const [today, settoday] = useState(true);
  const [previous, setprevious] = useState(false);
  const { getWinnerRank } = useContext(ApiContext);
  const array = getWinnerRank?.list ? getWinnerRank?.list : [];
  let topData;
  let restData;
  if (feedPumpkin && today) {
    topData = slicePlease(array, 5, 8);
    restData = array;
  } else {
    topData = slicePlease(array, 0, 3);
    restData = slicePlease(array, 3, array.length);
  }

  const tabOne = () => {
    settoday(true);
    setprevious(false);
  };
  const tabTwo = () => {
    settoday(false);
    setprevious(true);
  };
  return (
    <>
      <MyPumpkinPoints feedPumpkin={feedPumpkin} />
      <CandySection />
      <Leaderboard
        feedPumpkin={feedPumpkin}
        top={topData}
        data={restData}
        tabOne={tabOne}
        tabTwo={tabTwo}
        today={today}
        previous={previous}
        talentBtn={todaybtn}
        gifterBtn={previousbtn}
      />
    </>
  );
}

export default FeedThePumpkin;
