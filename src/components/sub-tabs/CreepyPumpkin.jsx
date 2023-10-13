import React, { useContext } from "react";
import Leaderboard from "../common/leaderboard/Leaderboard";
import { ApiContext } from "../../js/api";
import InfoText from "../common/InfoText";
import FlipCardGame from "../common/FlipCardGame";
import ProgressBar from "../common/ProgressBar";
import { creepyCards } from "../../js/data";

function CreepyPumpkin({ halloween, creepy }) {
  const { getWinnerRank } = useContext(ApiContext);
  const array = getWinnerRank?.list ? getWinnerRank?.list : [];
  return (
    <div>
      <InfoText creepy={creepy} />
      <FlipCardGame gameCards={creepyCards} creepy={creepy} />
      <ProgressBar creepy={creepy} />
      <Leaderboard halloween={halloween} data={array} />
    </div>
  );
}

export default CreepyPumpkin;
