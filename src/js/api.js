import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { baserUrl } from "./baserUrl";
import { overFlowHidden } from "./helpers";

const ApiContext = createContext();
function EventProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [getEventInfo, setgetEventInfo] = useState([]);
  const [todayWinner, settodayWinner] = useState([]);
  const [previousWinner, setpreviousWinner] = useState([]);
  const [eventTalents, seteventTalents] = useState([]);
  const [eventGifter, seteventGifter] = useState([]);
  const [getWinnerRank, setgetWinnerRank] = useState([]);
  const [alert, setAlert] = useState(false);
  const [alertData, setAlertData] = useState(false);

  const [user, setUser] = useState({
    id: 0,
    uid: 0,
    token: undefined,
  });

  let dayIndex = getEventInfo?.data?.dayIndex;
  let preDayIndex = dayIndex - 1;

  let evn = 1;
  const refreshApi = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    try {
      //   window.phone.getUserInfo(function (userInfo) {
      //     setUser({
      //       uid: userInfo.userId > 0 ? userInfo.userId : 0,
      //       id: userInfo.userId > 0 ? userInfo.userId : 0,
      //       token: userInfo.token !== "" ? userInfo.token : null,
      //     });
      //   });
      setUser({
        uid: 596492376,
        id: 596492376,
        token: "A15A6ECEEE39CE4E52954035CB0A0F0F5C",
      });
    } catch (_error) {
      setUser({
        uid: 0,
        id: 0,
        token: "",
      });

      console.error("Can't get userInfo by window.phone.getUserInfo");
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (user.uid > 0) {
      axios.get(`${baserUrl}api/activity//mazeDash/getUserEventInfo?userId=${user.uid}`).then((response) => {
        if (response.data.errorCode == 0) {
          setgetEventInfo(response.data);
          setIsLoading(false);
          setAlert(false);
        } else {
          setAlert(true);
          setAlertData(response.data.msg);
          overFlowHidden();
        }
      });
    }
  }, [user, refresh]);

  useEffect(() => {
    if (dayIndex > 0) {
      setIsLoading(true);
      axios
        .get(`${baserUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230922_mazeDash&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${dayIndex}`)
        .then((response) => {
          settodayWinner(response?.data);
          setIsLoading(false);
        });
    }
  }, [getEventInfo]);

  useEffect(() => {
    if (dayIndex > 0) {
      setIsLoading(true);
      axios
        .get(`${baserUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230922_mazeDash&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${preDayIndex}`)
        .then((response) => {
          setpreviousWinner(response?.data);
          setIsLoading(false);
        });
    }
  }, [todayWinner]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${baserUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230922_mazeDash&rankIndex=12&pageNum=1&pageSize=20`).then((response) => {
      seteventTalents(response?.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${baserUrl}api/activity/eidF/getLeaderboardInfo?eventDesc=20230922_mazeDash&rankIndex=11&pageNum=1&pageSize=20`).then((response) => {
      seteventGifter(response?.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${baserUrl}api/activity/eidF/getWinnerRankInfo?eventDesc=20230922_mazeDash&rankIndex=1&pageNum=1&pageSize=20`).then((response) => {
      setgetWinnerRank(response?.data);
      setIsLoading(false);
    });
  }, [refresh]);
  return (
    <div>
      <ApiContext.Provider
        value={{
          isLoading,
          setIsLoading,
          refreshApi,
          userId: user.uid,
          userToken: user.token,
          getEventInfo: getEventInfo?.data,
          todayWinner: todayWinner?.data,
          previousWinner: previousWinner?.data,
          eventTalents: eventTalents?.data,
          eventGifters: eventGifter?.data,
          getWinnerRank: getWinnerRank?.data,
        }}
      >
        {children}
      </ApiContext.Provider>
      <div className="overlay" style={{ visibility: alert ? "visible" : "hidden" }}>
        {alert ? (
          <div className="popup-bg p-rel d-flex al-center jc-center">
            <span className="f-size-4 c-yellow">{alertData}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export { ApiContext, EventProvider };
