import React from "react";
import closeBtn from "../../assets/close-Button.png";
import { rewardImages } from "../../js/data";
import Loader from "./../common/Loader";
import recordsHead from "../../assets/records-head.png";

function Records({ close, records, gameRecords, isLoading, halloween, loadMoreHistory, resetHistory, feedPumpkin }) {
  let rewardsList = gameRecords?.list ? gameRecords?.list : [];

  return (
    <div className="overlay" style={{ visibility: records ? "visible" : "hidden" }}>
      {records ? (
        <div className="records-popup p-rel">
          <img className="head p-abs" src={recordsHead} alt="" />
          <div className="inner-content ">
            <div className="table m-auto d-flex jc-center al-center f-acme mb-5 fd-column">
              <div className="w-100 d-flex">
                <div className="d-flex al-center jc-center border-1-w w-30vw bg-blue p-1">TIME (GMT)</div>
                {halloween ? <div className="d-flex al-center jc-center border-1-w w-20vw bg-blue p-1">TAB NAME</div> : null}
                {halloween ? <div className="d-flex al-center jc-center border-1-w w-20vw bg-blue p-1">IMAGE FLIPPED</div> : null}
                {feedPumpkin ? <div className="d-flex al-center jc-center border-1-w w-20vw bg-blue p-1">ITEM WIN</div> : null}
                <div className="d-flex al-center jc-center border-1-w w-60vw bg-blue p-1">REWARDS</div>
              </div>
              {isLoading ? (
                <Loader />
              ) : (
                <div className="w-100">
                  {rewardsList?.length == 0 ? (
                    <p className="no-data f-acme w-100">No Records Found</p>
                  ) : (
                    <div className="table-data w-100">
                      {rewardsList?.map((array, index) => {
                        const apiDate = array.time;
                        const formattedDate = new Date(apiDate).toLocaleString("en-US");

                        return (
                          <div key={index} className="d-flex w-100">
                            <div className="p-1 w-30vw d-flex al-center jc-center border-1-w bg-yellow c-black">{formattedDate}</div>
                            {halloween ? (
                              <>
                                <div className="p-1 w-20vw d-flex al-center jc-center border-1-w bg-yellow c-black">
                                  {array?.score == 1 ? "Spooky Pumpkin" : array?.score == 2 ? "Creepy Pumpkin" : "Haunted Pumpkin"}
                                </div>
                                <div className="p-1 w-20vw d-flex al-center jc-center border-1-w bg-yellow c-black">
                                  {array?.score == 1 ? "Skeleton" : "Pumpkin"}
                                </div>
                              </>
                            ) : feedPumpkin ? (
                              <div className="p-1 w-20vw d-flex al-center jc-center border-1-w bg-yellow c-black">
                                {array?.score == 1 ? "Item 1" : array?.score == 2 ? "Item 2" : "Item 3"}
                              </div>
                            ) : null}
                            <div className="p-1 w-60vw d-flex flex-wrap jc-center al-start border-1-w bg-yellow c-black gap-1 pt-2 pb-2">
                              {array.rewardDTOList.map((obj, index) => (
                                <div
                                  key={index}
                                  className={
                                    halloween
                                      ? "rews d-flex al-center jc-center w-100 bg-yellow c-black fd-column"
                                      : "rews d-flex al-center jc-center w-15vw bg-yellow c-black fd-column"
                                  }
                                >
                                  <div className="rew-img d-flex al-center jc-center">
                                    <img src={rewardImages(obj.desc)} alt="" />
                                  </div>
                                  <span className="desc">
                                    {obj.desc} x {obj.count} {obj.desc == "gems" ? null : <>{obj.count == 1 ? "day" : "days"}</>}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
            {isLoading ? null : (
              <>
                {rewardsList?.length == 10 ? (
                  <div className="see-btn" onClick={loadMoreHistory}>
                    <button className="see-more f-acme">See More</button>
                  </div>
                ) : null}
              </>
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

export default Records;
