import React from "react";
import RewardSlider, { CarouselItem } from "./RewardSlider";
import top1talent from "../../assets/top-1st.png";
import top2talent from "../../assets/top-2nd.png";
import top3talent from "../../assets/top-3rd.png";
import top1gifter from "../../assets/top-1st-gifter.png";
import top2gifter from "../../assets/top-2nd-gifter.png";
import top3gifter from "../../assets/top-3rd-gifter.png";
import { gifterRewards, luckyRewards, talentRewards } from "../../js/data";

function SliderItems({ halloween, eventGifitngBtn, talent, gifter }) {
  let rewards;
  let top1head;
  let top2head;
  let top3head;
  if (eventGifitngBtn && talent) {
    rewards = talentRewards;
    top1head = top1talent;
    top2head = top2talent;
    top3head = top3talent;
  } else if (eventGifitngBtn && gifter) {
    rewards = gifterRewards;
    top1head = top1gifter;
    top2head = top2gifter;
    top3head = top3gifter;
  } else {
    rewards = luckyRewards;
  }
  return (
    <div className="rewards f-poppin">
      <div className="sliderItem d-flex fd-column f-acme p-rel">
        <RewardSlider>
          {rewards &&
            rewards?.map((item, i) => {
              let index = i + 1;
              return (
                <CarouselItem key={i}>
                  {halloween ? null : <img className="title m-auto p-abs" src={index == 1 ? top1head : index == 2 ? top2head : top3head} alt="" />}
                  <div className="rank p-abs d-flex fd-column al-center jc-center">
                    <span>{item.target}</span>
                  </div>
                  <div className="rewardImg p-abs d-flex fd-column al-center jc-center">
                    <div className="rews d-flex">
                      {item?.frame?.map((_items, index) => (
                        <div className="img-box d-flex al-center jc-center" key={index}>
                          <img src={_items.pic} alt="" key={index} />
                        </div>
                      ))}
                    </div>
                    <div className="desc d-flex">
                      {item?.desc?.map((txt, i) => (
                        <div className="name d-flex al-center jc-center" key={i}>
                          <span>{txt.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
        </RewardSlider>
      </div>
    </div>
  );
}

export default SliderItems;
