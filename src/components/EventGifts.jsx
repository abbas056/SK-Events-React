import React, { useState } from "react";
import eventGiftHead from "../assets/event-gifting-heading.png";
import { eventGifts } from "../js/data";
import bean from "../assets/bean.png";
import giftingRewHead from "../assets/gifting-rewards.png";
import SliderItems from "./reward-slider/SliderItems";

function EventGifts({ guide, eventGifitngBtn, talentBtn, gifterBtn }) {
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
  return (
    <>
      <div className="event-gifts d-flex jc-center al-start">
        {eventGifts?.map((items, index) => (
          <div className="mt-12vw" key={index}>
            <div className="gift-details">
              <div className="gift-img d-flex al-center jc-center">
                <img src={items?.img} alt="" />
              </div>
              <div className="details d-flex fd-column">
                <span className="c-yellow">{items.name}</span>
                <div className="d-flex al-center jc-center">
                  <img className="w-3vw" src={bean} alt="" /> <span>{items.cost}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {guide ? null : (
        <div className="gifting-rewards mt-5">
          <img className="w-60 mt-5vw" src={giftingRewHead} alt="" />
          <div className="text m-auto">Rewards for Talents and Gifters</div>
          <div className="tab-buttons d-flex jc-center gap-4">
            <button onClick={tabOne}>
              <img className={talent ? "btn-active" : "btn"} src={talentBtn} alt="" />
            </button>
            <button onClick={tabTwo}>
              <img className={gifter ? "btn-active" : "btn"} src={gifterBtn} alt="" />
            </button>
          </div>
          <div>
            <SliderItems eventGifitngBtn={eventGifitngBtn} talent={talent} gifter={gifter} />
          </div>
        </div>
      )}
    </>
  );
}

export default EventGifts;
