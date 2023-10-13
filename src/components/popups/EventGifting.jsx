import React, { useContext, useState } from "react";
import closeBtn from "../../assets/close-Button.png";
import EventGifts from "./../EventGifts";
import Leaderboard from "../common/leaderboard/Leaderboard";
import headText from "../../assets/event-gifting-heading.png";
import Footer from "../common/Footer";
import { ApiContext } from "../../js/api";
import { slicePlease } from "../../js/helpers";
import talentBtn from "../../assets/talents-on.png";
import gifterBtn from "../../assets/gifters-on.png";

function EventGifting({ close, eventGifitngBtn }) {
  const [today, settoday] = useState(true);
  const [previous, setprevious] = useState(false);

  const tabOne = () => {
    settoday(true);
    setprevious(false);
  };
  const tabTwo = () => {
    settoday(false);
    setprevious(true);
  };

  const { getWinnerRank } = useContext(ApiContext);
  const array = getWinnerRank?.list ? getWinnerRank?.list : [];
  const topData = slicePlease(array, 0, 3);
  const restData = slicePlease(array, 3, array.length);

  return (
    <div className="overlay" style={{ visibility: eventGifitngBtn ? "visible" : "hidden" }}>
      {eventGifitngBtn ? (
        <>
          <div className="popup-container p-rel">
            <img className="head w-80 m-auto" src={headText} alt="" />
            <div className="inner-content ">
              <div className="event-gifts-container">
                <EventGifts eventGifitngBtn={eventGifitngBtn} talentBtn={talentBtn} gifterBtn={gifterBtn} />
              </div>
              <div className="modal-close p-abs" onClick={close}>
                <img src={closeBtn} alt="" />
              </div>
            </div>
          </div>
          <div className="bottom-container p-rel">
            <Leaderboard
              eventGifitngBtn={eventGifitngBtn}
              top={topData}
              data={restData}
              tabOne={tabOne}
              tabTwo={tabTwo}
              today={today}
              previous={previous}
              talentBtn={talentBtn}
              gifterBtn={gifterBtn}
            />
            <Footer />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default EventGifting;
