import React from 'react';
import Room from './Room.jsx';
import '../App.css';
class Rooms extends React.Component {
  render() {
    return (
      <div>
        <div className="about-page">
          <h1> Rooms</h1>
          <p> We currently have 8 different rooms available to rent! Sizes and prices are listed below.</p>
          <Room/>
          
      {/*
          <div className="row">
            <Room img={require("../images/berkeleyroom1.png")}/>
            <Room img={require("../images/berkeleyroom2.png")}/>
            <Room img={require("../images/berkeleyroom3.png")}/>
            <Room img={require("../images/berkeleyroom4.png")}/>
          </div>
          <br/>
          <div className="row">
            <Room img={require("../images/berkeleyroom5.png")}/>
            <Room img={require("../images/berkeleyroom6.png")}/>
            <Room img={require("../images/berkeleyroom7.png")}/>
            <Room img={require("../images/berkeleyroom8.png")}/>
          </div>
          */}
        </div>
      </div>

    );

  }
}
export default Rooms;
