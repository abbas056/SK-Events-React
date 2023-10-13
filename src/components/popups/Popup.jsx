import React, { useState, useContext } from "react";
import guideBtn from "../../assets/guide.png";
import eventGiftingBtn from "../../assets/event-gifting.png";
import detailsBtn from "../../assets/details.png";
import recordsBtn from "../../assets/records.png";
import GuidePopup from "./GuidePopup";
import EventGifting from "./EventGifting";
import DetailsPopup from "./DetailsPopup";
import Records from "./Records";
import { overFlowAuto, overFlowHidden } from "../../js/helpers";
import { baserUrl } from "../../js/baserUrl";
import axios from "axios";
import { ApiContext } from "../../js/api";

function Popup({ language, halloween, feedPumpkin, buttonDisabled, type }) {
  const { userId } = useContext(ApiContext);

  const [guide, setguide] = useState(false);
  const [eventGifitngBtn, seteventGifitngBtn] = useState(false);
  const [details, setdetails] = useState(false);
  const [gameRecords, setgameRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [records, setrecords] = useState(false);
  const [loadMore, setLoadMore] = useState(1);

  const loadMoreHistory = () => {
    setLoadMore(loadMore + 1);
    gameRecord();
  };
  const resetHistory = () => {
    setLoadMore(1);
    gameRecord();
  };

  const guideFunc = () => {
    setguide(true);
    overFlowHidden();
  };
  const giftingFunc = () => {
    seteventGifitngBtn(true);
    overFlowHidden();
  };
  const detailsFunc = () => {
    setdetails(true);
    overFlowHidden();
  };

  const gameRecord = () => {
    setIsLoading(true);
    axios.get(`${baserUrl}api/activity/mazeDash/getRecord?userId=${userId}&pageNum=${loadMore}&pageSize=10&type=${type}`).then((response) => {
      setgameRecords(response?.data);
      setIsLoading(false);
    });
  };
  const recordsFunc = () => {
    gameRecord();
    setrecords(true);
    overFlowHidden();
  };

  const close = () => {
    setguide(false);
    seteventGifitngBtn(false);
    setdetails(false);
    setrecords(false);
    overFlowAuto();
  };
  return (
    <div className="popup-container">
      <div className="guide p-fix">
        <button disabled={buttonDisabled} onClick={guideFunc}>
          <img className="w-20vw" src={guideBtn} alt="" />
        </button>
      </div>
      <div className="gifting p-fix">
        <button disabled={buttonDisabled} onClick={giftingFunc}>
          <img className="w-20vw" src={eventGiftingBtn} alt="" />
        </button>
      </div>
      <div className={halloween ? "details p-abs" : "details-w p-abs"}>
        <button disabled={buttonDisabled} onClick={detailsFunc}>
          <img className="w-20vw" src={detailsBtn} alt="" />
        </button>
      </div>
      <div className={halloween ? "records p-abs" : "records-w p-abs"}>
        <button disabled={buttonDisabled} onClick={recordsFunc}>
          <img className="w-20vw" src={recordsBtn} alt="" />
        </button>
      </div>
      <GuidePopup close={close} guide={guide} language={language} />
      <EventGifting close={close} eventGifitngBtn={eventGifitngBtn} />
      <DetailsPopup close={close} details={details} halloween={halloween} feedPumpkin={feedPumpkin} />
      <Records
        close={close}
        records={records}
        gameRecords={gameRecords?.data}
        halloween={halloween}
        isLoading={isLoading}
        loadMoreHistory={loadMoreHistory}
        resetHistory={resetHistory}
        feedPumpkin={feedPumpkin}
      />
    </div>
  );
}

export default Popup;
