import React, { useState, useRef } from "react";
import TopWinners from "./rankings/TopWinners";
import RestWinners from "./rankings/RestWinners";
import lbHeading from "../../../assets/leaderboard-heading.png";
import rewardHeading from "../../../assets/rewards.png";
import SeeButton from "./../SeeButton";
import PrizeDetails from "../../PrizeDetails";

function Leaderboard({ top, data, halloween, feedPumpkin, talentWheel, eventGifitngBtn, tabOne, tabTwo, today, previous, talentBtn, gifterBtn }) {
  const restBoard = useRef(null);
  const [active, setActive] = useState(true);

  const handleChangeActive = () => {
    setActive((previous) => {
      return !previous;
    });
    if (!active) {
      restBoard.current.scrollTop = 0;
    }
  };

  return (
    <div className="leaderboard m-auto p-rel">
      <img className="lb-heading p-abs" src={feedPumpkin ? rewardHeading : lbHeading} alt="" />
      {feedPumpkin ? (
        <>
          <PrizeDetails /> <img className="lb-heading" src={lbHeading} alt="" />
        </>
      ) : null}
      {eventGifitngBtn || feedPumpkin ? (
        <div className="tab-buttons d-flex jc-center gap-2 w-80 m-auto">
          <button onClick={tabOne}>
            <img className={today ? "btn-active" : "btn"} src={talentBtn} alt="" />
          </button>
          <button onClick={tabTwo}>
            <img className={previous ? "btn-active" : "btn"} src={gifterBtn} alt="" />
          </button>
        </div>
      ) : null}
      <div className="rank-section">
        {feedPumpkin || eventGifitngBtn ? (
          <div className="rank-section-inner">
            <div className="top-position-holders jc-center al-center">
              {top?.map(({ nickname, userScore, userLevel, actorLevel, portrait, userId }, index) => {
                return (
                  <div className="user-container p-rel" key={index}>
                    <TopWinners
                      userName={nickname}
                      userScore={userScore}
                      userAvatar={portrait}
                      userId={userId}
                      index={index}
                      userLevel={userLevel}
                      actorLevel={actorLevel}
                      eventGifitngBtn={eventGifitngBtn}
                      today={today}
                      previous={previous}
                      talentWheel={talentWheel}
                    />
                  </div>
                );
              })}
            </div>
            <div
              ref={restBoard}
              className={active ? "rest-position-holders " : "rest-position-holders rest-position-holders-max"}
              style={{ height: "97vw" }}
            >
              {top?.length < 1 ? (
                <p className="no-data f-acme">No Data Found</p>
              ) : (
                <>
                  {data &&
                    data?.map(({ nickname, userScore, userLevel, actorLevel, portrait, userId }, index) => (
                      <div key={index}>
                        <RestWinners
                          userName={nickname}
                          userScore={userScore}
                          userAvatar={portrait}
                          index={index}
                          userId={userId}
                          listNumber={index + 4}
                          userLevel={userLevel}
                          actorLevel={actorLevel}
                          feedPumpkin={feedPumpkin}
                          eventGifitngBtn={eventGifitngBtn}
                          today={today}
                          previous={previous}
                          talentWheel={talentWheel}
                        />
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="rank-section-inner">
            <div
              ref={restBoard}
              className={active ? "rest-position-holders " : "rest-position-holders rest-position-holders-max"}
              style={{ height: "138vw" }}
            >
              {data?.length < 1 ? (
                <p className="no-data f-acme">No Data Found</p>
              ) : (
                <>
                  {data?.map(({ nickname, userScore, userLevel, actorLevel, portrait, userId, desc }, index) => (
                    <div key={index}>
                      <RestWinners
                        userName={nickname}
                        userScore={userScore}
                        userAvatar={portrait}
                        index={index}
                        userId={userId}
                        listNumber={index + 1}
                        userLevel={userLevel}
                        actorLevel={actorLevel}
                        feedPumpkin={feedPumpkin}
                        eventGifitngBtn={eventGifitngBtn}
                        today={today}
                        previous={previous}
                        talentWheel={talentWheel}
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
        {data && data?.length > 10 ? <SeeButton active={active} handleChangeActive={handleChangeActive} /> : null}
      </div>
    </div>
  );
}

export default Leaderboard;
