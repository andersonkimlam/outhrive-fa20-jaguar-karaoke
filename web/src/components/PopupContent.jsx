import React from "react";

export default ({ close }) => (
  <div>


 <div className="blur"> </div>
  <div className="popupgroup">



     <a className="close" onClick={close}>


       &times;
     </a>
    {/* <img class = "popup" src={require("../images/karaokebackground1.png")}/> */}
    <div className="PopupTitle">COVID-19 Notice</div>
    <br/>
    <div className="PopupBody">
    For the safety of our employees and the Berkeley community,
    we have decided to temporarily close our in-store operations.
    We are offering karaoke rentals delivered to homes in the Bay area.
    Please call at 415-577-2196 to request a delivery today!
    </div>


    <div className="PopupClose">
      <button class="btn" className="PopupButton" onClick={close}>
         Got it!
      </button>


    </div>




  </div>

  </div>
);
