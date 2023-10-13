import React from "react";
import closeBtn from "../../assets/close-Button.png";
import { feedPumpkinRewards, halloweenRewards, talentWheelRewards } from "../../js/data";
import { slicePlease } from "../../js/helpers";
import detailsHead from "../../assets/details-heading.png";

function DetailsPopup({ halloween, feedPumpkin, close, details }) {
  const spooky = slicePlease(halloweenRewards, 0, 6);
  const creepy = slicePlease(halloweenRewards, 6, 10);
  const haunted = slicePlease(halloweenRewards, 10, halloweenRewards.length);

  const luckyWheel = slicePlease(talentWheelRewards, 0, 7);
  const vipluckyWheel = slicePlease(talentWheelRewards, 7, talentWheelRewards.length);
  return (
    <div className="overlay" style={{ visibility: details ? "visible" : "hidden" }}>
      {details ? (
        <div className="details-popup p-rel m-auto">
          <img className="heading p-abs" src={detailsHead} alt="" />
          <div className="inner-content m-auto">
            {halloween ? (
              <div className="table m-auto d-flex jc-center al-center f-acme mb-5">
                <table className="border-2-w b-collapse w-100">
                  <tbody>
                    <tr>
                      <td className="border-1-w w-15vw bg-blue">TAB NAME</td>
                      <td className="border-1-w w-15vw bg-blue">HALLOWEEN IMAGES DISPLAYED</td>
                      <td className="border-1-w w-15vw bg-blue">PUMPKIN POINTS REQUIRED</td>
                      <td className="border-1-w w-15vw bg-blue">PUMPKIN IMAGES REQUIRED</td>
                      <td className="border-1-w w-30vw bg-blue">REWARDS</td>
                    </tr>
                    <tr>
                      <td className="border-1-w w-15vw  bg-yellow">SPOOKY PUMPKINS</td>
                      <td className="border-1-w w-15vw  bg-yellow">9</td>
                      <td className="border-1-w w-15vw  bg-yellow">5K</td>
                      <td className="border-1-w w-15vw  bg-yellow">3</td>
                      <td className="d-flex f-wrap jc-center border-1-w w-30vw  bg-yellow gap-1">
                        {spooky.map((items, i) => (
                          <div key={i} className="w-8vw d-flex fd-column al-center jc-start">
                            <div className="rew-img d-flex al-center jc-center">
                              <img src={items.img} alt="" />
                            </div>
                            <span className="details">{items.name}</span>
                            <span className="details">{items.days}</span>
                          </div>
                        ))}
                      </td>
                    </tr>
                    <tr>
                      <td className="border-1-w w-15vw  bg-yellow">CREEPY PUMPKINS</td>
                      <td className="border-1-w w-15vw  bg-yellow">16</td>
                      <td className="border-1-w w-15vw  bg-yellow">25K</td>
                      <td className="border-1-w w-15vw  bg-yellow">5</td>
                      <td className="d-flex f-wrap jc-center border-1-w w-30vw  bg-yellow gap-1">
                        {creepy.map((items, i) => (
                          <div key={i} className="w-8vw d-flex fd-column al-center jc-start">
                            <div className="rew-img d-flex al-center jc-center">
                              <img src={items.img} alt="" />
                            </div>
                            <span className="details">{items.name}</span>
                            <span className="details">{items.days}</span>
                          </div>
                        ))}
                      </td>
                    </tr>
                    <tr>
                      <td className="border-1-w w-15vw  bg-yellow">HAUNTED PUMPKINS</td>
                      <td className="border-1-w w-15vw  bg-yellow">25</td>
                      <td className="border-1-w w-15vw  bg-yellow">50K</td>
                      <td className="border-1-w w-15vw  bg-yellow">10</td>
                      <td className="d-flex f-wrap jc-center border-1-w w-30vw  bg-yellow gap-1">
                        {haunted.map((items, i) => (
                          <div key={i} className="w-8vw d-flex fd-column al-center jc-start">
                            <div className="rew-img d-flex al-center jc-center">
                              <img src={items.img} alt="" />
                            </div>
                            <span className="details">{items.name}</span>
                            <span className="details">{items.days}</span>
                          </div>
                        ))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : feedPumpkin ? (
              <div className="table m-auto d-flex jc-center al-center f-acme mb-5">
                <table className="border-1-w b-collapse w-100">
                  <tbody>
                    <tr>
                      <td className="border-1-w w-30vw bg-blue">BUTTON NAME</td>
                      <td className="border-1-w w-30vw bg-blue">PUMPKIN POINTS REQUIRED</td>
                      <td className="border-1-w w-40vw bg-blue">REWARDS</td>
                    </tr>
                    <tr>
                      <td className="border-1-w w-30vw  bg-yellow">OPEN</td>
                      <td className="border-1-w w-30vw  bg-yellow">20K</td>
                      <td className="d-flex f-wrap jc-center border-1-w w-40vw  bg-yellow gap-1">
                        {feedPumpkinRewards?.map((items, i) => (
                          <div key={i} className="w-10vw d-flex fd-column al-center jc-start">
                            <div className="rew-img d-flex al-center jc-center">
                              <img src={items.img} alt="" />
                            </div>
                            <span className="details">{items.name}</span>
                            <span className="details">{items.days}</span>
                          </div>
                        ))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="table m-auto d-flex jc-center al-center f-acme mb-5">
                <table className="border-2-w b-collapse w-100">
                  <tbody>
                    <tr>
                      <td className="border-1-w w-40vw bg-blue pb-2">WHEEL NAME</td>
                      <td className="border-1-w w-60vw bg-blue pb-2">REWARDS</td>
                    </tr>
                    <tr>
                      <td className="border-1-w w-20vw  bg-yellow">LUCKY WHEEL</td>
                      <td className="d-flex f-wrap jc-center border-1-w w-60vw  bg-yellow gap-1">
                        {luckyWheel.map((items, i) => (
                          <div key={i} className="w-14vw d-flex fd-column al-center jc-start">
                            <div className="rew-img d-flex al-center jc-center">
                              <img src={items.img} alt="" />
                            </div>
                            <span className="details">{items.name}</span>
                            <span className="details">{items.days}</span>
                          </div>
                        ))}
                      </td>
                    </tr>
                    <tr>
                      <td className="border-1-w w-20vw  bg-yellow">VIP LUCKY WHEEL</td>
                      <td className="d-flex f-wrap jc-center border-1-w w-60vw  bg-yellow gap-1">
                        {vipluckyWheel.map((items, i) => (
                          <div key={i} className="w-14vw d-flex fd-column al-center jc-start">
                            <div className="rew-img d-flex al-center jc-center">
                              <img src={items.img} alt="" />
                            </div>
                            <span className="details">{items.name}</span>
                            <span className="details">{items.days}</span>
                          </div>
                        ))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            <div className="modal-close p-abs" onClick={close}>
              <img src={closeBtn} alt="" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DetailsPopup;
