import React from "react";

function MyPumpkinPoints({ halloween }) {
  return (
    <div className="my-pumpkin-points m-auto d-flex al-center jc-center">
      <span>
        My Pumpkin <br /> Points: {halloween ? "xx" : "yy"}
      </span>
    </div>
  );
}

export default MyPumpkinPoints;
