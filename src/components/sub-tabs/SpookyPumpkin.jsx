import React, { useContext } from "react";
import InfoText from "../common/InfoText";
import FlipCardGame from "../common/FlipCardGame";
import ProgressBar from "../common/ProgressBar";
import Leaderboard from "../common/leaderboard/Leaderboard";
import { ApiContext } from "../../js/api";
import { spookyCards } from "../../js/data";

function SpookyPumpkin({ halloween, spooky }) {
  const { getWinnerRank } = useContext(ApiContext);
  const array = getWinnerRank?.list ? getWinnerRank?.list : [];
  return (
    <div className="spooky-pumpkins">
      <InfoText spooky={spooky} halloween={halloween} />
      <FlipCardGame gameCards={spookyCards} spooky={spooky} />
      <ProgressBar spooky={spooky} halloween={halloween} />
      <Leaderboard halloween={halloween} data={array} />
    </div>
  );
}

export default SpookyPumpkin;
