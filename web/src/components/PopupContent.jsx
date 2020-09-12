import React from "react";

export default ({ close }) => (
  <div className="modal">
     <a className="close" onClick={close}>
       &times;
     </a>
    {/* <img class = "popup" src={require("../images/karaokebackground1.png")}/> */}
    <div className="PopupTitle">COVID-19 Notice</div>
    <br/>
    <div className="PopupBody">
    For the safety of our employees and the Berkeley community,
    we have decided to temporarily limit our in-store karaoke operations.
    Select services including our karaoke machine rental service and room rentals
    are still in operation, but have been modified to follow safety regulations from local health and government officials.


    </div>


    <div className="PopupClose">
      <button class="btn" className="PopupButton" onClick={close}>
         Got it!
      </button>

    </div>
  </div>
);
