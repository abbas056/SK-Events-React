import React from "react";
import unknown from "../../../../assets/unknown.png";
import first_rank from "../../../../assets/1st.png";
import second_rank from "../../../../assets/2nd.png";
import third_rank from "../../../../assets/3rd.png";
import { captureImageError } from "../../../../js/helpers";
import { baserUrl } from "../../../../js/baserUrl";
import candyIcon from "../../../../assets/candy-icon.png";
import bean from "../../../../assets/bean.png";
import gem from "../../../../assets/gem.png";

function RestWinners({
  userName,
  userScore,
  userAvatar,
  index,
  userId,
  listNumber,
  userLevel,
  actorLevel,
  feedPumpkin,
  talentWheel,
  eventGifitngBtn,
  today,
  previous,
}) {
  let talentLv = `${baserUrl}streamkar/common/img/tlv/`;
  let userLv = `${baserUrl}streamkar/common/img/ulv/`;
  return (
    <div className="users-details-onward" key={index}>
      <div className="d-flex gap-2 al-center p-rel jc-center">
        <span className="rank-id d-flex al-center jc-center">{listNumber}.</span>
        <a className="d-flex jc-center al-center" href={`http://www.kktv1.com/m/?roomid=${userId}`}>
          <img
            className="border-img p-rel"
            src={listNumber == 1 ? first_rank : listNumber == 2 ? second_rank : listNumber == 3 ? third_rank : null}
            alt=""
          />
        </a>
        <img onError={captureImageError} className="user-image p-abs" src={userAvatar ? userAvatar : unknown} alt="" />
        <div className="user-info d-flex fd-column">
          <span className="username">{userName && userName.slice(0, 8)}</span>
          <img
            className={talentWheel || (eventGifitngBtn && today) ? "w-7vw" : "w-15vw"}
            src={talentWheel || (eventGifitngBtn && today) ? talentLv + actorLevel + ".png" : userLv + userLevel + ".png"}
            alt=""
          />
        </div>
      </div>
      <div className="est-rew d-flex al-center jc-center gap-1">
        <img className="w-5vw" src={eventGifitngBtn && today ? gem : eventGifitngBtn && previous ? bean : feedPumpkin ? candyIcon : unknown} alt="" />
        <span>{userScore}</span>
      </div>
    </div>
  );
}

export default RestWinners;
