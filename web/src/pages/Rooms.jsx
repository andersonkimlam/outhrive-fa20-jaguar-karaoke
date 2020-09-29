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
          <div className="row">
            <Room img={require("../images/berkeleyroom1.png")} number={1}/>
            <Room img={require("../images/berkeleyroom2.png")} number={2}/>
            <Room img={require("../images/berkeleyroom3.png")} number={3}/>
            <Room img={require("../images/berkeleyroom4.png")} number={4}/>
          </div>
          <br/>
          <div className="row">
            <Room img={require("../images/berkeleyroom5.png")} number={5}/>
            <Room img={require("../images/berkeleyroom6.png")} number={6}/>
            <Room img={require("../images/berkeleyroom7.png")} number={7}/>
            <Room img={require("../images/berkeleyroom8.png")} number={8}/>
          </div>

        </div>
      </div>

    );

  }
}

export default Rooms;
