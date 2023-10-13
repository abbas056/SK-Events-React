import React from "react";
import { tableData } from "../js/data";

function PrizeDetails() {
  return (
    <div className="prize-details">
      <div className="top-info m-auto">
        <span>
          daily spending of all event gifts. <br />
          will be collected in the halloween pumpkin <br />
          0.5% of collected beans will be distributed <br />
          among the top 10 players of the leaderboard.
        </span>
      </div>
      <div className="table m-auto d-flex al-center jc-center">
        <table className="b-collapse ">
          <thead>
            <tr>
              <th className="border-2-w bg-blue">Prize No.</th>
              <th className="border-2-w bg-blue">Prize</th>
              <th className="border-2-w bg-blue">Estimated Beans</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((data, index) => (
              <tr key={index} className="border-2-w">
                <td className="border-2-w bg-yellow">{data.prizeNo}</td>
                <td className="border-2-w bg-yellow">{data.prize}</td>
                <td className="border-2-w bg-yellow">{data.beans}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PrizeDetails;
