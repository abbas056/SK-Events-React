import React, { useState } from "react";
import closeBtn from "../../assets/close-Button.png";
import Content from "./content/Content";
import EventGifts from "../EventGifts";
import right from "../../assets/arrow-right.png";
import down from "../../assets/arrow-downward.png";
import halloweenBtn from "../../assets/halloween-pumpkins-headbtn.png";
import feedPumpkinBtn from "../../assets/feed-the-pumpkin-headbtn.png";
import talentWheelBtn from "../../assets/talent-wheel.png";
import eventGiftBtn from "../../assets/event-gifts.png";
import guideHead from "../../assets/guide-head.png";
import howPlay from "../../assets/HOW-TO-PLAY.png";
import { FeedPumpkinlGuide, eventGiftingGuide, halloweenGuide, talentWheelGuide } from "../../js/data";

function GuidePopup({ close, guide, language }) {
  const [halloween, sethalloween] = useState(true);
  const [feedpumpkin, setisWishing] = useState(false);
  const [talentWheel, settalentWheel] = useState(false);
  const [eventGifts, seteventGifts] = useState(false);

  const halloweenFunc = () => {
    sethalloween(!halloween);
  };
  const feedFunc = () => {
    setisWishing(!feedpumpkin);
  };
  const wheelFunc = () => {
    settalentWheel(!talentWheel);
  };
  const eventGiftFunc = () => {
    seteventGifts(!eventGifts);
  };
  return (
    <div className="overlay" style={{ visibility: guide ? "visible" : "hidden" }}>
      {guide ? (
        <div className="guide-container p-rel">
          <img className="head p-abs" src={guideHead} alt="" />
          <div className="guide-content ">
            <EventGifts guide={guide} />
            <img className="heading" src={howPlay} alt="" />
            <div className="how-to-play d-flex fd-column jc-center gap-4 mb-5 mt-5">
              <div className="inner-content">
                <div className="toggle-btn al-center d-flex">
                  <img className="heading-text" src={halloweenBtn} alt="" />
                  <img className="arrow" onClick={halloweenFunc} src={halloween ? down : right} alt="" />
                </div>
                {halloween && <Content content={halloweenGuide} halloween={halloween} language={language} />}
              </div>
              <div className="inner-content">
                <div className="toggle-btn al-center d-flex">
                  <img className="heading-text" src={feedPumpkinBtn} alt="" />
                  <img className="arrow" onClick={feedFunc} src={feedpumpkin ? down : right} alt="" />
                </div>
                {feedpumpkin && <Content content={FeedPumpkinlGuide} feedpumpkin={feedpumpkin} language={language} />}
              </div>
              <div className="inner-content">
                <div className="toggle-btn al-center d-flex">
                  <img className="heading-text" src={talentWheelBtn} alt="" />
                  <img className="arrow" onClick={wheelFunc} src={talentWheel ? down : right} alt="" />
                </div>
                {talentWheel && <Content content={talentWheelGuide} talentWheel={talentWheel} language={language} />}
              </div>
              <div className="inner-content">
                <div className="toggle-btn al-center d-flex">
                  <img className="heading-text" src={eventGiftBtn} alt="" />
                  <img className="arrow" onClick={eventGiftFunc} src={eventGifts ? down : right} alt="" />
                </div>
                {eventGifts && <Content content={eventGiftingGuide} eventGifts={eventGifts} language={language} />}
              </div>
            </div>
            <div className="modal-close p-abs" onClick={close}>
              <img src={closeBtn} alt="" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default GuidePopup;
