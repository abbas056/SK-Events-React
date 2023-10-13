import React from "react";
import unknown from "../../../../assets/unknown.png";
import { captureImageError } from "../../../../js/helpers";
import { baserUrl } from "../../../../js/baserUrl";
import first_rank from "../../../../assets/1st.png";
import second_rank from "../../../../assets/2nd.png";
import third_rank from "../../../../assets/3rd.png";
import candyIcon from "../../../../assets/candy-icon.png";
import bean from "../../../../assets/bean.png";
import gem from "../../../../assets/gem.png";

function TopWinners({ userName, userScore, userAvatar, userId, index, userLevel, actorLevel, talentWheel, eventGifitngBtn, today, previous }) {
  let talentLv = `${baserUrl}streamkar/common/img/tlv/`;
  let userLv = `${baserUrl}streamkar/common/img/ulv/`;
  let rank = index + 1;

  return (
    <div className="innerData p-abs f-Heinemann">
      <div className={rank == 1 ? "first-user" : "runner-user"}>
        <img onError={captureImageError} className="rank-user-image" src={userAvatar ? userAvatar : unknown} alt="" />
        <a href={`http://www.kktv1.com/m/?roomid=${userId}`}>
          <img className="rank-border-image p-rel" src={rank == 1 ? first_rank : rank == 2 ? second_rank : third_rank} alt="" />
        </a>
      </div>
      <div className="bottom-data">
        <div className="bottom-info">
          <div className="username">{userName && userName.slice(0, 12)}</div>
          <img
            className={today ? "w-7vw" : "w-15vw"}
            src={talentWheel || (eventGifitngBtn && today) ? talentLv + actorLevel + ".png" : userLv + userLevel + ".png"}
            alt=""
          />
        </div>
        <div className="score d-flex al-center">
          <img className="w-4vw" src={eventGifitngBtn && today ? gem : eventGifitngBtn && previous ? bean : candyIcon} alt="" />
          <span>000,00,00</span>
        </div>
      </div>
    </div>
  );
}

export default TopWinners;
