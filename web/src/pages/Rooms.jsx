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
            <Room img={require("../images/mic.png")} number={1} name="Dimension" price="25"/>
            <Room img={require("../images/mic.png")} number={2} name="Dimension" price="25"/>
            <Room img={require("../images/mic.png")} number={3} name="Dimension" price="25"/>
            <Room img={require("../images/mic.png")} number={4} name="Dimension" price="25"/>
          </div>
          <div className="row">
            <Room img={require("../images/mic.png")} number={1} name="Dimension" price="25"/>
            <Room img={require("../images/mic.png")} number={2} name="Dimension" price="25"/>
            <Room img={require("../images/mic.png")} number={3} name="Dimension" price="25"/>
            <Room img={require("../images/mic.png")} number={4} name="Dimension" price="25"/>
          </div>
          
        </div>
      </div>

    );

  }
}

export default Rooms;
