import React from "react";

export default ({ close }) => (
  <div className = "wholePopup">


 <div className="blur"> </div>
  <div className="popupgroup" >



     <a className="close" onClick={close}>


       &times;
     </a>
    {/* <img class = "popup" src={require("../images/karaokebackground1.png")}/> */}
    <a onClick={close}><div className="PopupTitle">COVID-19 Notice</div>
    <br/>
    <div className="PopupBody">
    For the safety of our employees and the Berkeley community,
    we have decided to temporarily close our in-store operations.
    We are offering karaoke rentals delivered to homes in the Bay area.
    <br/><br/>Please call at <a href = "tel:4155772196" color="#9F84BD">415-577-2196</a> to request a delivery today!
    </div>
    </a>

    <div className="PopupClose">
      <button class="btn" className="PopupButton" onClick={close}>
         Got it!
      </button>


    </div>




  </div>

  </div>
);
