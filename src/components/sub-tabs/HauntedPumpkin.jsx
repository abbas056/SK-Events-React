import React, { useContext } from "react";
import Leaderboard from "../common/leaderboard/Leaderboard";
import { ApiContext } from "../../js/api";
import InfoText from "../common/InfoText";
import FlipCardGame from "../common/FlipCardGame";
import ProgressBar from "../common/ProgressBar";
import { hauntedCards } from "../../js/data";

function HauntedPumpkin({ halloween, haunted }) {
  const { getWinnerRank } = useContext(ApiContext);
  const array = getWinnerRank?.list ? getWinnerRank?.list : [];
  return (
    <div>
      <InfoText haunted={haunted} />
      <FlipCardGame gameCards={hauntedCards} haunted={haunted} />
      <ProgressBar haunted={haunted} />
      <Leaderboard halloween={halloween} data={array} />
    </div>
  );
}

export default HauntedPumpkin;
