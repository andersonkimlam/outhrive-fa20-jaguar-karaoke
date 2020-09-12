import React from 'react';
import '../App.css';
class Room extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div>
        <img src={this.props.img} style={{height:"20%"}}/>

      </div>

    );

  }
}

export default Room;
