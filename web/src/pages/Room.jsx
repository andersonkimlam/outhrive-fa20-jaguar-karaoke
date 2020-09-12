import React from 'react';
import '../App.css';
class Room extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div className="col" id="roombox">
        <img src={this.props.img} className="room"/>
        <p className="room-num"> #{this.props.number}: {this.props.name}</p>
        <p className="room-price"> Price: ${this.props.price}</p>
      </div>

    );

  }
}

export default Room;
