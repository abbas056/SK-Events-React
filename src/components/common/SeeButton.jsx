import React from "react";
import moreBtn from "../../assets/see-more.png";
import lessBtn from "../../assets/see-more.png";

function SeeButton({ active, handleChangeActive }) {
  return (
    <div className="see-buttons">
      {active ? (
        <button className="see-more m-auto" onClick={handleChangeActive}>
          <img src={moreBtn} alt="" />
        </button>
      ) : (
        <button className="see-less m-auto" onClick={handleChangeActive}>
          <img src={lessBtn} alt="" />
        </button>
      )}
    </div>
  );
}

export default SeeButton;
