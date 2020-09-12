import React from "react";

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>

    <div className="header"> Modal Title </div>
    <div className="content">
      {" "}
      Text1
      <br />
        Text2
    </div>
  </div>
);
