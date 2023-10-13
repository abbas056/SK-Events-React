import React from "react";
import { creepyBar, hauntedBar, spookyBar } from "../../js/data";

function ProgressBar({ spooky, creepy, haunted }) {
  let value = 2;
  let barVectors;
  if (spooky) {
    barVectors = spookyBar;
  } else if (creepy) {
    barVectors = creepyBar;
  } else {
    barVectors = hauntedBar;
  }
  return (
    <div className="progress-bar p-rel">
      <div className="heading">
        everyday first {spooky ? "500" : creepy ? "200" : "100"} users will get {spooky ? "1000" : creepy ? "5000" : "10000"} beans
      </div>

      <div className="bar m-auto" style={spooky ? { width: "70%" } : creepy ? { width: "80%" } : { width: "95%" }}>
        <div className="img-box">
          {barVectors?.map((items, i) => (
            <div key={i}>
              <img className={value >= items.id && "grey-scale"} src={items.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
