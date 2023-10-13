import React from "react";

function Content({ halloween, content, language }) {
  let current;
  language === "Urdu/Hindi" ? (current = content.Urdu) : (current = content.English);
  return (
    <div className="text-data f-acme f-poppin">
      <div className="text">
        {current.text}
        {halloween ? (
          <table className="border-2-w b-collapse w-90 m-auto ">
            <tr>
              <td className="border-1-w w-40vw bg-blue">{current.table.th1}</td>
              <td className="border-1-w w-40vw bg-blue">{current.table.th2}</td>
            </tr>
            <tr>
              <td className="border-1-w w-40vw  bg-yellow">{current.table.td11}</td>
              <td className="border-1-w w-40vw  bg-yellow">{current.table.td12}</td>
            </tr>
            <tr>
              <td className="border-1-w w-40vw  bg-yellow">{current.table.td21}</td>
              <td className="border-1-w w-40vw  bg-yellow">{current.table.td22}</td>
            </tr>
            <tr>
              <td className="border-1-w w-40vw  bg-yellow">{current.table.td31}</td>
              <td className="border-1-w w-40vw  bg-yellow">{current.table.td32}</td>
            </tr>
          </table>
        ) : null}
        {current.heading1}
        {current.text1}
        {current.heading2}
        {current.text2}
      </div>
    </div>
  );
}

export default Content;
